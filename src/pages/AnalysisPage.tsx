import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Scale,
  ChevronDown,
  ChevronUp,
  FileText,
  BarChart3,
  Shield,
  Users,
  Gavel,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'
import { analysisData } from '../data/analysisData'

const AnalysisPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedViewpoint, setSelectedViewpoint] = useState<'independence' | 'socialism' | 'comparison'>('comparison')

  const viewpoints = [
    { id: 'independence', label: 'Tư tưởng độc lập dân tộc', color: 'from-red-500 to-red-600', icon: XCircle },
    { id: 'socialism', label: 'Tư tưởng chủ nghĩa xã hội', color: 'from-green-500 to-green-600', icon: CheckCircle },
    { id: 'comparison', label: 'Phân tích toàn diện', color: 'from-blue-500 to-blue-600', icon: Scale }
  ]

  const getAnalysisIcon = (category: string) => {
    if (category.includes('độc lập')) return Gavel
    if (category.includes('xã hội')) return Users
    if (category.includes('kết hợp')) return Shield
    if (category.includes('thực tiễn')) return TrendingUp
    return BarChart3
  }

  const independenceData = analysisData.filter(item => item.id === 'national-independence-thought')
  const socialismData = analysisData.filter(item => item.id === 'socialist-thought')
  // Additional analysis data for future expansion
  // const otherAnalysis = analysisData.filter(item =>
  //   !['national-independence-thought', 'socialist-thought'].includes(item.id)
  // )

  const renderViewpointContent = () => {
    switch (selectedViewpoint) {
      case 'independence':
        return independenceData
      case 'socialism':
        return socialismData
      case 'comparison':
        return analysisData
      default:
        return analysisData
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            Phân tích tư tưởng
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Tư tưởng Hồ Chí Minh</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Phân tích sâu sắc về tư tưởng độc lập dân tộc và chủ nghĩa xã hội
            của Chủ tịch Hồ Chí Minh.
          </p>
        </motion.div>

        {/* Viewpoint Selector */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Chọn góc nhìn phân tích</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {viewpoints.map((viewpoint) => {
                const Icon = viewpoint.icon
                return (
                  <button
                    key={viewpoint.id}
                    onClick={() => setSelectedViewpoint(viewpoint.id as any)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                      selectedViewpoint === viewpoint.id
                        ? `bg-gradient-to-br ${viewpoint.color} text-white border-transparent shadow-lg`
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-6 h-6" />
                      <span className="font-medium">{viewpoint.label}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Comparison Overview (only for comparison view) */}
        {selectedViewpoint === 'comparison' && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Tổng quan hai tư tưởng cốt lõi
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Independence Thought */}
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <XCircle className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-red-800">Tư tưởng độc lập dân tộc</h3>
                  </div>
                  <ul className="space-y-2 text-red-700">
                    <li>• Khát vọng giải phóng dân tộc</li>
                    <li>• Xây dựng nhà nước độc lập</li>
                    <li>• Đại đoàn kết dân tộc</li>
                    <li>• Tự lực cánh sinh</li>
                  </ul>
                </div>

                {/* Socialist Thought */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-green-800">Tư tưởng chủ nghĩa xã hội</h3>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li>• Xóa bỏ chế độ bóc lột</li>
                    <li>• Dân chủ nhân dân</li>
                    <li>• Phát triển toàn diện</li>
                    <li>• Con người mới xã hội chủ nghĩa</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Analysis Sections */}
        <div className="space-y-8">
          <AnimatePresence>
            {renderViewpointContent().map((analysis, index) => {
              const Icon = getAnalysisIcon(analysis.category)
              const isExpanded = expandedSection === analysis.id

              return (
                <motion.div
                  key={analysis.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  {/* Section Header */}
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setExpandedSection(isExpanded ? null : analysis.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {analysis.category}
                          </h3>
                          <p className="text-gray-600">{analysis.title}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="text-sm text-gray-500">
                          {analysis.content.length} điểm phân tích
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100"
                      >
                        <div className="p-6 space-y-6">
                          {/* Content Points */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                              <FileText className="w-4 h-4 mr-2" />
                              Luận điểm chính
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {analysis.content.map((point, pointIndex) => (
                                <motion.div
                                  key={pointIndex}
                                  className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: pointIndex * 0.1 }}
                                >
                                  <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-white text-xs font-bold">
                                        {pointIndex + 1}
                                      </span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                      {point}
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Evidence */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-2" />
                              Dẫn chứng lịch sử
                            </h4>
                            <div className="space-y-3">
                              {analysis.evidence.map((evidence, evidenceIndex) => (
                                <motion.div
                                  key={evidenceIndex}
                                  className="bg-green-50 rounded-lg p-4 border border-green-200"
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: evidenceIndex * 0.1 }}
                                >
                                  <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                      {evidence}
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Counter Arguments (if available) */}
                          {analysis.counterArguments && analysis.counterArguments.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <XCircle className="w-4 h-4 mr-2" />
                                Phản biện
                              </h4>
                              <div className="space-y-3">
                                {analysis.counterArguments.map((counter, counterIndex) => (
                                  <motion.div
                                    key={counterIndex}
                                    className="bg-orange-50 rounded-lg p-4 border border-orange-200"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: counterIndex * 0.1 }}
                                  >
                                    <div className="flex items-start space-x-3">
                                      <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                      <p className="text-gray-700 text-sm leading-relaxed">
                                        {counter}
                                      </p>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Interactive Data Visualization */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-4 right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full float-animation"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-white bg-opacity-10 rounded-full float-animation-delayed"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Dữ liệu thống kê quan trọng
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              >
                <div className="relative">
                  <div className="text-4xl font-bold mb-2 pulse-glow">100,000+</div>
                  <div className="w-full bg-red-200 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-red-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 }}
                    ></motion.div>
                  </div>
                  <div className="text-blue-100">Người bị bắt giữ trong chiến dịch "Tố Cộng"</div>
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              >
                <div className="relative">
                  <div className="text-4xl font-bold mb-2 pulse-glow">25,000</div>
                  <div className="w-full bg-orange-200 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-orange-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.7 }}
                    ></motion.div>
                  </div>
                  <div className="text-blue-100">Người bị giết hại (1955-1959)</div>
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              >
                <div className="relative">
                  <div className="text-4xl font-bold mb-2 pulse-glow">80%</div>
                  <div className="w-full bg-green-200 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-green-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.9 }}
                    ></motion.div>
                  </div>
                  <div className="text-blue-100">Nhân dân miền Nam ủng hộ thống nhất (CIA 1955)</div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8 border-t border-blue-400">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-3xl font-bold mb-2">3,200 → 23,300</div>
                <div className="text-blue-100">Quân nhân Mỹ (1961-1964)</div>
                <div className="mt-2">
                  <TrendingUp className="w-8 h-8 mx-auto text-yellow-400 animate-pulse" />
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <div className="text-3xl font-bold mb-2">2 năm</div>
                <div className="text-blue-100">Thời hạn thống nhất theo Geneva</div>
                <div className="mt-2">
                  <AlertCircle className="w-8 h-8 mx-auto text-red-400 animate-pulse" />
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="text-3xl font-bold mb-2">10 năm</div>
                <div className="text-blue-100">Giai đoạn nghiên cứu (1954-1964)</div>
                <div className="mt-2">
                  <CheckCircle className="w-8 h-8 mx-auto text-green-400 animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AnalysisPage
