export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'hiep-dinh-geneva' | 'chinh-quyen-sai-gon' | 'dau-tranh-giai-phong' | 'can-thiep-my' | 'y-nghia-lich-su';
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Sau chiến thắng Điện Biên Phủ 1954, thực dân Pháp buộc phải ký văn kiện nào?",
    options: [
      "Hiệp định Paris",
      "Hiệp định Geneva",
      "Hiệp định Fontainebleau",
      "Hiệp định Sơ bộ"
    ],
    correctAnswer: 1,
    explanation: "Hiệp định Geneva được ký ngày 21/7/1954, kết thúc cuộc chiến tranh Đông Dương lần thứ nhất và thiết lập nền tảng cho việc thống nhất Việt Nam.",
    category: 'hiep-dinh-geneva',
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Theo Hiệp định Geneva 1954, đất nước Việt Nam sẽ được thống nhất bằng hình thức nào?",
    options: [
      "Hiệp thương chính trị",
      "Trưng cầu dân ý",
      "Tổng tuyển cử trong cả nước",
      "Hòa đàm quốc tế"
    ],
    correctAnswer: 2,
    explanation: "Hiệp định Geneva quy định tổ chức tổng tuyển cử thống nhất trong 2 năm (1956) để thống nhất đất nước một cách hòa bình.",
    category: 'hiep-dinh-geneva',
    difficulty: 'medium'
  },
  {
    id: 3,
    question: "Ai là người đứng đầu chính quyền miền Nam Việt Nam giai đoạn 1955–1963, dưới sự hậu thuẫn của Mỹ?",
    options: [
      "Trần Văn Hương",
      "Ngô Đình Diệm",
      "Nguyễn Văn Thiệu",
      "Dương Văn Minh"
    ],
    correctAnswer: 1,
    explanation: "Ngô Đình Diệm được Mỹ hỗ trợ lên nắm quyền tại miền Nam từ 1954 và cai trị đến khi bị đảo chính năm 1963.",
    category: 'chinh-quyen-sai-gon',
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "Năm nào chính quyền Sài Gòn từ chối tổ chức tổng tuyển cử, vi phạm Hiệp định Geneva?",
    options: [
      "1955",
      "1956",
      "1957",
      "1958"
    ],
    correctAnswer: 1,
    explanation: "Năm 1956, chính quyền Ngô Đình Diệm đơn phương từ chối tổ chức tổng tuyển cử với lý do 'miền Bắc không tự do', vi phạm nghiêm trọng Hiệp định Geneva.",
    category: 'chinh-quyen-sai-gon',
    difficulty: 'medium'
  },
  {
    id: 5,
    question: "Luật 10/59 của chính quyền Ngô Đình Diệm quy định điều gì?",
    options: [
      "Cấm mọi tổ chức công đoàn",
      "Cộng sản bị coi là tội tử hình",
      "Tất cả thanh niên phải đi lính",
      "Quốc hữu hóa ruộng đất"
    ],
    correctAnswer: 1,
    explanation: "Luật 10/59 quy định tử hình không cần xét xử đối với những ai bị coi là 'cộng sản', là công cụ đàn áp tàn bạo trong chiến dịch 'Tố Cộng'.",
    category: 'chinh-quyen-sai-gon',
    difficulty: 'medium'
  },
  {
    id: 6,
    question: "Tổ chức nào ra đời năm 1960 nhằm đoàn kết lực lượng cách mạng miền Nam?",
    options: [
      "Liên Việt",
      "Việt Minh",
      "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam",
      "Hội Liên hiệp Phụ nữ Giải phóng"
    ],
    correctAnswer: 2,
    explanation: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập ngày 20/12/1960 để đoàn kết các lực lượng yêu nước chống lại chế độ Mỹ-Diệm.",
    category: 'dau-tranh-giai-phong',
    difficulty: 'easy'
  },
  {
    id: 7,
    question: "Sự kiện nào năm 1963 đã làm chính quyền Ngô Đình Diệm sụp đổ?",
    options: [
      "Biến cố Phật giáo Huế",
      "Đảo chính quân sự",
      "Biểu tình nông dân",
      "Sự kiện Vịnh Bắc Bộ"
    ],
    correctAnswer: 1,
    explanation: "Cuộc đảo chính quân sự ngày 2/11/1963 do quân đội miền Nam thực hiện với sự đứng sau của Mỹ đã lật đổ và giết chết Ngô Đình Diệm.",
    category: 'chinh-quyen-sai-gon',
    difficulty: 'medium'
  },
  {
    id: 8,
    question: "Năm 1964, sự kiện nào tạo cớ để Mỹ đưa quân trực tiếp vào Việt Nam?",
    options: [
      "Đảo chính lật đổ Ngô Đình Diệm",
      "Phong trào Đồng khởi",
      "Sự kiện Vịnh Bắc Bộ",
      "Thành lập Mặt trận Dân tộc Giải phóng"
    ],
    correctAnswer: 2,
    explanation: "Sự kiện Vịnh Bắc Bộ tháng 8/1964 được Mỹ tạo ra làm cớ để Quốc hội Mỹ thông qua nghị quyết cho phép can thiệp quân sự trực tiếp.",
    category: 'can-thiep-my',
    difficulty: 'medium'
  },
  {
    id: 9,
    question: "Vì sao cuộc chiến 1954–1964 ở Việt Nam không phải là 'nội chiến'?",
    options: [
      "Vì hai miền chưa có hiến pháp riêng",
      "Vì chính quyền miền Nam là sản phẩm do Mỹ dựng lên, nhân dân đấu tranh chống ngoại xâm",
      "Vì miền Bắc không tham gia chiến đấu",
      "Vì không có sự tham gia của nhân dân miền Nam"
    ],
    correctAnswer: 1,
    explanation: "Cuộc đấu tranh là giải phóng dân tộc vì chính quyền Sài Gòn là tay sai của Mỹ, nhân dân đấu tranh chống can thiệp ngoại bang để thống nhất đất nước.",
    category: 'y-nghia-lich-su',
    difficulty: 'hard'
  },
  {
    id: 10,
    question: "Bài học lớn nhất từ giai đoạn 1954–1964 là gì?",
    options: [
      "Đoàn kết dân tộc và kết hợp sức mạnh thời đại",
      "Tập trung xây dựng kinh tế",
      "Giữ quan hệ ngoại giao với Pháp",
      "Thỏa hiệp với Mỹ"
    ],
    correctAnswer: 0,
    explanation: "Bài học quan trọng nhất là phải đoàn kết toàn dân tộc và kết hợp sức mạnh thời đại để bảo vệ độc lập, chủ quyền quốc gia.",
    category: 'y-nghia-lich-su',
    difficulty: 'hard'
  }
];

export const quizCategories = [
  { id: 'hiep-dinh-geneva', name: 'Hiệp định Geneva', color: 'bg-blue-500' },
  { id: 'chinh-quyen-sai-gon', name: 'Chính quyền Sài Gòn', color: 'bg-red-500' },
  { id: 'dau-tranh-giai-phong', name: 'Đấu tranh giải phóng', color: 'bg-green-500' },
  { id: 'can-thiep-my', name: 'Can thiệp của Mỹ', color: 'bg-purple-500' },
  { id: 'y-nghia-lich-su', name: 'Ý nghĩa lịch sử', color: 'bg-orange-500' }
];

export const difficultyLevels = [
  { id: 'easy', name: 'Dễ', color: 'bg-green-500' },
  { id: 'medium', name: 'Trung bình', color: 'bg-yellow-500' },
  { id: 'hard', name: 'Khó', color: 'bg-red-500' }
];
