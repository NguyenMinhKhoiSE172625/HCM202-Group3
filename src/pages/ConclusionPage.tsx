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
    title: "TƯ TƯỞNG VĨ ĐẠI CỦA HỒ CHÍ MINH",
    description: "Tư tưởng độc lập dân tộc và chủ nghĩa xã hội của Hồ Chí Minh là sự kết hợp hài hòa, sáng tạo và phù hợp với điều kiện Việt Nam"
  }

  const theoreticalBasis = [
    "Kết hợp sáng tạo: Vận dụng chủ nghĩa Mác-Lênin vào điều kiện cụ thể của Việt Nam",
    "Tính khoa học: Dựa trên quy luật khách quan của lịch sử và xã hội",
    "Tính thực tiễn: Xuất phát từ thực tế và phục vụ thực tiễn cách mạng"
  ]

  const practicalBasis = [
    "Thành công lịch sử: Dẫn dắt cách mạng Việt Nam từ thắng lợi này đến thắng lợi khác",
    "Tính hiện thực: Phù hợp với điều kiện kinh tế - xã hội của Việt Nam",
    "Sức sống mãnh liệt: Tiếp tục là kim chỉ nam trong thời kỳ đổi mới"
  ]

  const valueBasis = [
    "Tính nhân văn: Đặt con người làm trung tâm của mọi chính sách",
    "Tính dân tộc: Giữ gìn và phát huy bản sắc văn hóa dân tộc",
    "Tính thời đại: Hướng tới những giá trị tiến bộ của nhân loại"
  ]

  const characteristics = [
    {
      icon: Flag,
      title: "Tính độc lập dân tộc",
      points: [
        "Khát vọng giải phóng dân tộc khỏi ách thống trị",
        "Xây dựng nhà nước độc lập, tự chủ",
        "Đại đoàn kết toàn dân tộc"
      ]
    },
    {
      icon: Globe,
      title: "Tính chủ nghĩa xã hội",
      points: [
        "Xóa bỏ chế độ bóc lột, xây dựng xã hội công bằng",
        "Nhân dân làm chủ đất nước",
        "Phát triển toàn diện con người"
      ]
    },
    {
      icon: Users,
      title: "Tính kết hợp hài hòa",
      points: [
        "Độc lập dân tộc là tiền đề, chủ nghĩa xã hội là định hướng",
        "Bổ sung và thúc đẩy lẫn nhau",
        "Phù hợp với điều kiện cụ thể của Việt Nam"
      ]
    }
  ]

  const historicalSignificance = [
    {
      icon: Flag,
      title: "Đối với Việt Nam",
      points: [
        "Định hướng con đường cách mạng và xây dựng đất nước",
        "Nền tảng tư tưởng cho sự nghiệp đổi mới",
        "Kim chỉ nam cho các thế hệ mai sau"
      ]
    },
    {
      icon: Globe,
      title: "Đối với thế giới",
      points: [
        "Mô hình kết hợp độc lập dân tộc với chủ nghĩa xã hội",
        "Kinh nghiệm quý báu cho các dân tộc bị áp bức",
        "Đóng góp vào kho tàng tư tưởng nhân loại"
      ]
    }
  ]

  const lessons = [
    {
      icon: Shield,
      title: "Về xây dựng tư tưởng cách mạng",
      points: [
        "Phải kết hợp tính dân tộc với tính thời đại",
        "Vận dụng sáng tạo lý luận vào thực tiễn",
        "Xuất phát từ lợi ích của nhân dân"
      ]
    },
    {
      icon: Heart,
      title: "Về lãnh đạo cách mạng",
      points: [
        "Cần có tư tưởng chỉ đạo đúng đắn",
        "Phải gắn bó mật thiết với nhân dân",
        "Kiên định mục tiêu, linh hoạt về phương pháp"
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
            Dựa trên phân tích toàn diện, chúng ta đưa ra kết luận khách quan
            về tư tưởng độc lập dân tộc và chủ nghĩa xã hội của Hồ Chí Minh.
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
            {/* Theoretical Basis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Gavel className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">A. Căn cứ lý luận</h3>
              </div>
              <ul className="space-y-4">
                {theoreticalBasis.map((basis, index) => (
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

            {/* Practical Basis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">B. Căn cứ thực tiễn</h3>
              </div>
              <ul className="space-y-4">
                {practicalBasis.map((basis, index) => (
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

            {/* Value Basis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">C. Căn cứ giá trị</h3>
              </div>
              <ul className="space-y-4">
                {valueBasis.map((basis, index) => (
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
            Đặc điểm của tư tưởng Hồ Chí Minh
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
