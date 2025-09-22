import type { TimelineEvent } from '../types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'geneva-agreement',
    date: '21/7/1954',
    title: 'Ký kết Hiệp định Geneva',
    description: 'Hiệp định Geneva được ký kết, kết thúc cuộc kháng chiến chống Pháp',
    details: [
      'Chia tách Việt Nam tạm thời tại vĩ tuyến 17',
      'Quy định tổ chức tổng tuyển cử thống nhất trong 2 năm (1956)',
      'Cấm can thiệp ngoại bang',
      'Kết thúc cuộc kháng chiến chống Pháp',
      'Tạo cơ sở pháp lý cho thống nhất đất nước'
    ],
    category: 'international',
  },
  {
    id: 'ngo-dinh-diem-power',
    date: '1954',
    title: 'Ngô Đình Diệm lên nắm quyền',
    description: 'Ngô Đình Diệm trở thành thủ tướng miền Nam và bắt đầu nhận viện trợ từ Mỹ',
    details: [
      'Ngô Đình Diệm được Mỹ hỗ trợ lên nắm quyền',
      'Bắt đầu nhận viện trợ từ Mỹ',
      'Thiết lập chính quyền tại miền Nam',
      'Chuẩn bị cho việc từ chối thực hiện Hiệp định Geneva'
    ],
    category: 'political',
  },
  {
    id: 'reject-election',
    date: '1955',
    title: 'Từ chối tổng tuyển cử',
    description: 'Chính quyền Sài Gòn từ chối tổ chức tổng tuyển cử như cam kết',
    details: [
      'Ngô Đình Diệm từ chối tổ chức tổng tuyển cử',
      'Lý do đưa ra: "Miền Bắc không tự do"',
      'Anh, Pháp yêu cầu thực hiện Hiệp định',
      'Mỹ ủng hộ quyết định của Diệm',
      'Vi phạm nghiêm trọng Hiệp định Geneva'
    ],
    category: 'political',
  },
  {
    id: 'to-cong-campaign',
    date: '1955-1959',
    title: 'Chiến dịch "Tố Cộng"',
    description: 'Chiến dịch đàn áp tàn bạo nhằm vào cán bộ kháng chiến và người yêu nước',
    details: [
      'Bắt giữ: hơn 100,000 người',
      'Giết hại: khoảng 25,000 người',
      'Đối tượng: cán bộ kháng chiến, người yêu nước',
      'Lập "khu tập trung"',
      'Áp dụng "Luật 10/59" (tử hình không cần xét xử)'
    ],
    category: 'social',
  },
  {
    id: 'nlf-formation',
    date: '20/12/1960',
    title: 'Thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam',
    description: 'Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập',
    details: [
      'Đáp ứng nguyện vọng nhân dân miền Nam',
      'Tự vệ trước sự đàn áp tàn bạo',
      'Cương lĩnh: Lật đổ chế độ Mỹ-Diệm',
      'Xây dựng chính phủ dân tộc dân chủ',
      'Thống nhất đất nước bằng con đường hòa bình'
    ],
    category: 'political',
  },
  {
    id: 'us-escalation-1961',
    date: '1961',
    title: 'Mỹ gia tăng can thiệp',
    description: 'Mỹ bắt đầu gia tăng mức độ can thiệp với 3,200 cố vấn quân sự',
    details: [
      '3,200 cố vấn quân sự được triển khai',
      'Bắt đầu giai đoạn leo thang can thiệp',
      'Chuyển từ hỗ trợ kinh tế sang quân sự',
      'Chuẩn bị cho can thiệp trực tiếp'
    ],
    category: 'military',
  },
  {
    id: 'us-escalation-1963',
    date: '1963',
    title: 'Mỹ gia tăng quân nhân',
    description: 'Số lượng quân nhân Mỹ tăng lên 16,300 người',
    details: [
      '16,300 quân nhân Mỹ có mặt tại miền Nam',
      'Gia tăng đáng kể so với năm 1961',
      'Chuyển từ cố vấn sang can thiệp trực tiếp',
      'Chuẩn bị cho cuộc chiến tranh toàn diện'
    ],
    category: 'military',
  },
  {
    id: 'diem-coup',
    date: '2/11/1963',
    title: 'Đảo chính lật đổ Ngô Đình Diệm',
    description: 'Ngô Đình Diệm bị lật đổ và giết chết trong cuộc đảo chính',
    details: [
      'Cuộc đảo chính do quân đội miền Nam thực hiện',
      'Ngô Đình Diệm và Ngô Đình Nhu bị giết',
      'Mỹ đứng sau cuộc đảo chính',
      'Miền Nam rơi vào hỗn loạn chính trị',
      'Mở đường cho sự can thiệp mạnh mẽ hơn của Mỹ'
    ],
    category: 'political',
  },
  {
    id: 'us-escalation-1964',
    date: '1964',
    title: 'Tiếp tục gia tăng quân nhân Mỹ',
    description: 'Số lượng quân nhân Mỹ tăng lên 23,300 người',
    details: [
      '23,300 quân nhân Mỹ có mặt tại miền Nam',
      'Tăng gần gấp đôi so với năm 1963',
      'Chuẩn bị cho cuộc chiến tranh quy mô lớn',
      'Đánh dấu sự can thiệp trực tiếp của Mỹ'
    ],
    category: 'military',
  },
  {
    id: 'gulf-of-tonkin',
    date: '8/1964',
    title: 'Sự kiện Vịnh Bắc Bộ',
    description: 'Sự kiện Vịnh Bắc Bộ tạo cớ cho Mỹ can thiệp quân sự trực tiếp',
    details: [
      'Mỹ tạo ra cớ để can thiệp quân sự',
      'Quốc hội Mỹ thông qua Nghị quyết Vịnh Bắc Bộ',
      'Cho phép Tổng thống Mỹ sử dụng vũ lực',
      'Đánh dấu bước ngoặt quan trọng',
      'Mở đầu cho cuộc chiến tranh Việt Nam quy mô lớn'
    ],
    category: 'military',
  }
];
