// API Proxy to hide OpenAI calls from Network tab
// This uses Web Workers to make API calls in background

interface WorkerMessage {
  type: 'openai-request'
  payload: {
    apiKey: string
    assistantId: string
    threadId?: string
    message: string
  }
}

interface WorkerResponse {
  type: 'openai-response' | 'openai-error'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any
}

// Create inline Web Worker to hide API calls
const createWorker = () => {
  const workerCode = `
    let openai = null;

    self.onmessage = async function(e) {
      const { type, payload } = e.data;

      if (type === 'openai-request') {
        try {
          // Dynamic import OpenAI in worker
          if (!openai) {
            const { OpenAI } = await import('https://cdn.skypack.dev/openai@4.20.1');
            openai = new OpenAI({
              apiKey: payload.apiKey,
              dangerouslyAllowBrowser: true
            });
          }

          // Get or create thread
          let threadId = payload.threadId;
          if (!threadId) {
            const thread = await openai.beta.threads.create();
            threadId = thread.id;
          }

          // Add message
          await openai.beta.threads.messages.create(threadId, {
            role: 'user',
            content: payload.message
          });

          // Run assistant
          const run = await openai.beta.threads.runs.create(threadId, {
            assistant_id: payload.assistantId
          });

          // Wait for completion
          let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
          let attempts = 0;
          const maxAttempts = 30;

          while ((runStatus.status === 'queued' || runStatus.status === 'in_progress') && attempts < maxAttempts) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
            attempts++;
          }

          if (runStatus.status === 'completed') {
            const messages = await openai.beta.threads.messages.list(threadId);
            const assistantMessage = messages.data.find(msg => msg.role === 'assistant');

            if (assistantMessage && assistantMessage.content[0]) {
              const content = assistantMessage.content[0];
              if (content.type === 'text') {
                self.postMessage({
                  type: 'openai-response',
                  payload: {
                    reply: content.text.value,
                    threadId: threadId
                  }
                });
                return;
              }
            }
          }

          self.postMessage({
            type: 'openai-error',
            payload: { error: 'No response received' }
          });

        } catch (error) {
          self.postMessage({
            type: 'openai-error',
            payload: { error: error.message }
          });
        }
      }
    };
  `;

  const blob = new Blob([workerCode], { type: 'application/javascript' });
  return new Worker(URL.createObjectURL(blob));
};

export const callOpenAIViaWorker = (
  apiKey: string,
  assistantId: string,
  message: string,
  threadId?: string
): Promise<{ reply: string; threadId: string }> => {
  return new Promise((resolve, reject) => {
    const worker = createWorker();

    worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
      const { type, payload } = e.data;

      if (type === 'openai-response') {
        worker.terminate();
        resolve(payload);
      } else if (type === 'openai-error') {
        worker.terminate();
        reject(new Error(payload.error));
      }
    };

    worker.onerror = (error) => {
      worker.terminate();
      reject(error);
    };

    const message_data: WorkerMessage = {
      type: 'openai-request',
      payload: {
        apiKey,
        assistantId,
        threadId,
        message
      }
    };

    worker.postMessage(message_data);
  });
};
