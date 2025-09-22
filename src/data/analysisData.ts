import type { AnalysisPoint } from '../types';

export const analysisData: AnalysisPoint[] = [
  {
    id: 'civil-war-viewpoint',
    category: 'Quan điểm "Nội chiến"',
    title: 'Luận điểm và dẫn chứng',
    content: [
      'Cùng dân tộc: Xung đột giữa người Việt với người Việt',
      'Phân chia lãnh thổ: Hai chính quyền trên cùng một đất nước',
      'Tranh chấp quyền lực: Đấu tranh giành quyền cai trị',
      'Xung đột tư tưởng: Đối kháng giữa các hệ tư tưởng'
    ],
    evidence: [
      'Hiện tượng "đồng minh đánh nhau"',
      'Sự phân chia gia đình, làng xã',
      'Hai chính quyền có chủ quyền riêng biệt',
      'Không có sự xâm lược từ bên ngoài'
    ]
  },
  {
    id: 'liberation-viewpoint',
    category: 'Quan điểm "Giải phóng dân tộc"',
    title: 'Luận điểm và dẫn chứng lịch sử',
    content: [
      'Vi phạm Hiệp định: Chính quyền Sài Gòn từ chối thống nhất',
      'Can thiệp ngoại bang: Mỹ kiểm soát chính quyền miền Nam',
      'Đàn áp nhân dân: Tàn sát người dân vô tội',
      'Tính chính nghĩa: Đấu tranh vì độc lập và dân chủ'
    ],
    evidence: [
      'Tài liệu Hiệp định Geneva 1954',
      'Số liệu về chiến dịch "Tố Cộng": Bắt giữ hơn 100,000 người, giết hại khoảng 25,000 người',
      'Mức độ can thiệp của Mỹ: Từ 3,200 cố vấn (1961) đến 23,300 quân nhân (1964)',
      'Sự ủng hộ của nhân dân và quốc tế: 80% nhân dân miền Nam ủng hộ thống nhất (báo cáo CIA 1955)'
    ]
  },
  {
    id: 'legal-analysis',
    category: 'Phân tích pháp lý quốc tế',
    title: 'Căn cứ pháp lý',
    content: [
      'Vi phạm Hiệp định Geneva: Chính quyền Sài Gòn đơn phương từ chối thực hiện cam kết quốc tế',
      'Tính bất hợp pháp: Sự phân chia không có cơ sở pháp lý sau 1956',
      'Quyền chính đáng: Nhân dân có quyền đấu tranh cho thống nhất'
    ],
    evidence: [
      'Hiệp định Geneva 1954 cam kết thống nhất đất nước trong 2 năm',
      'Quyền tự quyết được công nhận trong Hiến chương LHQ',
      'Việt Nam về mặt pháp lý vẫn là một quốc gia',
      'Nguyên tắc không can thiệp bị vi phạm'
    ]
  },
  {
    id: 'political-analysis',
    category: 'Phân tích chính trị xã hội',
    title: 'Tính chất chính quyền và ý chí nhân dân',
    content: [
      'Can thiệp ngoại bang: Mỹ thực tế kiểm soát chính quyền miền Nam',
      'Tính tay sai: Chính quyền Sài Gòn phụ thuộc hoàn toàn vào Mỹ',
      'Ý chí nhân dân: Đa số nhân dân mong muốn thống nhất'
    ],
    evidence: [
      'Khảo sát 1955: 80% ủng hộ thống nhất (theo báo cáo CIA)',
      'Phong trào đấu tranh tự phát trong mọi tầng lớp',
      'Sự ủng hộ cho Mặt trận Dân tộc Giải phóng',
      'Nguồn gốc quyền lực: Do Mỹ thiết lập',
      'Sự phụ thuộc: Hoàn toàn vào viện trợ Mỹ'
    ]
  },
  {
    id: 'social-analysis',
    category: 'Phân tích xã hội',
    title: 'Đàn áp và bóc lột',
    content: [
      'Đàn áp tàn bạo: Chiến dịch "Tố Cộng" giết hại người vô tội',
      'Bóc lột kinh tế: Chính sách phục vụ lợi ích ngoại bang',
      'Phá hoại văn hóa: Áp đặt lối sống phương Tây'
    ],
    evidence: [
      'Chiến dịch "Tố Cộng" (1955-1959): Bắt giữ hơn 100,000 người, giết hại khoảng 25,000 người',
      'Lập "khu tập trung"',
      'Áp dụng "Luật 10/59" (tử hình không cần xét xử)',
      'Đối tượng: cán bộ kháng chiến, người yêu nước'
    ]
  },
  {
    id: 'military-analysis',
    category: 'Phân tích quân sự',
    title: 'Tính chất can thiệp và kháng chiến',
    content: [
      'Sự can thiệp của Mỹ: Từ cố vấn đến triển khai quân đội',
      'Vai trò: Chỉ huy thực tế các hoạt động quân sự',
      'Mục đích: Duy trì ảnh hưởng tại Đông Nam Á'
    ],
    evidence: [
      'Quy mô can thiệp: 1961: 3,200 cố vấn → 1963: 16,300 quân nhân → 1964: 23,300 quân nhân',
      'Mục tiêu kháng chiến: Thống nhất đất nước, không phải chinh phục',
      'Phương thức: Tự vệ và phản kích',
      'Ủng hộ: Từ nhân dân và cộng đồng quốc tế'
    ]
  }
];
