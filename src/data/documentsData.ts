import type { HistoricalDocument } from '../types';

export const historicalDocuments: HistoricalDocument[] = [
  {
    id: 'geneva-agreement-1954',
    title: 'Hiệp định Geneva về Đông Dương',
    date: '21/7/1954',
    type: 'agreement',
    description: 'Hiệp định quốc tế kết thúc cuộc chiến tranh Đông Dương lần thứ nhất và quy định về việc thống nhất Việt Nam',
    importance: 'primary'
  },
  {
    id: 'nlf-program-1960',
    title: 'Cương lĩnh Mặt trận Dân tộc Giải phóng miền Nam Việt Nam',
    date: '20/12/1960',
    type: 'agreement',
    description: 'Văn kiện chính trị quan trọng nêu rõ mục tiêu và phương hướng đấu tranh của nhân dân miền Nam',
    importance: 'primary'
  },
  {
    id: 'law-10-59',
    title: 'Luật 10/59',
    date: '1959',
    type: 'law',
    description: 'Luật tử hình không cần xét xử được chính quyền Sài Gòn ban hành để đàn áp người yêu nước',
    url: 'https://vi.wikipedia.org/wiki/Luật_10-59',
    importance: 'primary'
  },
  {
    id: 'cia-reports-1955-1964',
    title: 'Báo cáo của CIA về tình hình Việt Nam',
    date: '1955-1964',
    type: 'report',
    description: 'Các báo cáo tình báo của Mỹ về tình hình chính trị, xã hội ở Việt Nam trong giai đoạn 1955-1964',
    importance: 'primary'
  },
  {
    id: 'memoirs-leaders',
    title: 'Hồi ký của các nhà lãnh đạo thời kỳ',
    date: '1954-1964',
    type: 'memoir',
    description: 'Hồi ký và ký ức của các nhà lãnh đạo, chính trị gia thời kỳ 1954-1964',
    importance: 'secondary'
  },
  {
    id: 'vietnam-history-institute',
    title: 'Lịch sử Việt Nam - Viện Sử học Việt Nam',
    date: 'Hiện đại',
    type: 'study',
    description: 'Nghiên cứu học thuật chính thức về lịch sử Việt Nam từ Viện Sử học',
    importance: 'primary'
  },
  {
    id: 'stanley-karnow-vietnam-war',
    title: 'The Vietnam War - Stanley Karnow',
    date: '1983',
    type: 'study',
    description: 'Nghiên cứu toàn diện về cuộc chiến tranh Việt Nam từ góc nhìn phương Tây',
    importance: 'secondary'
  },
  {
    id: 'joseph-buttinger-vietnam',
    title: 'Vietnam: A History - Joseph Buttinger',
    date: '1967',
    type: 'study',
    description: 'Nghiên cứu lịch sử Việt Nam từ góc nhìn của học giả phương Tây',
    importance: 'secondary'
  },
  {
    id: 'to-cong-policy-analysis',
    title: 'Chính sách Tố Cộng Diệt Cộng của chính quyền miền Nam',
    date: '1955-1959',
    type: 'study',
    description: 'Phân tích về chính sách đàn áp của chính quyền Sài Gòn trong những năm 1955-1959',
    url: 'https://thinhvuongvietnam.com/Content/chinh-sach-to-cong-diet-cong-cua-chinh-quyen-mien-nam-nhung-nam-1955-1959-43410',
    importance: 'primary'
  },
  {
    id: 'vietnam-war-south-1960-1965',
    title: 'Chiến tranh Việt Nam (miền Nam, 1960–1965)',
    date: '1960-1965',
    type: 'study',
    description: 'Nghiên cứu về giai đoạn đầu của cuộc chiến tranh Việt Nam ở miền Nam',
    url: 'https://vi.wikipedia.org/wiki/Chiến_tranh_Việt_Nam_(miền_Nam,_1960–1965)',
    importance: 'secondary'
  },
  {
    id: 'statistical-data-to-cong',
    title: 'Số liệu về thiệt hại trong chiến dịch "Tố Cộng"',
    date: '1955-1959',
    type: 'report',
    description: 'Thống kê về số người bị bắt giữ, giết hại trong chiến dịch đàn áp của chính quyền Sài Gòn',
    importance: 'primary'
  },
  {
    id: 'us-intervention-statistics',
    title: 'Thống kê về sự can thiệp của Mỹ',
    date: '1961-1964',
    type: 'report',
    description: 'Số liệu về mức độ can thiệp quân sự và kinh tế của Mỹ vào miền Nam Việt Nam',
    importance: 'primary'
  },
  {
    id: 'socio-economic-reports',
    title: 'Báo cáo về tình hình kinh tế - xã hội thời kỳ',
    date: '1954-1964',
    type: 'report',
    description: 'Các báo cáo về tình hình kinh tế, xã hội ở cả hai miền Nam Bắc trong giai đoạn 1954-1964',
    importance: 'secondary'
  },
  {
    id: 'international-opinion-data',
    title: 'Dữ liệu về ý kiến dư luận quốc tế',
    date: '1954-1964',
    type: 'report',
    description: 'Thống kê và phân tích về thái độ của các nước và tổ chức quốc tế đối với tình hình Việt Nam',
    importance: 'supplementary'
  },
  {
    id: 'phd-dissertations',
    title: 'Các luận án tiến sĩ về chủ đề liên quan',
    date: 'Hiện đại',
    type: 'study',
    description: 'Các nghiên cứu học thuật cấp cao về giai đoạn 1954-1964 ở Việt Nam',
    importance: 'supplementary'
  }
];
