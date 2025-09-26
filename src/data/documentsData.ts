import type { HistoricalDocument } from '../types';

export const historicalDocuments: HistoricalDocument[] = [
  {
    id: 'ho-chi-minh-complete-works',
    title: 'Hồ Chí Minh Toàn tập',
    date: '1890-1969',
    type: 'agreement',
    description: 'Tuyển tập đầy đủ các tác phẩm, bài viết, diễn văn của Chủ tịch Hồ Chí Minh về tư tưởng độc lập dân tộc và chủ nghĩa xã hội',
    importance: 'primary'
  },
  {
    id: 'independence-declaration-1945',
    title: 'Tuyên ngôn độc lập 2/9/1945',
    date: '2/9/1945',
    type: 'agreement',
    description: 'Văn kiện lịch sử quan trọng thể hiện tư tưởng độc lập dân tộc gắn với dân chủ nhân dân của Hồ Chí Minh',
    importance: 'primary'
  },
  {
    id: 'party-platform-1930',
    title: 'Cương lĩnh chính trị đầu tiên của Đảng Cộng sản Việt Nam',
    date: '1930',
    type: 'law',
    description: 'Văn kiện thể hiện sự kết hợp giữa cách mạng dân tộc dân chủ và cách mạng xã hội chủ nghĩa',
    url: 'https://vi.wikipedia.org/wiki/Đảng_Cộng_sản_Việt_Nam',
    importance: 'primary'
  },
  {
    id: 'ho-chi-minh-testament',
    title: 'Di chúc của Chủ tịch Hồ Chí Minh',
    date: '10/5/1969',
    type: 'report',
    description: 'Văn kiện cuối cùng tổng kết tư tưởng về độc lập dân tộc và chủ nghĩa xã hội của Hồ Chí Minh',
    importance: 'primary'
  },
  {
    id: 'memoirs-revolutionary-leaders',
    title: 'Hồi ký của các nhà cách mạng',
    date: '1920-1970',
    type: 'memoir',
    description: 'Hồi ký và ký ức của các nhà cách mạng về tư tưởng và hoạt động của Hồ Chí Minh',
    importance: 'secondary'
  },
  {
    id: 'ho-chi-minh-thought-institute',
    title: 'Nghiên cứu tư tưởng Hồ Chí Minh - Học viện Chính trị Quốc gia',
    date: 'Hiện đại',
    type: 'study',
    description: 'Nghiên cứu học thuật chính thức về tư tưởng Hồ Chí Minh từ Học viện Chính trị Quốc gia',
    importance: 'primary'
  },
  {
    id: 'marxism-leninism-vietnam',
    title: 'Chủ nghĩa Mác-Lênin và con đường cách mạng Việt Nam',
    date: '1920-1930',
    type: 'study',
    description: 'Nghiên cứu về quá trình tiếp nhận và vận dụng chủ nghĩa Mác-Lênin của Hồ Chí Minh',
    importance: 'secondary'
  },
  {
    id: 'ho-chi-minh-biography',
    title: 'Tiểu sử Hồ Chí Minh - Viện Sử học',
    date: 'Hiện đại',
    type: 'study',
    description: 'Tiểu sử chính thức về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh',
    importance: 'secondary'
  },
  {
    id: 'national-independence-thought-analysis',
    title: 'Phân tích tư tưởng độc lập dân tộc của Hồ Chí Minh',
    date: 'Hiện đại',
    type: 'study',
    description: 'Nghiên cứu chuyên sâu về tư tưởng độc lập dân tộc trong tác phẩm của Hồ Chí Minh',
    url: 'https://vi.wikipedia.org/wiki/Tư_tưởng_Hồ_Chí_Minh',
    importance: 'primary'
  },
  {
    id: 'socialist-thought-vietnam',
    title: 'Tư tưởng xã hội chủ nghĩa Việt Nam',
    date: '1930-1969',
    type: 'study',
    description: 'Nghiên cứu về sự phát triển tư tưởng xã hội chủ nghĩa trong tác phẩm của Hồ Chí Minh',
    url: 'https://vi.wikipedia.org/wiki/Chủ_nghĩa_xã_hội_Việt_Nam',
    importance: 'secondary'
  },
  {
    id: 'revolutionary-documents',
    title: 'Tài liệu về các cuộc cách mạng Việt Nam',
    date: '1930-1975',
    type: 'report',
    description: 'Tuyển tập tài liệu về các cuộc cách mạng do Hồ Chí Minh lãnh đạo',
    importance: 'primary'
  },
  {
    id: 'party-congress-documents',
    title: 'Văn kiện các kỳ Đại hội Đảng',
    date: '1930-1975',
    type: 'report',
    description: 'Các văn kiện Đại hội Đảng thể hiện sự phát triển tư tưởng Hồ Chí Minh',
    importance: 'primary'
  },
  {
    id: 'contemporary-research',
    title: 'Nghiên cứu đương đại về tư tưởng Hồ Chí Minh',
    date: 'Hiện đại',
    type: 'report',
    description: 'Các nghiên cứu hiện đại về ý nghĩa và giá trị của tư tưởng Hồ Chí Minh',
    importance: 'secondary'
  },
  {
    id: 'international-perspective',
    title: 'Góc nhìn quốc tế về tư tưởng Hồ Chí Minh',
    date: 'Hiện đại',
    type: 'report',
    description: 'Đánh giá của các học giả quốc tế về tư tưởng độc lập dân tộc và chủ nghĩa xã hội của Hồ Chí Minh',
    importance: 'supplementary'
  },
  {
    id: 'academic-dissertations',
    title: 'Các luận án về tư tưởng Hồ Chí Minh',
    date: 'Hiện đại',
    type: 'study',
    description: 'Các nghiên cứu học thuật cấp cao về tư tưởng và di sản của Hồ Chí Minh',
    importance: 'supplementary'
  }
];
