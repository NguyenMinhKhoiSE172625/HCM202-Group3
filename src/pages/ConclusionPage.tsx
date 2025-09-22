import { motion } from 'framer-motion'
import {
  CheckCircle,
  Gavel,
  Users,
  Heart,
  Award,
  BookOpen,
  Globe,
  Flag,
  Star,
  TrendingUp,
  Shield,
  // Target, // Unused for now
  Lightbulb
} from 'lucide-react'

const ConclusionPage = () => {
  const mainConclusion = {
    title: "CUỘC ĐẤU TRANH GIẢI PHÓNG DÂN TỘC",
    description: "Giai đoạn 1954-1964 ở Việt Nam KHÔNG PHẢI là nội chiến mà là cuộc đấu tranh giải phóng dân tộc"
  }

  const legalBasis = [
    "Vi phạm Hiệp định Geneva: Chính quyền Sài Gòn đơn phương từ chối thực hiện cam kết quốc tế",
    "Tính bất hợp pháp: Sự phân chia không có cơ sở pháp lý sau 1956",
    "Quyền chính đáng: Nhân dân có quyền đấu tranh cho thống nhất"
  ]

  const politicalBasis = [
    "Can thiệp ngoại bang: Mỹ thực tế kiểm soát chính quyền miền Nam",
    "Tính tay sai: Chính quyền Sài Gòn phụ thuộc hoàn toàn vào Mỹ",
    "Ý chí nhân dân: Đa số nhân dân mong muốn thống nhất"
  ]

  const socialBasis = [
    "Đàn áp tàn bạo: Chiến dịch 'Tố Cộng' giết hại người vô tội",
    "Bóc lột kinh tế: Chính sách phục vụ lợi ích ngoại bang",
    "Phá hoại văn hóa: Áp đặt lối sống phương Tây"
  ]

  const characteristics = [
    {
      icon: Flag,
      title: "Tính chính nghĩa",
      points: [
        "Đấu tranh vì độc lập, thống nhất, dân chủ",
        "Chống lại sự can thiệp và áp bức",
        "Bảo vệ chủ quyền quốc gia"
      ]
    },
    {
      icon: Globe,
      title: "Sự ủng hộ quốc tế",
      points: [
        "Phong trào Không liên kết ủng hộ",
        "Các nước xã hội chủ nghĩa giúp đỡ",
        "Dư luận thế giới đồng tình"
      ]
    },
    {
      icon: Users,
      title: "Tính nhân dân",
      points: [
        "Có sự tham gia của mọi tầng lớp nhân dân",
        "Được lãnh đạo bởi lực lượng yêu nước chân chính",
        "Mục tiêu vì lợi ích của dân tộc"
      ]
    }
  ]

  const historicalSignificance = [
    {
      icon: Flag,
      title: "Đối với Việt Nam",
      points: [
        "Khẳng định truyền thống đấu tranh yêu nước",
        "Chứng minh ý chí thống nhất của dân tộc",
        "Góp phần vào thắng lợi cuối cùng (1975)"
      ]
    },
    {
      icon: Globe,
      title: "Đối với thế giới",
      points: [
        "Một trang sử vẻ vang của phong trào giải phóng dân tộc",
        "Bài học về quyền tự quyết của các dân tộc",
        "Cảnh báo về hậu quả của can thiệp ngoại bang"
      ]
    }
  ]

  const lessons = [
    {
      icon: Shield,
      title: "Về đấu tranh giải phóng dân tộc",
      points: [
        "Cần có sự lãnh đạo đúng đắn",
        "Phải dựa vào sức mạnh nhân dân",
        "Kết hợp đấu tranh trong nước và quốc tế"
      ]
    },
    {
      icon: Heart,
      title: "Về xây dựng và bảo vệ đất nước",
      points: [
        "Độc lập gắn liền với thống nhất",
        "Không được phép hy sinh chủ quyền",
        "Đoàn kết dân tộc là sức mạnh cơ bản"
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-green-50 via-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Kết luận và nhận định
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Kết luận khoa học</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dựa trên phân tích toàn diện các dữ kiện lịch sử, chúng ta đưa ra kết luận khách quan
            về tính chất thực sự của giai đoạn 1954-1964.
          </p>
        </motion.div>

        {/* Main Conclusion */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-10 rounded-full float-animation"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-white bg-opacity-10 rounded-full float-animation-delayed"></div>
            <div className="absolute top-1/2 left-8 w-8 h-8 vietnam-flag-colors rounded-full opacity-30 float-animation"></div>

            <div className="text-center relative z-10">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center pulse-glow"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {mainConclusion.title}
              </h2>
              <p className="text-xl text-green-100 leading-relaxed max-w-4xl mx-auto">
                {mainConclusion.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Three Main Basis */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ba căn cứ chính
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Legal Basis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Gavel className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">A. Căn cứ pháp lý</h3>
              </div>
              <ul className="space-y-4">
                {legalBasis.map((basis, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{basis}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Political Basis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">B. Căn cứ chính trị</h3>
              </div>
              <ul className="space-y-4">
                {politicalBasis.map((basis, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{basis}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Basis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">C. Căn cứ xã hội</h3>
              </div>
              <ul className="space-y-4">
                {socialBasis.map((basis, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{basis}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Characteristics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Đặc điểm của cuộc đấu tranh giải phóng dân tộc
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characteristics.map((char, index) => {
              const Icon = char.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-yellow-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{char.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {char.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-3">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Historical Significance */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ý nghĩa lịch sử
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historicalSignificance.map((significance, index) => {
              const Icon = significance.icon
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{significance.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {significance.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-3">
                        <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Lessons Learned */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Bài học rút ra
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessons.map((lesson, index) => {
              const Icon = lesson.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{lesson.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {lesson.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-3">
                        <Lightbulb className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Flag className="w-8 h-8" />
              <h2 className="text-2xl md:text-3xl font-bold">Tự hào truyền thống dân tộc</h2>
              <Flag className="w-8 h-8" />
            </div>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Tài liệu này cung cấp khung phân tích toàn diện về giai đoạn 1954-1964 ở Việt Nam,
              giúp làm rõ tính chất thực sự của cuộc đấu tranh trong thời kỳ này và khẳng định
              quan điểm khoa học, khách quan về lịch sử dân tộc.
            </p>
            <div className="mt-6">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full">
                <BookOpen className="w-5 h-5 mr-2" />
                <span className="font-semibold">Lịch sử Đảng Cộng sản Việt Nam</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ConclusionPage
