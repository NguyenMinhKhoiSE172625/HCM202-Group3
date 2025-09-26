import type { TimelineEvent } from '../types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'early-patriotism',
    date: '1890-1911',
    title: 'Hình thành ý thức yêu nước',
    description: 'Thời thơ ấu và niên thiếu của Nguyễn Sinh Cung (Hồ Chí Minh)',
    details: [
      'Sinh ra trong gia đình có truyền thống yêu nước',
      'Chứng kiến cảnh đất nước bị thực dân Pháp đô hộ',
      'Tiếp xúc với phong trào yêu nước của cha Nguyễn Sinh Sắc',
      'Hình thành ý chí tìm đường cứu nước từ nhỏ',
      'Nền tảng đầu tiên của tư tưởng độc lập dân tộc'
    ],
    category: 'social',
  },
  {
    id: 'journey-abroad',
    date: '1911-1917',
    title: 'Ra đi tìm đường cứu nước',
    description: 'Hồ Chí Minh rời Việt Nam để tìm hiểu thế giới và con đường giải phóng dân tộc',
    details: [
      'Rời cảng Nhà Rồng trên tàu Amiral Latouche-Tréville',
      'Đi qua nhiều nước châu Phi, châu Âu, châu Mỹ',
      'Chứng kiến thực trạng các dân tộc bị áp bức',
      'Tích lũy kinh nghiệm đấu tranh của các dân tộc',
      'Khẳng định con đường độc lập dân tộc là tất yếu'
    ],
    category: 'international',
  },
  {
    id: 'paris-period',
    date: '1917-1923',
    title: 'Thời kỳ ở Paris và tiếp xúc với chủ nghĩa xã hội',
    description: 'Nguyễn Ái Quốc tiếp xúc với tư tưởng Mác-Lênin và hoạt động cách mạng',
    details: [
      'Tham gia Đảng Xã hội Pháp',
      'Đọc "Luận cương về vấn đề dân tộc và thuộc địa" của Lênin',
      'Nhận ra con đường giải phóng dân tộc qua cách mạng xã hội chủ nghĩa',
      'Viết "Bản án chế độ thực dân Pháp"',
      'Hình thành tư tưởng kết hợp độc lập dân tộc với chủ nghĩa xã hội'
    ],
    category: 'political',
  },
  {
    id: 'communist-party-foundation',
    date: '3/2/1930',
    title: 'Thành lập Đảng Cộng sản Việt Nam',
    description: 'Hồ Chí Minh thành lập Đảng, đánh dấu sự kết hợp hoàn chỉnh hai tư tưởng',
    details: [
      'Hội nghị thành lập Đảng tại Hồng Kông',
      'Thống nhất các tổ chức cộng sản trong nước',
      'Cương lĩnh chính trị đầu tiên của Đảng',
      'Kết hợp mục tiêu độc lập dân tộc và cách mạng xã hội chủ nghĩa',
      'Nền tảng lý luận cho cách mạng Việt Nam'
    ],
    category: 'political',
  },
  {
    id: 'viet-minh-formation',
    date: '19/5/1941',
    title: 'Thành lập Việt Minh',
    description: 'Hồ Chí Minh thành lập Mặt trận Việt Minh, thể hiện tư tưởng đoàn kết dân tộc',
    details: [
      'Hội nghị thành lập tại Pác Bó, Cao Bằng',
      'Đoàn kết toàn dân tộc chống thực dân, phát xít',
      'Kết hợp đấu tranh dân tộc với đấu tranh giai cấp',
      'Cương lĩnh: "Đánh đuổi Pháp - Nhật, giành độc lập"',
      'Thể hiện tư tưởng đại đoàn kết dân tộc'
    ],
    category: 'political',
  },
  {
    id: 'independence-declaration',
    date: '2/9/1945',
    title: 'Tuyên ngôn độc lập',
    description: 'Hồ Chí Minh đọc Tuyên ngôn độc lập, thành lập nước Việt Nam Dân chủ Cộng hòa',
    details: [
      'Tuyên bố độc lập tại Quảng trường Ba Đình',
      'Thành lập nước Việt Nam Dân chủ Cộng hòa',
      'Khẳng định quyền bình đẳng của các dân tộc',
      'Kết hợp độc lập dân tộc với dân chủ nhân dân',
      'Hiện thực hóa tư tưởng độc lập dân tộc'
    ],
    category: 'political',
  },
  {
    id: 'resistance-war',
    date: '1946-1954',
    title: 'Kháng chiến chống Pháp',
    description: 'Thực hiện tư tưởng độc lập dân tộc qua cuộc kháng chiến toàn dân',
    details: [
      'Lãnh đạo cuộc kháng chiến chống thực dân Pháp',
      'Kết hợp kháng chiến với kiến quốc',
      'Thực hiện cải cách ruộng đất',
      'Xây dựng chính quyền nhân dân',
      'Chiến thắng Điện Biên Phủ năm 1954'
    ],
    category: 'military',
  },
  {
    id: 'socialist-construction',
    date: '1954-1969',
    title: 'Xây dựng chủ nghĩa xã hội ở miền Bắc',
    description: 'Thực hiện tư tưởng chủ nghĩa xã hội trong điều kiện cụ thể của Việt Nam',
    details: [
      'Tiến hành cải cách ruộng đất',
      'Xây dựng nền kinh tế xã hội chủ nghĩa',
      'Phát triển giáo dục và văn hóa',
      'Xóa bỏ chế độ bóc lột',
      'Xây dựng con người mới xã hội chủ nghĩa'
    ],
    category: 'social',
  },
  {
    id: 'national-liberation',
    date: '1954-1975',
    title: 'Đấu tranh giải phóng miền Nam',
    description: 'Tiếp tục thực hiện tư tưởng độc lập dân tộc và thống nhất đất nước',
    details: [
      'Lãnh đạo cuộc đấu tranh giải phóng miền Nam',
      'Kết hợp đấu tranh chính trị với đấu tranh vũ trang',
      'Xây dựng mặt trận đoàn kết rộng rãi',
      'Thực hiện nghĩa vụ quốc tế',
      'Hoàn thành mục tiêu thống nhất đất nước'
    ],
    category: 'political',
  },
  {
    id: 'ho-chi-minh-testament',
    date: '10/5/1969',
    title: 'Di chúc của Chủ tịch Hồ Chí Minh',
    description: 'Tổng kết và khẳng định tư tưởng độc lập dân tộc và chủ nghĩa xã hội',
    details: [
      'Khẳng định con đường độc lập dân tộc gắn với chủ nghĩa xã hội',
      'Nhấn mạnh đại đoàn kết dân tộc',
      'Giáo dục truyền thống cách mạng cho thế hệ trẻ',
      'Xây dựng Đảng trong sạch, vững mạnh',
      'Di sản tư tưởng cho các thế hệ mai sau'
    ],
    category: 'political',
  }
];
