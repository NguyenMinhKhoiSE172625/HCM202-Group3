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
    name: 'AI Lịch sử Việt Nam 1954-1964',
    title: 'Trợ lý AI chuyên về lịch sử Việt Nam 1954-1964',
    avatar: '/images/img2.svg',
    description: 'AI được huấn luyện chuyên sâu về giai đoạn lịch sử Việt Nam 1954-1964',
    color: 'from-blue-500 to-purple-600',
    personality: 'intelligent'
  }

  const suggestedQuestions = [
    "Hiệp định Geneva 1954 có ý nghĩa gì với lịch sử Việt Nam?",
    "Tại sao Ngô Đình Diệm từ chối tổ chức tổng tuyển cử 1956?",
    "Chiến dịch Tố Cộng (1955-1959) diễn ra như thế nào?",
    "Mặt trận Dân tộc Giải phóng miền Nam được thành lập khi nào?",
    "Mỹ bắt đầu can thiệp vào Việt Nam từ khi nào?",
    "Chính quyền Ngô Đình Diệm kết thúc ra sao?",
    "Tình hình miền Bắc giai đoạn 1954-1964 như thế nào?",
    "Ý nghĩa lịch sử của giai đoạn 1954-1964?"
  ]

  const initialMessage = useMemo(() =>
    "Xin chào! Tôi là AI Lịch sử Việt Nam 1954-1964, được huấn luyện chuyên sâu về giai đoạn quan trọng này trong lịch sử dân tộc. Tôi có thể giúp bạn tìm hiểu về Hiệp định Geneva, chính quyền Ngô Đình Diệm, Chiến dịch Tố Cộng, sự can thiệp của Mỹ và nhiều sự kiện lịch sử khác. Bạn muốn tìm hiểu về vấn đề gì?"
  , [])

  const getOfflineResponse = (message: string): string | null => {
    const lowerMessage = message.toLowerCase()

    const responses: { [key: string]: string } = {
      "hiệp định geneva": `Hiệp định Geneva 1954:

📅 **Thời gian**: Ký ngày 21/7/1954 tại Geneva, Thụy Sĩ

🏁 **Ý nghĩa**: Kết thúc chiến tranh Đông Dương lần thứ nhất

🗺️ **Chia cắt**: Tạm chia Việt Nam tại vĩ tuyến 17

🗳️ **Tổng tuyển cử**: Quy định tổ chức tổng tuyển cử thống nhất trong 2 năm (1956)

🇫🇷 **Pháp rút quân**: Pháp chính thức rút quân khỏi Việt Nam`,

      "ngô đình diệm": `Ngô Đình Diệm và chính quyền Sài Gòn (1954-1963):

👑 **Lên nắm quyền**: Năm 1954 với sự ủng hộ của Mỹ

❌ **Từ chối tổng tuyển cử**: Không tổ chức tổng tuyển cử năm 1956

🔨 **Đàn áp**: Thực hiện "Chiến dịch Tố Cộng" và đàn áp tôn giáo

💀 **Kết thúc**: Bị đảo chính và giết chết ngày 2/11/1963`,

      "chiến dịch tố cộng": `Chiến dịch Tố Cộng (1955-1959):

⚔️ **Bản chất**: Chiến dịch đàn áp của chính quyền Diệm

⚖️ **Luật 10/59**: Cho phép tử hình không cần xét xử

📊 **Số liệu**: Hơn 100,000 người bị bắt, 25,000 người bị giết

🎯 **Mục tiêu**: Tiêu diệt cán bộ cách mạng và người yêu nước`,

      "mặt trận giải phóng": `Mặt trận Dân tộc Giải phóng miền Nam:

📅 **Thành lập**: Ngày 20/12/1960

⚡ **Nguyên nhân**: Phản ứng trước sự đàn áp của chế độ Mỹ-Diệm

🎯 **Mục tiêu**: Độc lập, dân chủ, hòa bình, trung lập

👥 **Ủng hộ**: Được nhân dân miền Nam ủng hộ rộng rãi`,

      "can thiệp mỹ": `Sự can thiệp của Mỹ:

🇺🇸 **Bắt đầu**: Can thiệp từ 1954 thay thế Pháp

📈 **Tăng cường**: Từ thời Tổng thống Kennedy (1961)

👨‍💼 **Số quân**: Tăng từ 3,200 (1961) lên 23,300 (1964)

🎯 **Mục tiêu**: Ngăn chặn "chủ nghĩa cộng sản" lan rộng`
    }

    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerMessage.includes(keyword) || lowerMessage.includes(keyword.replace(/\s+/g, ''))) {
        return response
      }
    }

    // Check for common greetings
    if (lowerMessage.includes('xin chào') || lowerMessage.includes('hello') || lowerMessage.includes('chào')) {
      return "Xin chào! Tôi có thể giúp bạn tìm hiểu về lịch sử Việt Nam 1954-1964. Bạn muốn hỏi về: Hiệp định Geneva, Ngô Đình Diệm, Chiến dịch Tố Cộng, Mặt trận Giải phóng, hay sự can thiệp của Mỹ?"
    }

    return null
  }

          const generateAIResponse = async (message: string): Promise<string> => {
    setIsTyping(true)

    // First try offline responses for better user experience
    const offlineResponse = getOfflineResponse(message)
    if (offlineResponse) {
      setIsTyping(false)
      return offlineResponse
    }

    try {
      // Check if API key is available
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY
      if (!apiKey || apiKey.trim() === '') {
        setIsTyping(false)
        return "Để sử dụng AI Assistant, bạn cần:\n1. Tạo API key tại https://platform.openai.com/api-keys\n2. Tạo file .env trong thư mục gốc\n3. Thêm dòng: VITE_OPENAI_API_KEY=your_api_key_here\n4. Khởi động lại ứng dụng (Ctrl+C rồi npm run dev)\n\nHiện tại bạn có thể sử dụng các tính năng khác của website."
      }



      // Import OpenAI
      const { OpenAI } = await import('openai')

      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      })

      // Get conversation history from localStorage
      const conversationHistory = JSON.parse(localStorage.getItem('ai-chat-history') || '[]')

      // System prompt for Vietnam History 1954-1964
      const systemPrompt = `Bạn là một AI chuyên gia về lịch sử Việt Nam giai đoạn 1954-1964. Bạn được huấn luyện chuyên sâu để cung cấp thông tin chính xác, khách quan về thời kỳ quan trọng này trong lịch sử dân tộc.

KIẾN THỨC CỐT LÕI:

HIỆP ĐỊNH GENEVA 1954:
- Ký ngày 21/7/1954 tại Geneva, Thụy Sĩ
- Kết thúc chiến tranh Đông Dương lần thứ nhất
- Tạm chia Việt Nam tại vĩ tuyến 17
- Quy định tổ chức tổng tuyển cử thống nhất trong 2 năm (1956)
- Pháp rút quân khỏi Việt Nam

NGÔ ĐÌNH DIỆM VÀ CHÍNH QUYỀN SÀI GÒN (1954-1963):
- Lên nắm quyền năm 1954 với sự ủng hộ của Mỹ
- Từ chối tổ chức tổng tuyển cử năm 1956
- Thực hiện "Cải cách Ruộng đất" và "Chiến dịch Tố Cộng"
- Đàn áp tôn giáo và người dân
- Bị đảo chính và giết chết ngày 2/11/1963

CHIẾN DỊCH TỐ CỘNG (1955-1959):
- Chiến dịch đàn áp của chính quyền Diệm
- Luật 10/59: Cho phép tử hình không cần xét xử
- Hơn 100,000 người bị bắt, 25,000 người bị giết
- Mục tiêu: Tiêu diệt cán bộ cách mạng và người yêu nước

MẶT TRẬN DÂN TỘC GIẢI PHÓNG MIỀN NAM (1960):
- Thành lập ngày 20/12/1960
- Phản ứng trước sự đàn áp của chế độ Mỹ-Diệm
- Mục tiêu: Độc lập, dân chủ, hòa bình, trung lập
- Được nhân dân miền Nam ủng hộ

CAN THIỆP CỦA MỸ:
- Bắt đầu can thiệp từ 1954 thay thế Pháp
- Tăng cường từ thời Tổng thống Kennedy (1961)
- Số quân tăng từ 3,200 (1961) lên 23,300 (1964)
- Mục tiêu: Ngăn chặn "chủ nghĩa cộng sản" lan rộng

NGUYÊN TẮC TRẢ LỜI:
1. Sử dụng tiếng Việt chuẩn, dễ hiểu
2. Cung cấp thông tin chính xác dựa trên sự kiện lịch sử
3. Trích dẫn năm tháng, số liệu cụ thể khi có thể
4. Giải thích bối cảnh lịch sử để người đọc hiểu rõ hơn
5. Cân bằng các quan điểm khác nhau khi phù hợp
6. Khuyến khích tư duy phản biện và học hỏi
7. Độ dài phù hợp (100-400 từ tùy theo độ phức tạp của câu hỏi)
8. Sử dụng giọng điệu thân thiện, dễ tiếp cận

ĐIỀU CẤM:
- Không bịa đặt sự kiện lịch sử
- Không sử dụng ngôn ngữ phản cảm hoặc kích động
- Không trả lời câu hỏi ngoài phạm vi 1954-1964
- Không thể hiện quan điểm chính trị hiện tại
- Không thiên vị quá mức theo một quan điểm duy nhất`

      // Build messages array for OpenAI
      const messages = [
        {
          role: 'system' as const,
          content: systemPrompt
        },
        // Add conversation history
        ...conversationHistory.map((msg: any) => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content
        })),
        // Add current message
        {
          role: 'user' as const,
          content: message
        }
      ]

      // Generate response using OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7
      })

      const reply = completion.choices[0]?.message?.content || "Xin lỗi, tôi không thể tạo phản hồi lúc này."

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
      console.error('Error calling OpenAI API:', error)
      console.error('Error details:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : undefined
      })
      setIsTyping(false)

      // Check for specific API errors
      const errorMessage = error instanceof Error ? error.message : String(error)

      if (errorMessage.includes('API key not valid') || errorMessage.includes('Incorrect API key') || errorMessage.includes('invalid_api_key')) {
        return "❌ API key không hợp lệ!\n\n🔧 Cách khắc phục:\n1. Kiểm tra API key trong file .env\n2. Đảm bảo API key bắt đầu bằng 'sk-proj-...'\n3. Khởi động lại server (Ctrl+C rồi npm run dev)\n4. Refresh trang web\n\n💡 Hiện tại AI đang hoạt động ở chế độ offline với câu trả lời có sẵn."
      }

      if (errorMessage.includes('quota') || errorMessage.includes('rate_limit_exceeded')) {
        return "Xin lỗi, đã vượt quá giới hạn sử dụng API. Vui lòng thử lại sau."
      }

      if (errorMessage.includes('insufficient_quota') || errorMessage.includes('billing')) {
        return "❌ Lỗi thanh toán!\n\n🔧 Nguyên nhân có thể:\n1. Tài khoản OpenAI chưa có credit\n2. Đã vượt quá giới hạn sử dụng\n3. Cần nạp thêm credit vào tài khoản\n\n💡 Đang sử dụng chế độ offline với câu trả lời có sẵn."
      }

      // Fallback response with helpful content
      const fallbackResponses = {
        "geneva": "Hiệp định Geneva được ký ngày 21/7/1954, kết thúc chiến tranh Đông Dương lần thứ nhất. Hiệp định tạm chia Việt Nam tại vĩ tuyến 17 và quy định tổ chức tổng tuyển cử thống nhất trong 2 năm (1956).",
        "diệm": "Ngô Đình Diệm lên nắm quyền năm 1954 với sự ủng hộ của Mỹ. Ông từ chối tổ chức tổng tuyển cử năm 1956 và thực hiện Chiến dịch Tố Cộng đàn áp người dân. Diệm bị đảo chính và giết chết ngày 2/11/1963.",
        "tố cộng": "Chiến dịch Tố Cộng (1955-1959) là chiến dịch đàn áp của chính quyền Diệm. Luật 10/59 cho phép tử hình không cần xét xử. Hơn 100,000 người bị bắt, 25,000 người bị giết.",
        "mặt trận": "Mặt trận Dân tộc Giải phóng miền Nam được thành lập ngày 20/12/1960, phản ứng trước sự đàn áp của chế độ Mỹ-Diệm. Mục tiêu: độc lập, dân chủ, hòa bình, trung lập.",
        "mỹ": "Mỹ bắt đầu can thiệp vào Việt Nam từ 1954 thay thế Pháp. Số quân Mỹ tăng từ 3,200 (1961) lên 23,300 (1964) dưới thời Tổng thống Kennedy."
      }

      const lowerMessage = message.toLowerCase()
      for (const [key, response] of Object.entries(fallbackResponses)) {
        if (lowerMessage.includes(key)) {
          return response + "\n\n(Lưu ý: AI đang gặp sự cố kỹ thuật, đây là thông tin cơ bản. Vui lòng thử lại sau.)"
        }
      }

      return "Xin lỗi, tôi đang gặp khó khăn kỹ thuật. Đây là một chủ đề thú vị về lịch sử Việt Nam 1954-1964. Bạn có thể thử hỏi về: Hiệp định Geneva, Ngô Đình Diệm, Chiến dịch Tố Cộng, Mặt trận Giải phóng, hoặc sự can thiệp của Mỹ."
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
