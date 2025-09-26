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
