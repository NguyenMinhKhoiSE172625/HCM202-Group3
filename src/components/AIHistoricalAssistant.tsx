import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Send,
  Mic,
  Volume2,
  RefreshCw,
  X
} from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface Persona {
  id: string
  name: string
  title: string
  avatar: string
  description: string
  color: string
  personality: string
}

const AIHistoricalAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const aiPersona: Persona = {
    id: 'ai-assistant',
    name: 'AI Lịch sử Việt Nam',
    title: 'Trợ lý AI chuyên về lịch sử 1954-1964',
    avatar: '/images/img2.svg',
    description: 'AI được huấn luyện chuyên sâu về lịch sử Việt Nam',
    color: 'from-blue-500 to-purple-600',
    personality: 'intelligent'
  }

  const suggestedQuestions = [
    "Tại sao Ngô Đình Diệm từ chối tổng tuyển cử năm 1956?",
    "Chiến dịch Tố Cộng diễn ra như thế nào?",
    "Mặt trận Giải phóng được thành lập vì lý do gì?",
    "Vai trò của Mỹ trong giai đoạn 1954-1964?",
    "Hiệp định Geneva có ý nghĩa gì?",
    "Cuộc sống của nhân dân miền Nam ra sao?",
    "So sánh quan điểm nội chiến và giải phóng dân tộc",
    "Tầm quan trọng của năm 1960 trong lịch sử Việt Nam?"
  ]

  const initialMessage = useMemo(() =>
    "Xin chào! Tôi là AI Lịch sử Việt Nam, được huấn luyện chuyên sâu về giai đoạn 1954-1964. Tôi có thể giúp bạn tìm hiểu về Hiệp định Geneva, Chiến dịch Tố Cộng, Mặt trận Giải phóng, và nhiều sự kiện quan trọng khác trong thời kỳ này. Bạn muốn tìm hiểu về vấn đề gì?"
  , [])

          const generateAIResponse = async (message: string): Promise<string> => {
    setIsTyping(true)

    try {
      // Check if API key is available
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY
      if (!apiKey) {
        setIsTyping(false)
        return "Xin lỗi, API key chưa được cấu hình. Vui lòng liên hệ quản trị viên để kích hoạt tính năng AI."
      }

      // Import Google Generative AI
      const { GoogleGenerativeAI } = await import('@google/generative-ai')

      const genAI = new GoogleGenerativeAI(apiKey)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

      // Get conversation history from localStorage
      const conversationHistory = JSON.parse(localStorage.getItem('ai-chat-history') || '[]')

      // System prompt for Vietnam History 1954-1964 based on SIMPLE_SYSTEM_INSTRUCTIONS.txt
      const systemPrompt = `Bạn là một AI chuyên gia về lịch sử Việt Nam giai đoạn 1954-1964. Bạn được huấn luyện chuyên sâu để cung cấp thông tin chính xác, khách quan về thời kỳ quan trọng này.

KIẾN THỨC CỐT LÕI:
- Hiệp định Geneva 1954 (21/7/1954): Kết thúc chiến tranh Đông Dương, tạm chia Việt Nam tại vĩ tuyến 17
- Ngô Đình Diệm (1954-1963): Từ chối tổng tuyển cử 1956, thực hiện Chiến dịch Tố Cộng
- Chiến dịch Tố Cộng (1955-1959): Luật 10/59, hơn 100,000 người bị bắt, 25,000 người bị giết
- Mặt trận Dân tộc Giải phóng miền Nam (20/12/1960): Phản ứng trước sự đàn áp của chế độ Mỹ-Diệm
- Can thiệp của Mỹ: Từ 3,200 quân (1961) lên 23,300 quân (1964)

NGUYÊN TẮC TRẢ LỜI:
1. Sử dụng tiếng Việt chuẩn, dễ hiểu
2. Cung cấp thông tin chính xác với năm tháng, số liệu cụ thể
3. Giải thích bối cảnh lịch sử
4. Cân bằng các quan điểm khác nhau
5. Độ dài 100-400 từ tùy theo độ phức tạp
6. Giọng điệu thân thiện, khoa học, khách quan
7. Khuyến khích tư duy phản biện

ĐIỀU CẤM:
- Không bịa đặt sự kiện lịch sử
- Không trả lời câu hỏi ngoài phạm vi 1954-1964
- Không thể hiện quan điểm chính trị hiện tại
- Không thiên vị quá mức theo một quan điểm duy nhất`

      // Build conversation context
      let conversationContext = systemPrompt + "\n\nLịch sử cuộc trò chuyện:\n"
      conversationHistory.forEach((msg: any) => {
        conversationContext += `${msg.role === 'user' ? 'Người dùng' : 'AI'}: ${msg.content}\n`
      })
      conversationContext += `Người dùng: ${message}\nAI:`

      // Generate response
      const result = await model.generateContent(conversationContext)
      const response = await result.response
      const reply = response.text()

      // Update conversation history
      const updatedHistory = [
        ...conversationHistory,
        { role: 'user', content: message },
        { role: 'assistant', content: reply }
      ]

      // Keep only last 10 exchanges to prevent context from getting too long
      if (updatedHistory.length > 20) {
        updatedHistory.splice(0, updatedHistory.length - 20)
      }

      localStorage.setItem('ai-chat-history', JSON.stringify(updatedHistory))

      setIsTyping(false)
      return reply

    } catch (error) {
      console.error('Error calling Gemini API:', error)
      setIsTyping(false)

      // Check for specific API errors
      const errorMessage = error instanceof Error ? error.message : String(error)

      if (errorMessage.includes('API key not valid')) {
        return "Xin lỗi, API key không hợp lệ. Vui lòng kiểm tra cấu hình API key trong environment variables."
      }

      if (errorMessage.includes('quota')) {
        return "Xin lỗi, đã vượt quá giới hạn sử dụng API. Vui lòng thử lại sau."
      }

      // Fallback response
      return "Xin lỗi, tôi đang gặp khó khăn kỹ thuật. Đây là một chủ đề thú vị về lịch sử Việt Nam 1954-1964. Bạn có thể thử hỏi lại sau ít phút được không?"
    }
  }

  const sendMessage = async () => {
    if (!currentMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentMessage('')

    // Generate AI response
    const aiResponse = await generateAIResponse(currentMessage)

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      isUser: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, aiMessage])
  }

  const handleSuggestedQuestion = (question: string) => {
    setCurrentMessage(question)
  }

  const clearChat = () => {
    setMessages([])
    // Clear thread from localStorage to start fresh
    localStorage.removeItem('ai-chat-thread-id')
    // Add initial message
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: initialMessage,
      isUser: false,
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
  }

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'vi-VN'
      speechSynthesis.speak(utterance)
    }
  }

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SpeechRecognition = (window as any).webkitSpeechRecognition;

      const recognition = new SpeechRecognition()
      recognition.lang = 'vi-VN'
      recognition.onstart = () => setIsListening(true)
      recognition.onend = () => setIsListening(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setCurrentMessage(transcript)
      }
      recognition.start()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    // Initialize with welcome message
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: initialMessage,
        isUser: false,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [messages.length, initialMessage])

  const currentPersona = aiPersona

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>
    )
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${currentPersona.color} text-white p-4 flex items-center justify-between`}>
        <div className="flex items-center space-x-3">
          <img
            src={currentPersona.avatar}
            alt={currentPersona.name}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <h3 className="font-semibold text-sm">{currentPersona.name}</h3>
            <p className="text-xs opacity-90">{currentPersona.title}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={clearChat}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>



      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-2xl ${
                message.isUser
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                {!message.isUser && (
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString('vi-VN', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <button
                      onClick={() => speakMessage(message.text)}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <div className="p-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Câu hỏi gợi ý:</p>
          <div className="space-y-1 max-h-20 overflow-y-auto">
            {suggestedQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Đặt câu hỏi về lịch sử..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={startListening}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-colors ${
                isListening ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100 text-gray-400'
              }`}
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={sendMessage}
            disabled={!currentMessage.trim()}
            className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default AIHistoricalAssistant
