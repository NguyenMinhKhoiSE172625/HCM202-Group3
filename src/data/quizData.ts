export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'tu-tuong-doc-lap' | 'tu-tuong-xa-hoi' | 'ket-hop-hai-tu-tuong' | 'van-dung-thuc-tien' | 'y-nghia-lich-su';
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Tư tưởng độc lập dân tộc của Hồ Chí Minh được hình thành từ khát vọng nào?",
    options: [
      "Khát vọng làm giàu cho cá nhân",
      "Khát vọng giải phóng dân tộc khỏi ách thống trị",
      "Khát vọng trở thành lãnh đạo",
      "Khát vọng du lịch khắp thế giới"
    ],
    correctAnswer: 1,
    explanation: "Tư tưởng độc lập dân tộc của Hồ Chí Minh xuất phát từ khát vọng giải phóng dân tộc Việt Nam khỏi ách thống trị của thực dân, phong kiến.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Hồ Chí Minh tiếp xúc với tư tưởng Mác-Lênin lần đầu tiên ở đâu?",
    options: [
      "Liên Xô",
      "Trung Quốc",
      "Pháp",
      "Đức"
    ],
    correctAnswer: 2,
    explanation: "Hồ Chí Minh tiếp xúc với tư tưởng Mác-Lênin lần đầu tiên khi ở Paris, Pháp, thông qua việc đọc 'Luận cương về vấn đề dân tộc và thuộc địa' của Lênin.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'medium'
  },
  {
    id: 3,
    question: "Đảng Cộng sản Việt Nam được thành lập vào ngày nào?",
    options: [
      "19/5/1890",
      "3/2/1930",
      "2/9/1945",
      "19/5/1941"
    ],
    correctAnswer: 1,
    explanation: "Đảng Cộng sản Việt Nam được Hồ Chí Minh thành lập ngày 3/2/1930 tại Hồng Kông, đánh dấu sự kết hợp giữa chủ nghĩa yêu nước và chủ nghĩa xã hội.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "Việt Minh được thành lập vào năm nào?",
    options: [
      "1930",
      "1941",
      "1945",
      "1954"
    ],
    correctAnswer: 1,
    explanation: "Việt Minh được thành lập ngày 19/5/1941 tại Pác Bó, Cao Bằng, thể hiện tư tưởng đại đoàn kết dân tộc của Hồ Chí Minh.",
    category: 'ket-hop-hai-tu-tuong',
    difficulty: 'medium'
  },
  {
    id: 5,
    question: "Tuyên ngôn độc lập 2/9/1945 thể hiện điều gì?",
    options: [
      "Chỉ có tư tưởng độc lập dân tộc",
      "Chỉ có tư tưởng xã hội chủ nghĩa",
      "Sự kết hợp độc lập dân tộc với dân chủ nhân dân",
      "Không có tư tưởng gì rõ ràng"
    ],
    correctAnswer: 2,
    explanation: "Tuyên ngôn độc lập 2/9/1945 thể hiện sự kết hợp hài hòa giữa độc lập dân tộc và dân chủ nhân dân, nền tảng của nhà nước Việt Nam.",
    category: 'ket-hop-hai-tu-tuong',
    difficulty: 'medium'
  },
  {
    id: 6,
    question: "Cải cách ruộng đất 1953-1956 thể hiện tư tưởng nào của Hồ Chí Minh?",
    options: [
      "Chỉ có tư tưởng độc lập dân tộc",
      "Chỉ có tư tưởng xã hội chủ nghĩa",
      "Kết hợp độc lập dân tộc với xây dựng xã hội công bằng",
      "Không liên quan đến tư tưởng"
    ],
    correctAnswer: 2,
    explanation: "Cải cách ruộng đất thể hiện việc vận dụng tư tưởng xã hội chủ nghĩa để xây dựng xã hội công bằng, đồng thời củng cố độc lập dân tộc.",
    category: 'van-dung-thuc-tien',
    difficulty: 'easy'
  },
  {
    id: 7,
    question: "Đường lối 'kháng chiến kiến quốc' thể hiện điều gì?",
    options: [
      "Chỉ tập trung kháng chiến",
      "Chỉ tập trung xây dựng đất nước",
      "Kết hợp kháng chiến với xây dựng đất nước",
      "Không có mục tiêu rõ ràng"
    ],
    correctAnswer: 2,
    explanation: "Đường lối 'kháng chiến kiến quốc' thể hiện sự kết hợp hài hòa giữa bảo vệ độc lập dân tộc và xây dựng chế độ xã hội mới.",
    category: 'van-dung-thuc-tien',
    difficulty: 'medium'
  },
  {
    id: 8,
    question: "Di chúc của Chủ tịch Hồ Chí Minh khẳng định điều gì?",
    options: [
      "Chỉ cần độc lập dân tộc",
      "Chỉ cần chủ nghĩa xã hội",
      "Độc lập dân tộc và chủ nghĩa xã hội là hai mục tiêu chiến lược",
      "Không cần mục tiêu gì"
    ],
    correctAnswer: 2,
    explanation: "Di chúc Hồ Chí Minh khẳng định 'Độc lập dân tộc và chủ nghĩa xã hội là hai mục tiêu chiến lược của cách mạng Việt Nam'.",
    category: 'ket-hop-hai-tu-tuong',
    difficulty: 'medium'
  },
  {
    id: 9,
    question: "Tư tưởng Hồ Chí Minh có ý nghĩa gì đối với thời đại ngày nay?",
    options: [
      "Chỉ có ý nghĩa lịch sử",
      "Không còn phù hợp",
      "Tiếp tục là kim chỉ nam cho sự nghiệp đổi mới",
      "Chỉ áp dụng cho quá khứ"
    ],
    correctAnswer: 2,
    explanation: "Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội tiếp tục là kim chỉ nam cho sự nghiệp đổi mới và phát triển đất nước.",
    category: 'y-nghia-lich-su',
    difficulty: 'hard'
  },
  {
    id: 10,
    question: "Đặc điểm nổi bật nhất của tư tưởng Hồ Chí Minh là gì?",
    options: [
      "Chỉ có tính dân tộc",
      "Chỉ có tính quốc tế",
      "Kết hợp hài hòa tính dân tộc với tính thời đại",
      "Không có đặc điểm gì"
    ],
    correctAnswer: 2,
    explanation: "Đặc điểm nổi bật nhất là sự kết hợp hài hòa giữa tính dân tộc (độc lập dân tộc) với tính thời đại (chủ nghĩa xã hội).",
    category: 'y-nghia-lich-su',
    difficulty: 'hard'
  },
  {
    id: 11,
    question: "Theo Hồ Chí Minh, độc lập dân tộc có nghĩa là gì?",
    options: [
      "Chỉ tự do về chính trị",
      "Chỉ tự chủ về kinh tế",
      "Tự do, tự chủ toàn diện về chính trị, kinh tế, văn hóa",
      "Chỉ bảo vệ lãnh thổ"
    ],
    correctAnswer: 2,
    explanation: "Độc lập dân tộc theo Hồ Chí Minh là sự tự do, tự chủ toàn diện về chính trị, kinh tế, văn hóa, không phụ thuộc vào bất kỳ thế lực ngoại bang nào.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'medium'
  },
  {
    id: 12,
    question: "Hồ Chí Minh khẳng định 'Không có gì quý hơn độc lập tự do' trong tác phẩm nào?",
    options: [
      "Tuyên ngôn độc lập",
      "Di chúc",
      "Đường Kách Mệnh",
      "Nhật ký trong tù"
    ],
    correctAnswer: 1,
    explanation: "Câu nói nổi tiếng này được Hồ Chí Minh khẳng định trong Di chúc, thể hiện tầm quan trọng tối cao của độc lập dân tộc.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'easy'
  },
  {
    id: 13,
    question: "Chủ nghĩa xã hội trong tư tưởng Hồ Chí Minh có đặc điểm gì?",
    options: [
      "Hoàn toàn giống Liên Xô",
      "Hoàn toàn giống Trung Quốc",
      "Mang đậm tính dân tộc Việt Nam",
      "Không có đặc điểm riêng"
    ],
    correctAnswer: 2,
    explanation: "Chủ nghĩa xã hội trong tư tưởng Hồ Chí Minh mang đậm tính dân tộc, phù hợp với điều kiện cụ thể của Việt Nam.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'medium'
  },
  {
    id: 14,
    question: "Theo Hồ Chí Minh, mục tiêu của chủ nghĩa xã hội là gì?",
    options: [
      "Làm giàu cho một số người",
      "Dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh",
      "Chỉ phát triển công nghiệp",
      "Chỉ cải cách nông nghiệp"
    ],
    correctAnswer: 1,
    explanation: "Mục tiêu chủ nghĩa xã hội theo Hồ Chí Minh là 'Dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh'.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'easy'
  },
  {
    id: 15,
    question: "Tại sao Hồ Chí Minh kết hợp độc lập dân tộc với chủ nghĩa xã hội?",
    options: [
      "Để bắt chước nước khác",
      "Vì áp lực quốc tế",
      "Để giải quyết triệt để vấn đề dân tộc và xã hội",
      "Không có lý do cụ thể"
    ],
    correctAnswer: 2,
    explanation: "Hồ Chí Minh kết hợp hai tư tưởng để giải quyết triệt để cả vấn đề dân tộc (giải phóng khỏi thực dân) và vấn đề xã hội (xóa bỏ bóc lột).",
    category: 'ket-hop-hai-tu-tuong',
    difficulty: 'hard'
  },
  {
    id: 16,
    question: "Chiến lược 'Kháng chiến kiến quốc' thể hiện tư tưởng nào?",
    options: [
      "Chỉ tư tưởng quân sự",
      "Chỉ tư tưởng kinh tế",
      "Kết hợp bảo vệ độc lập với xây dựng chế độ mới",
      "Không có tư tưởng rõ ràng"
    ],
    correctAnswer: 2,
    explanation: "Chiến lược 'Kháng chiến kiến quốc' thể hiện sự kết hợp giữa bảo vệ độc lập dân tộc và xây dựng chế độ xã hội chủ nghĩa.",
    category: 'van-dung-thuc-tien',
    difficulty: 'medium'
  },
  {
    id: 17,
    question: "Chính sách đại đoàn kết dân tộc của Hồ Chí Minh dựa trên nguyên tắc nào?",
    options: [
      "Chia để trị",
      "Đoàn kết những người yêu nước",
      "Chỉ đoàn kết một tầng lớp",
      "Loại trừ các tầng lớp khác"
    ],
    correctAnswer: 1,
    explanation: "Chính sách đại đoàn kết dân tộc dựa trên nguyên tắc đoàn kết tất cả những người yêu nước, bất kể giai cấp, tôn giáo, chính kiến.",
    category: 'van-dung-thuc-tien',
    difficulty: 'easy'
  },
  {
    id: 18,
    question: "Tư tưởng Hồ Chí Minh có ảnh hưởng gì đến các nước đang phát triển?",
    options: [
      "Không có ảnh hưởng",
      "Chỉ ảnh hưởng đến Việt Nam",
      "Là tấm gương về con đường giải phóng dân tộc",
      "Chỉ có ý nghĩa lý thuyết"
    ],
    correctAnswer: 2,
    explanation: "Tư tưởng Hồ Chí Minh là tấm gương sáng về con đường kết hợp giải phóng dân tộc với tiến bộ xã hội cho các nước đang phát triển.",
    category: 'y-nghia-lich-su',
    difficulty: 'medium'
  },
  {
    id: 19,
    question: "Trong thời kỳ đổi mới, tư tưởng Hồ Chí Minh được vận dụng như thế nào?",
    options: [
      "Không còn phù hợp",
      "Áp dụng nguyên văn",
      "Vận dụng sáng tạo phù hợp với điều kiện mới",
      "Chỉ lưu giữ như di sản"
    ],
    correctAnswer: 2,
    explanation: "Tư tưởng Hồ Chí Minh được vận dụng sáng tạo, phù hợp với điều kiện mới của thời kỳ đổi mới và hội nhập quốc tế.",
    category: 'y-nghia-lich-su',
    difficulty: 'hard'
  },
  {
    id: 20,
    question: "Theo Hồ Chí Minh, 'Dân là gốc' có nghĩa là gì?",
    options: [
      "Dân chỉ là công cụ",
      "Dân là chủ thể của cách mạng và xây dựng đất nước",
      "Dân phải tuân theo mọi quyết định",
      "Dân không có vai trò quan trọng"
    ],
    correctAnswer: 1,
    explanation: "Tư tưởng 'Dân là gốc' khẳng định nhân dân là chủ thể của cách mạng và xây dựng đất nước, là nguồn gốc của mọi quyền lực.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'easy'
  },
  {
    id: 21,
    question: "Hồ Chí Minh sinh năm nào?",
    options: [
      "1889",
      "1890",
      "1891",
      "1892"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh sinh ngày 19/5/1890 tại làng Sen, Nam Đàn, Nghệ An.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'easy'
  },
  {
    id: 22,
    question: "Tên thật của Hồ Chí Minh là gì?",
    options: [
      "Nguyễn Sinh Cung",
      "Nguyễn Tất Thành",
      "Nguyễn Ái Quốc",
      "Hồ Chí Minh"
    ],
    correctAnswer: 0,
    explanation: "Tên thật của Hồ Chí Minh là Nguyễn Sinh Cung, sau đổi thành Nguyễn Tất Thành.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'easy'
  },
  {
    id: 23,
    question: "Hồ Chí Minh ra đi tìm đường cứu nước năm nào?",
    options: [
      "1910",
      "1911",
      "1912",
      "1913"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh ra đi tìm đường cứu nước năm 1911 trên tàu Amiral Latouche Tréville.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'medium'
  },
  {
    id: 24,
    question: "Hồ Chí Minh lần đầu tiên sử dụng bút danh 'Nguyễn Ái Quốc' khi nào?",
    options: [
      "1917",
      "1918",
      "1919",
      "1920"
    ],
    correctAnswer: 2,
    explanation: "Hồ Chí Minh lần đầu sử dụng bút danh 'Nguyễn Ái Quốc' năm 1919 khi gửi Bản yêu sách 8 điều tới Hội nghị Versailles.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'medium'
  },
  {
    id: 25,
    question: "Bản yêu sách 8 điều của Nguyễn Ái Quốc đòi hỏi điều gì?",
    options: [
      "Độc lập hoàn toàn cho Việt Nam",
      "Quyền tự do, dân chủ cho người Việt ở thuộc địa",
      "Đuổi Pháp ra khỏi Việt Nam",
      "Thành lập chính phủ Việt Nam"
    ],
    correctAnswer: 1,
    explanation: "Bản yêu sách 8 điều đòi hỏi quyền tự do, dân chủ cho người Việt Nam ở thuộc địa Đông Dương.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'hard'
  },
  {
    id: 26,
    question: "Hồ Chí Minh gia nhập Đảng Cộng sản Pháp năm nào?",
    options: [
      "1919",
      "1920",
      "1921",
      "1922"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh gia nhập Đảng Cộng sản Pháp năm 1920, đánh dấu bước ngoặt trong tư tưởng cách mạng.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'medium'
  },
  {
    id: 27,
    question: "Tác phẩm 'Bản án chế độ thực dân Pháp' được viết năm nào?",
    options: [
      "1924",
      "1925",
      "1926",
      "1927"
    ],
    correctAnswer: 1,
    explanation: "Tác phẩm 'Bản án chế độ thực dân Pháp' được Hồ Chí Minh viết năm 1925, tố cáo tội ác của thực dân Pháp.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'hard'
  },
  {
    id: 28,
    question: "Hội Việt Nam Cách mạng Thanh niên được thành lập ở đâu?",
    options: [
      "Paris",
      "Moscow",
      "Quảng Châu",
      "Hồng Kông"
    ],
    correctAnswer: 2,
    explanation: "Hội Việt Nam Cách mạng Thanh niên được Hồ Chí Minh thành lập tại Quảng Châu, Trung Quốc năm 1925.",
    category: 'ket-hop-hai-tu-tuong',
    difficulty: 'medium'
  },
  {
    id: 29,
    question: "Tạp chí 'Thanh niên' có ý nghĩa gì?",
    options: [
      "Chỉ tuyên truyền văn hóa",
      "Tuyên truyền tư tưởng cách mạng và yêu nước",
      "Chỉ giải trí cho thanh niên",
      "Không có ý nghĩa đặc biệt"
    ],
    correctAnswer: 1,
    explanation: "Tạp chí 'Thanh niên' do Hồ Chí Minh sáng lập để tuyên truyền tư tưởng cách mạng và lòng yêu nước cho thanh niên Việt Nam.",
    category: 'ket-hop-hai-tu-tuong',
    difficulty: 'easy'
  },
  {
    id: 30,
    question: "Hồ Chí Minh học tập ở Liên Xô trong thời gian nào?",
    options: [
      "1923-1924",
      "1924-1925",
      "1924-1927",
      "1925-1927"
    ],
    correctAnswer: 2,
    explanation: "Hồ Chí Minh học tập tại Liên Xô từ 1924-1927, nghiên cứu sâu về chủ nghĩa Mác-Lênin.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'hard'
  },
  {
    id: 31,
    question: "Tác phẩm 'Đường Kách Mệnh' được viết khi nào?",
    options: [
      "1925",
      "1926",
      "1927",
      "1928"
    ],
    correctAnswer: 2,
    explanation: "Tác phẩm 'Đường Kách Mệnh' được Hồ Chí Minh viết năm 1927, trình bày con đường cách mạng của Việt Nam.",
    category: 'ket-hop-hai-tu-tuong',
    difficulty: 'medium'
  },
  {
    id: 32,
    question: "Hồ Chí Minh về nước lần cuối năm nào?",
    options: [
      "1940",
      "1941",
      "1942",
      "1943"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh về nước lần cuối năm 1941, trực tiếp lãnh đạo cách mạng Việt Nam.",
    category: 'van-dung-thuc-tien',
    difficulty: 'easy'
  },
  {
    id: 33,
    question: "Căn cứ địa Pác Bó có ý nghĩa gì?",
    options: [
      "Chỉ là nơi ẩn náu",
      "Nơi kết hợp lý luận với thực tiễn cách mạng Việt Nam",
      "Chỉ là nơi nghỉ ngơi",
      "Không có ý nghĩa đặc biệt"
    ],
    correctAnswer: 1,
    explanation: "Pác Bó là nơi Hồ Chí Minh kết hợp lý luận Mác-Lênin với thực tiễn cách mạng Việt Nam, hình thành tư tưởng cách mạng hoàn chỉnh.",
    category: 'ket-hop-hai-tu-tuong',
    difficulty: 'hard'
  },
  {
    id: 34,
    question: "Tên gọi 'Hồ Chí Minh' có nghĩa là gì?",
    options: [
      "Người sáng suốt",
      "Người có chí hướng về ánh sáng",
      "Người anh hùng",
      "Người lãnh đạo"
    ],
    correctAnswer: 1,
    explanation: "Tên 'Hồ Chí Minh' có nghĩa là 'người có chí hướng về ánh sáng', thể hiện lý tưởng cao đẹp của Người.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'medium'
  },
  {
    id: 35,
    question: "Cách mạng tháng Tám 1945 thành công nhờ điều gì?",
    options: [
      "Chỉ nhờ may mắn",
      "Chỉ nhờ sức mạnh quân sự",
      "Nhờ sự kết hợp đúng đắn giữa độc lập dân tộc và dân chủ nhân dân",
      "Chỉ nhờ sự giúp đỡ của nước ngoài"
    ],
    correctAnswer: 2,
    explanation: "Cách mạng tháng Tám thành công nhờ sự kết hợp đúng đắn giữa mục tiêu độc lập dân tộc và dân chủ nhân dân trong tư tưởng Hồ Chí Minh.",
    category: 'van-dung-thuc-tien',
    difficulty: 'hard'
  },
  {
    id: 36,
    question: "Theo Hồ Chí Minh, đạo đức cách mạng có đặc điểm gì?",
    options: [
      "Chỉ cần trung thành với Đảng",
      "Kết hợp yêu nước, yêu dân với yêu chủ nghĩa xã hội",
      "Chỉ cần hy sinh cá nhân",
      "Không cần có nguyên tắc"
    ],
    correctAnswer: 1,
    explanation: "Đạo đức cách mạng theo Hồ Chí Minh là sự kết hợp giữa lòng yêu nước, yêu dân với lòng yêu chủ nghĩa xã hội.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'medium'
  },
  {
    id: 37,
    question: "Tư tưởng 'Học, học nữa, học mãi' thể hiện điều gì?",
    options: [
      "Chỉ học sách vở",
      "Học để phục vụ cách mạng và nhân dân",
      "Học để làm quan",
      "Học để khoe khoang"
    ],
    correctAnswer: 1,
    explanation: "Tư tưởng 'Học, học nữa, học mãi' của Hồ Chí Minh nhấn mạnh học tập để phục vụ cách mạng và nhân dân.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'easy'
  },
  {
    id: 38,
    question: "Phong cách Hồ Chí Minh có đặc điểm gì?",
    options: [
      "Xa hoa, phô trương",
      "Giản dị, gần gũi với nhân dân",
      "Nghiêm khắc, xa cách",
      "Không có phong cách riêng"
    ],
    correctAnswer: 1,
    explanation: "Phong cách Hồ Chí Minh đặc trưng bởi sự giản dị, gần gũi với nhân dân, thể hiện tư tưởng 'Dân là gốc'.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'easy'
  },
  {
    id: 39,
    question: "Hồ Chí Minh qua đời vào ngày nào?",
    options: [
      "2/9/1969",
      "3/9/1969",
      "1/9/1969",
      "4/9/1969"
    ],
    correctAnswer: 0,
    explanation: "Hồ Chí Minh qua đời vào ngày 2/9/1969, đúng ngày Quốc khánh Việt Nam.",
    category: 'y-nghia-lich-su',
    difficulty: 'easy'
  },
  {
    id: 40,
    question: "Di chúc Hồ Chí Minh được công bố khi nào?",
    options: [
      "Ngay sau khi Người mất",
      "Sau Đại hội Đảng IV",
      "Sau khi thống nhất đất nước",
      "Một năm sau khi Người mất"
    ],
    correctAnswer: 2,
    explanation: "Di chúc Hồ Chí Minh được công bố sau khi thống nhất đất nước năm 1975, theo di nguyện của Người.",
    category: 'y-nghia-lich-su',
    difficulty: 'medium'
  },
  {
    id: 41,
    question: "Tư tưởng Hồ Chí Minh về xây dựng Đảng có đặc điểm gì?",
    options: [
      "Đảng chỉ cần có kỷ luật",
      "Đảng phải là đội tiên phong của giai cấp công nhân và nhân dân lao động",
      "Đảng chỉ cần có nhiều đảng viên",
      "Đảng không cần có nguyên tắc"
    ],
    correctAnswer: 1,
    explanation: "Theo Hồ Chí Minh, Đảng phải là đội tiên phong của giai cấp công nhân và nhân dân lao động, phục vụ lợi ích của dân tộc và nhân dân.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'hard'
  },
  {
    id: 42,
    question: "Quan điểm của Hồ Chí Minh về văn hóa là gì?",
    options: [
      "Văn hóa dân tộc, khoa học, đại chúng",
      "Chỉ cần văn hóa dân tộc",
      "Chỉ cần văn hóa khoa học",
      "Văn hóa không quan trọng"
    ],
    correctAnswer: 0,
    explanation: "Hồ Chí Minh chủ trương xây dựng nền văn hóa Việt Nam mang tính dân tộc, khoa học và đại chúng.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'medium'
  },
  {
    id: 43,
    question: "Tư tưởng Hồ Chí Minh về giáo dục có đặc điểm gì?",
    options: [
      "Chỉ dạy kiến thức",
      "Kết hợp giáo dục đức, trí, thể, mỹ",
      "Chỉ dạy đạo đức",
      "Giáo dục không quan trọng"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh chủ trương giáo dục toàn diện, kết hợp đức, trí, thể, mỹ để phát triển con người mới.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'easy'
  },
  {
    id: 44,
    question: "Theo Hồ Chí Minh, mối quan hệ giữa cá nhân và tập thể như thế nào?",
    options: [
      "Cá nhân quan trọng hơn tập thể",
      "Tập thể quan trọng hơn cá nhân",
      "Cá nhân và tập thể hài hòa, thống nhất",
      "Không có mối quan hệ gì"
    ],
    correctAnswer: 2,
    explanation: "Hồ Chí Minh chủ trương sự hài hòa, thống nhất giữa lợi ích cá nhân và lợi ích tập thể, dân tộc.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'medium'
  },
  {
    id: 45,
    question: "Tư tưởng Hồ Chí Minh về đoàn kết quốc tế có đặc điểm gì?",
    options: [
      "Chỉ đoàn kết với các nước xã hội chủ nghĩa",
      "Đoàn kết với tất cả các lực lượng tiến bộ trên thế giới",
      "Không cần đoàn kết quốc tế",
      "Chỉ đoàn kết với các nước láng giềng"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh chủ trương đoàn kết với tất cả các lực lượng tiến bộ, yêu chuộng hòa bình và công lý trên thế giới.",
    category: 'y-nghia-lich-su',
    difficulty: 'hard'
  },
  {
    id: 46,
    question: "Tư tưởng Hồ Chí Minh về xây dựng nhà nước có đặc điểm gì?",
    options: [
      "Nhà nước của dân, do dân, vì dân",
      "Nhà nước chỉ của giai cấp thống trị",
      "Nhà nước không cần có nguyên tắc",
      "Nhà nước chỉ cần có quyền lực"
    ],
    correctAnswer: 0,
    explanation: "Hồ Chí Minh chủ trương xây dựng nhà nước của dân, do dân và vì dân, thể hiện bản chất dân chủ nhân dân.",
    category: 'tu-tuong-xa-hoi',
    difficulty: 'medium'
  },
  {
    id: 47,
    question: "Theo Hồ Chí Minh, yếu tố nào quyết định thắng lợi của cách mạng?",
    options: [
      "Vũ khí hiện đại",
      "Sức mạnh của nhân dân",
      "Sự giúp đỡ của nước ngoài",
      "May mắn"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh khẳng định sức mạnh của nhân dân là yếu tố quyết định thắng lợi của cách mạng.",
    category: 'van-dung-thuc-tien',
    difficulty: 'easy'
  },
  {
    id: 48,
    question: "Tư tưởng Hồ Chí Minh về hòa bình có đặc điểm gì?",
    options: [
      "Hòa bình bằng mọi giá",
      "Hòa bình trong độc lập và tự do",
      "Không cần hòa bình",
      "Hòa bình chỉ là khẩu hiệu"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh chủ trương hòa bình nhưng phải trong độc lập và tự do, không chấp nhận hòa bình nô lệ.",
    category: 'tu-tuong-doc-lap',
    difficulty: 'hard'
  },
  {
    id: 49,
    question: "Tư tưởng Hồ Chí Minh có ảnh hưởng gì đến Hiến pháp Việt Nam?",
    options: [
      "Không có ảnh hưởng",
      "Là nền tảng tư tưởng cho các Hiến pháp Việt Nam",
      "Chỉ ảnh hưởng một phần",
      "Chỉ có ý nghĩa tham khảo"
    ],
    correctAnswer: 1,
    explanation: "Tư tưởng Hồ Chí Minh là nền tảng tư tưởng cho các Hiến pháp Việt Nam, thể hiện trong các nguyên tắc cơ bản của nhà nước.",
    category: 'y-nghia-lich-su',
    difficulty: 'medium'
  },
  {
    id: 50,
    question: "Giá trị cốt lõi của tư tưởng Hồ Chí Minh là gì?",
    options: [
      "Chỉ có độc lập dân tộc",
      "Chỉ có chủ nghĩa xã hội",
      "Độc lập dân tộc gắn liền với chủ nghĩa xã hội vì hạnh phúc của nhân dân",
      "Không có giá trị cốt lõi"
    ],
    correctAnswer: 2,
    explanation: "Giá trị cốt lõi của tư tưởng Hồ Chí Minh là sự gắn bó chặt chẽ giữa độc lập dân tộc và chủ nghĩa xã hội vì mục tiêu cao cả: hạnh phúc của nhân dân.",
    category: 'y-nghia-lich-su',
    difficulty: 'hard'
  }
];

export const quizCategories = [
  { id: 'tu-tuong-doc-lap', name: 'Tư tưởng độc lập dân tộc', color: 'bg-blue-500' },
  { id: 'tu-tuong-xa-hoi', name: 'Tư tưởng xã hội chủ nghĩa', color: 'bg-red-500' },
  { id: 'ket-hop-hai-tu-tuong', name: 'Kết hợp hai tư tưởng', color: 'bg-green-500' },
  { id: 'van-dung-thuc-tien', name: 'Vận dụng thực tiễn', color: 'bg-purple-500' },
  { id: 'y-nghia-lich-su', name: 'Ý nghĩa lịch sử', color: 'bg-orange-500' }
];

export const difficultyLevels = [
  { id: 'easy', name: 'Dễ', color: 'bg-green-500' },
  { id: 'medium', name: 'Trung bình', color: 'bg-yellow-500' },
  { id: 'hard', name: 'Khó', color: 'bg-red-500' }
];
