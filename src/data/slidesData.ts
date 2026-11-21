export interface WireframePair {
  id: string;
  label: string;
  device: 'Phone' | 'Web';
  lowfiSrc: string;
  midfiSrc: string;
}

export const HERO_META = {
  course: 'Systems Engineering',
  team: 'Nhóm 2',
  loop: ['1. Mua về ghi nhận', '2. Theo dõi hạn dùng', '3. Dùng / Bỏ cập nhật', '4. Đối chiếu kho', '5. Mua tiếp'],
};

export const TOC_SECTIONS = [
  {
    part: 'Phần I',
    duration: '~2 phút',
    title: 'Mở đầu, Phạm vi & Hiện trạng',
    desc: 'Định nghĩa hệ thống 4 thành phần, ranh giới in/out-of-scope và 3 vấn đề thực tế.',
    slides: [
      { idx: 0, code: 'Intro', title: 'Màn mở đầu & Ý tưởng cốt lõi (10s)' },
      { idx: 2, code: '01', title: 'Hệ thống này là gì và làm tới đâu?' },
      { idx: 3, code: '02', title: 'Vì sao làm hệ thống này?' },
    ],
  },
  {
    part: 'Phần II',
    duration: '~2 phút 30 giây',
    title: 'Mục tiêu, Truy vết & Bức tranh tính năng',
    desc: 'Chuyển hóa bài toán thành 5 mục tiêu, chuỗi truy vết SE và 6 cụm tính năng.',
    slides: [
      { idx: 4, code: '03', title: 'Chốt 5 mục tiêu cần đạt' },
      { idx: 5, code: '04', title: 'Truy vết từ nhu cầu đến kiểm tra' },
      { idx: 6, code: '05', title: 'Toàn bộ app gồm 6 nhóm tính năng gì?' },
      { idx: 7, code: '06', title: 'Sơ đồ Use Case (31 UC)' },
    ],
  },
  {
    part: 'Phần III',
    duration: '~5 phút',
    title: 'Trọng tâm tính năng, Wireframe & Ràng buộc',
    desc: 'Điểm ăn tiền của 6 tính năng, đối chiếu Figma Low-fi/Mid-fi và chạy thử vòng đời khép kín.',
    slides: [
      { idx: 8, code: '07', title: 'Ghi đúng món, tìm lại đúng chỗ' },
      { idx: 9, code: '08', title: 'Biết món cần chú ý & giữ lượng chuẩn' },
      { idx: 10, code: '09', title: 'Mua sắm có đối chiếu kho' },
      { idx: 11, code: '10', title: 'Ràng buộc chất lượng (NFR)' },
      { idx: 12, code: '11', title: 'Chạy thử trọn vẹn 1 vòng nghiệp vụ' },
    ],
  },
  {
    part: 'Phần IV',
    duration: '~35 giây',
    title: 'Kết luận & Kế hoạch tiếp theo',
    desc: '6 giá trị đạt được, 53 màn hình Figma và định hướng phát triển bản web hoàn chỉnh.',
    slides: [
      { idx: 13, code: '12', title: 'Chốt kết luận & Kế hoạch' },
    ],
  },
];

export const SLIDE_TITLES = [
  { id: 'intro', short: 'Mở đầu', section: 'Mở đầu báo cáo' },
  { id: 'toc', short: '00 · Mục lục', section: 'Mục lục báo cáo' },
  { id: 'system', short: '01 · Hệ thống', section: '1. Định nghĩa hệ thống' },
  { id: 'needs', short: '02 · Nhu cầu', section: '2. Hiện trạng & Nhu cầu' },
  { id: 'goals', short: '03 · G1–G5', section: '3. Mục tiêu & Yêu cầu' },
  { id: 'trace', short: '04 · Truy vết', section: '3. Truy vết & Phạm vi' },
  { id: 'features', short: '05 · Tính năng', section: '4. Thiết kế tính năng' },
  { id: 'usecases', short: '06 · Use Case', section: '4. Sơ đồ Use Case (31 UC)' },
  { id: 'f01-f03', short: '07 · F01–F03', section: '4. F01–F03 & Wireframe' },
  { id: 'f04-f05', short: '08 · F04–F05', section: '4. F04–F05 & Wireframe' },
  { id: 'f06', short: '09 · F06', section: '4. F06 & Wireframe' },
  { id: 'nfr', short: '10 · NFR', section: '4. Yêu cầu phi chức năng' },
  { id: 'workflow', short: '11 · Nghiệp vụ', section: '5. Vòng nghiệp vụ' },
  { id: 'conclusion', short: '12 · Kết luận', section: '7. Kết luận' },
] as const;

export const USE_CASE_DIAGRAMS = [
  {
    id: 'uc-account',
    label: 'Tài khoản (2 UC)',
    title: 'Hệ thống Expiry — Tài khoản (UC-01, UC-02)',
    src: './figma/uc-account.png',
  },
  {
    id: 'uc-f01',
    label: 'F01 · Thêm (3 UC)',
    title: 'Hệ thống Expiry — F01 — Thêm thực phẩm (UC-03–05)',
    src: './figma/uc-f01.png',
  },
  {
    id: 'uc-f02',
    label: 'F02 · Quản lý (8 UC)',
    title: 'Hệ thống Expiry — F02 — Quản lý thực phẩm (UC-06–13)',
    src: './figma/uc-f02.png',
  },
  {
    id: 'uc-f03',
    label: 'F03 · Danh mục & Nơi cất (4 UC)',
    title: 'Hệ thống Expiry — F03 — Danh mục và nơi bảo quản (UC-14–17)',
    src: './figma/uc-f03.png',
  },
  {
    id: 'uc-f04',
    label: 'F04 · Hạn & Nhắc (6 UC)',
    title: 'Hệ thống Expiry — F04 — Hạn dùng và nhắc nhở (UC-18–23)',
    src: './figma/uc-f04.png',
  },
  {
    id: 'uc-f05',
    label: 'F05 · Lượng & Insights (6 UC)',
    title: 'Hệ thống Expiry — F05 — Số lượng và Insights (UC-24–29)',
    src: './figma/uc-f05.png',
  },
  {
    id: 'uc-f06',
    label: 'F06 · Mua sắm (2 UC)',
    title: 'Hệ thống Expiry — F06 — Mua sắm và đối chiếu kho (UC-30–31)',
    src: './figma/uc-f06.png',
  },
];

export const BUSINESS_GOALS_ROWS = [
  {
    need: 'Biết mình đang có gì.',
    goalCode: 'G1',
    goalText: 'Nhận biết thực phẩm đang có.',
    breqCode: 'BREQ-01',
    breqText: 'Giúp người dùng nắm rõ danh sách thực phẩm hiện có.',
  },
  {
    need: 'Biết món nào cần chú ý.',
    goalCode: 'G2',
    goalText: 'Chọn món cần chú ý.',
    breqCode: 'BREQ-02',
    breqText: 'Nhận biết món sắp hết hạn, quá hạn hoặc chưa rõ HSD.',
  },
  {
    need: 'Có số lượng sát kiểm kê.',
    goalCode: 'G3',
    goalText: 'Duy trì số lượng đáng tin.',
    breqCode: 'BREQ-03',
    breqText: 'Cập nhật lượng qua Đã dùng, Đã bỏ và Điều chỉnh.',
  },
  {
    need: 'Tin được thông tin đã lưu.',
    goalCode: 'G4',
    goalText: 'Dữ liệu kiểm tra được, đáng tin.',
    breqCode: 'BREQ-04',
    breqText: 'Lưu đúng thông tin đã xác nhận, đánh dấu phần còn thiếu.',
  },
  {
    need: 'Hiểu tình hình chung.',
    goalCode: 'G5',
    goalText: 'Hiểu tổng quan thực phẩm.',
    breqCode: 'BREQ-05',
    breqText: 'Tổng hợp món đang có, món cần chú ý và lượng đã dùng/đã bỏ.',
  },
];

export const TRACEABILITY_DATA = {
  exampleNeed: '“Tôi muốn biết món nào cần chú ý và vì sao.”',
  chain: [
    {
      code: 'G2 / BREQ-02',
      label: 'Chọn món cần chú ý',
      role: 'Mục tiêu & Yêu cầu kinh doanh',
    },
    {
      code: 'UR-07',
      label: 'Xem món cần chú ý',
      role: 'Nhu cầu người dùng',
    },
    {
      code: 'FR-32',
      label: 'Phân nhóm theo HSD và ngưỡng cảnh báo',
      role: 'Yêu cầu chức năng',
    },
    {
      code: 'F04 / UC-18',
      label: 'Giao diện Cần chú ý & demo',
      role: 'Tính năng & Use Case',
    },
  ],
  g6Title: 'G6 / BREQ-06 — Ràng buộc phạm vi',
  g6Text:
    'Expiry phục vụ quản lý thực phẩm cá nhân; chưa hỗ trợ nhà hàng, nhân viên, nhập xuất theo lô hoặc đa kho.',
  summaryNote: 'G1–G5 là năm mục tiêu chính. G6 giới hạn phạm vi hệ thống.',
};

export const SYSTEM_SLIDE = {
  title:
    'EXPIRY — Xây dựng hệ thống quản lý và cảnh báo vòng đời thực phẩm cá nhân dựa trên dữ liệu hạn sử dụng và phản hồi của người dùng',
  lead: 'Ứng dụng web cá nhân giúp biết mình có gì, món nào cần chú ý, cập nhật số lượng và đối chiếu kho trước khi mua thêm.',
  components: [
    { name: 'Ứng dụng web', tech: 'React 19 · Vite 8 · Tailwind CSS v4' },
    { name: 'API nghiệp vụ', tech: 'Node.js · Express (/api/v1)' },
    { name: 'Dịch vụ đọc ảnh (OCR)', tech: 'Python · FastAPI · Tesseract' },
    { name: 'Cơ sở dữ liệu', tech: 'MySQL 8.4' },
  ],
  outsideBoundary: [
    {
      role: 'Người dùng cá nhân',
      type: 'Tác nhân (Actor)',
      desc: 'Chủ thể tương tác: gửi dữ liệu, kiểm tra bản nháp và nhận cảnh báo.',
    },
    {
      role: 'Camera & thư viện ảnh',
      type: 'Tài nguyên thiết bị',
      desc: 'Môi trường ngoại vi: cung cấp ảnh nhãn thực phẩm (ứng dụng chỉ xin quyền đọc).',
    },
    {
      role: 'Thông báo trình duyệt',
      type: 'Dịch vụ nền tảng',
      desc: 'Kênh phát lời nhắc: phụ thuộc quyền cấp và khả năng hỗ trợ của thiết bị.',
    },
  ],
  inScope: [
    'Tài khoản cá nhân (đăng ký, đăng nhập)',
    '6 nhóm tính năng F01–F06 (31 Use Cases)',
    'Đọc ảnh / camera chỉ gợi ý, người dùng kiểm tra trước khi lưu',
  ],
  outScope: [
    'Quản lý nhà hàng, nhân viên, nhập xuất theo lô, đa kho',
    'Workspace gia đình, công thức nấu ăn, thực đơn',
    'Thanh toán, ước tính tiền tiết kiệm, kết luận an toàn thực phẩm',
  ],
};

export const NEEDS_ROWS = [
  {
    assumption: 'Thực phẩm cất ở nhiều nơi; thông tin dễ bị quên.',
    problem: 'Khó nhớ đang có gì; dễ mua trùng món đã có.',
    need: 'Xem và tìm lại món, nơi cất và số lượng đã ghi.',
    feature: 'F01 · F02 · F03',
  },
  {
    assumption: 'Kế hoạch ăn uống hoặc mua sắm thay đổi.',
    problem: 'Khó chọn món cần chú ý và thời điểm kiểm tra lại.',
    need: 'Hiểu lý do cần chú ý; hẹn kiểm tra hoặc hoãn nhắc.',
    feature: 'F04',
  },
  {
    assumption: 'Người dùng bỏ sót thao tác hoặc nhập nhầm lượng.',
    problem: 'Số lượng trong ứng dụng lệch so với thực tế.',
    need: 'Ghi Đã dùng / Đã bỏ / Điều chỉnh và xem lịch sử đối soát.',
    feature: 'F05 · F06',
  },
];

export const FEATURE_CARDS = [
  {
    code: 'F01',
    name: 'Thêm thực phẩm',
    goal: 'Ghi món mới bằng ảnh nhãn, camera hoặc nhập tay; kiểm tra trước khi lưu.',
    ucs: 'UC-03 → UC-05',
  },
  {
    code: 'F02',
    name: 'Quản lý thực phẩm',
    goal: 'Xem, tìm, lọc, sửa món; chuyển Thùng rác và khôi phục trong 30 ngày.',
    ucs: 'UC-06 → UC-13',
  },
  {
    code: 'F03',
    name: 'Danh mục & Nơi bảo quản',
    goal: 'Phân loại món và biết rõ món đang cất ở đâu (tủ mát, tủ đông, kệ bếp).',
    ucs: 'UC-14 → UC-17',
  },
  {
    code: 'F04',
    name: 'Hạn dùng & Nhắc nhở',
    goal: 'Nhận biết món cần chú ý; hẹn kiểm tra lại hoặc hoãn lời nhắc.',
    ucs: 'UC-18 → UC-23',
  },
  {
    code: 'F05',
    name: 'Số lượng & Insights',
    goal: 'Ghi Đã dùng, Đã bỏ, Điều chỉnh; xem lịch sử biến động và tổng hợp Insights.',
    ucs: 'UC-24 → UC-29',
  },
  {
    code: 'F06',
    name: 'Mua sắm & Đối chiếu kho',
    goal: 'Lập danh sách mua và đối chiếu kho hiện hành trước khi mua thêm.',
    ucs: 'UC-30 · UC-31',
  },
];

export const F01_F03_DATA = {
  badge: 'PHẦN III · F01–F03 & FIGMA WIREFRAME',
  title: 'Ghi đúng món, tìm lại đúng chỗ',
  points: [
    {
      label: 'F01 · Ba đường thêm (UC-03–05)',
      text: 'Chọn ảnh, bật camera hoặc nhập tay → tạo bản nháp → kiểm tra và lưu một lần tại UC-05.',
    },
    {
      label: 'Tách ngày & tách gói (BR-02/03/04)',
      text: 'NSX, Ngày mở và HSD độc lập, không tự đoán HSD; khác ngày hoặc trạng thái tạo bản ghi riêng.',
    },
    {
      label: 'F03 · Danh mục & Nơi cất (UC-14–17)',
      text: 'Danh mục cho biết loại món, Nơi bảo quản cho biết vị trí cất; xóa nơi vẫn giữ nguyên thực phẩm.',
    },
    {
      label: 'F02 · Tìm, sửa & Thùng rác (UC-06–13)',
      text: 'Xem, tìm, lọc không làm đổi dữ liệu; Thùng rác giữ 30 ngày và khôi phục nguyên ID cũ.',
    },
  ],
  wireframes: [
    {
      id: 'f01-form',
      label: 'F01 · Nhập & Kiểm tra',
      device: 'Phone' as const,
      lowfiSrc: './figma/lowfi-f01-form.png',
      midfiSrc: './figma/midfi-f01-form.png',
    },
    {
      id: 'f02-today',
      label: 'F02 · Hôm nay (Phone)',
      device: 'Phone' as const,
      lowfiSrc: './figma/lowfi-f02-today.png',
      midfiSrc: './figma/midfi-f02-today.png',
    },
    {
      id: 'f02-web',
      label: 'F02 · Kho (Web)',
      device: 'Web' as const,
      lowfiSrc: './figma/lowfi-web-f02.png',
      midfiSrc: './figma/midfi-web-f02.png',
    },
    {
      id: 'f03-storage',
      label: 'F03 · Nơi bảo quản',
      device: 'Phone' as const,
      lowfiSrc: './figma/lowfi-f03-storage.png',
      midfiSrc: './figma/midfi-f03-storage.png',
    },
  ],
};

export const F04_F05_DATA = {
  badge: 'PHẦN III · F04–F05 & FIGMA WIREFRAME',
  title: 'Biết món cần chú ý & giữ số lượng đáng tin',
  points: [
    {
      label: 'F04 · Nhóm cần chú ý (UC-18–23)',
      text: 'Phân nhóm Quá hạn, Sắp hết hạn, Chưa rõ HSD theo ngưỡng cảnh báo (mặc định 3 ngày, chỉnh 0–30 ngày).',
    },
    {
      label: 'Hẹn kiểm tra & Hoãn (BR-07/08)',
      text: 'Hẹn kiểm tra lại hoặc hoãn nhắc không đổi HSD; từ chối Push vẫn giữ lời nhắc trong ứng dụng.',
    },
    {
      label: 'F05 · Ba sự kiện số lượng (UC-24–26)',
      text: 'Tách riêng Đã dùng, Đã bỏ và Điều chỉnh kiểm kê; luôn xem trước thay đổi rồi mới xác nhận.',
    },
    {
      label: 'Lịch sử & Insights (UC-27–29 · BR-12)',
      text: 'Tổng hợp theo từng đơn vị và khoảng thời gian; không tự quy đổi đơn vị hay tính tiền tiết kiệm.',
    },
  ],
  wireframes: [
    {
      id: 'f04-attention',
      label: 'F04 · Cần chú ý',
      device: 'Phone' as const,
      lowfiSrc: './figma/lowfi-f04-attention.png',
      midfiSrc: './figma/midfi-f04-attention.png',
    },
    {
      id: 'f05-used',
      label: 'F05 · Ghi Đã dùng',
      device: 'Phone' as const,
      lowfiSrc: './figma/lowfi-f05-used.png',
      midfiSrc: './figma/midfi-f05-used.png',
    },
    {
      id: 'f05-insight',
      label: 'F05 · Insights',
      device: 'Phone' as const,
      lowfiSrc: './figma/lowfi-f05-insight.png',
      midfiSrc: './figma/midfi-f05-insight.png',
    },
  ],
};

export const F06_DATA = {
  badge: 'PHẦN III · F06 · MUA SẮM & ĐỐI CHIẾU KHO',
  title: 'Mua dựa trên dữ liệu kho đã ghi',
  points: [
    {
      label: 'Đối chiếu chủ động (UC-30 → UC-31)',
      text: 'Lập danh sách mua → đọc dữ liệu kho hiện hành cùng tài khoản → người dùng xác nhận liên kết đúng gói.',
    },
    {
      label: 'Quy tắc khớp & nhập kho (BR-17–19)',
      text: 'Trùng tên chỉ gợi ý ứng viên; đánh dấu Đã mua chỉ đổi danh sách, muốn nhập kho phải qua UC-05.',
    },
  ],
  statuses: [
    {
      label: 'Khớp dữ liệu kho',
      meaning: 'Đã xác nhận liên kết đúng gói còn hiệu lực.',
      fg: '#236B45',
      bg: '#E7F5EC',
    },
    {
      label: 'Có thể khớp',
      meaning: 'Có ứng viên cùng tên, cần người dùng tự kiểm tra.',
      fg: '#80500B',
      bg: '#FFF1D6',
    },
    {
      label: 'Không tìm thấy',
      meaning: 'Dữ liệu đọc được không có gói phù hợp.',
      fg: '#595959',
      bg: '#F1F1F1',
    },
    {
      label: 'Không kiểm tra được',
      meaning: 'Lỗi đọc dữ liệu kho (khác với không tìm thấy).',
      fg: '#853426',
      bg: '#F2D4CB',
    },
  ],
  wireframes: [
    {
      id: 'f06-shopping',
      label: 'F06 · Mua sắm (Phone)',
      device: 'Phone' as const,
      lowfiSrc: './figma/lowfi-f06-shopping.png',
      midfiSrc: './figma/midfi-f06-shopping.png',
    },
    {
      id: 'f06-web',
      label: 'F06 · Mua sắm (Web)',
      device: 'Web' as const,
      lowfiSrc: './figma/lowfi-web-f06.png',
      midfiSrc: './figma/midfi-web-f06.png',
    },
  ],
};

export const NFR_DATA = {
  badge: 'PHẦN III · RÀNG BUỘC CHẤT LƯỢNG (NFR)',
  title: 'Ràng buộc chất lượng giúp dữ liệu đáng tin và dễ dùng',
  groups: [
    {
      title: 'Bảo mật & Toàn vẹn dữ liệu',
      range: 'NR-01 – NR-04',
      isTarget: false,
      items: [
        {
          code: 'NR-01',
          text: 'Cách ly dữ liệu theo tài khoản có phiên hợp lệ; hết phiên hoặc sai chủ thể không lộ dữ liệu.',
        },
        {
          code: 'NR-02',
          text: 'Giữ nguyên 3 mốc NSX · Ngày mở · HSD không lệch UTC; không biến gợi ý OCR thành đã xác nhận.',
        },
        {
          code: 'NR-03, NR-04',
          text: 'Số lượng không âm, tách theo đơn vị; hủy hoặc lỗi lưu không ghi một phần vào tồn kho và Insights.',
        },
      ],
    },
    {
      title: 'An toàn thao tác & Khả dụng',
      range: 'NR-05 – NR-09',
      isTarget: false,
      items: [
        {
          code: 'NR-05',
          text: 'Kiểm soát ghi trùng khi kết quả chưa rõ; gửi lại cùng thao tác không tạo bản ghi hay trừ lượng lặp.',
        },
        {
          code: 'NR-06, NR-07',
          text: 'Camera/OCR/lưu lỗi vẫn giữ nháp để nhập tay; từ chối Push vẫn hoạt động nhắc trong ứng dụng.',
        },
        {
          code: 'NR-08, NR-09',
          text: 'Chỉ ghi sau xác nhận; phân biệt rõ trống / đang xử lý / lỗi / chưa rõ / đã lưu (gửi Push ≠ đã đọc).',
        },
      ],
    },
    {
      title: 'Vòng đời, Minh bạch & Tiếp cận',
      range: 'NR-10 – NR-13',
      isTarget: false,
      items: [
        {
          code: 'NR-10',
          text: 'Xóa nơi bảo quản, về lượng 0, đưa Thùng rác hay khôi phục không làm hỏng lịch sử và liên kết.',
        },
        {
          code: 'NR-11, NR-12',
          text: 'Insights truy về sự kiện gốc; đối chiếu kho hiện rõ 2 mốc đọc/đổi lượng và trùng tên không tự khớp.',
        },
        {
          code: 'NR-13',
          text: 'Thao tác chính dùng được bằng bàn phím, có nhãn cho trình đọc màn hình, không chỉ dùng màu.',
        },
      ],
    },
    {
      title: 'Hiệu năng & Phục hồi mục tiêu',
      range: 'NR-14 – NR-15 · Chưa đo',
      isTarget: true,
      items: [
        {
          code: 'NR-14 (QP-01)',
          text: 'Phản hồi tiến trình ≤ 300 ms; đọc/tìm/đối chiếu p95 ≤ 2 s; xác nhận ghi p95 ≤ 3 s; xử lý ảnh ≤ 15 s.',
        },
        {
          code: 'NR-15 (QP-02)',
          text: 'Sao lưu tối thiểu mỗi 24 giờ và giữ 7 bản theo ngày; mục tiêu RPO ≤ 24 giờ và RTO ≤ 4 giờ.',
        },
      ],
    },
  ],
  footerNote:
    'Trạng thái: SPECIFIED · NR-01–13 kiểm theo V01–V14 (QP-03); NR-14–15 là mục tiêu thiết kế đo theo V15 (QP-01, QP-02) — hiện chưa thực thi.',
};

export const WORKFLOW_STEPS = [
  {
    step: 1,
    phase: 'Ghi nhận',
    feature: 'F01 / F03',
    action: 'Nhập 500 g thịt bò, chọn danh mục, nơi cất và kiểm tra HSD trước khi lưu.',
    data: 'Tạo Bản ghi A (500 g)',
  },
  {
    step: 2,
    phase: 'Theo dõi',
    feature: 'F02 / F04',
    action: 'Tìm lại món. HSD còn 2 ngày (ngưỡng 3 ngày): A vào nhóm Cần chú ý.',
    data: 'Đọc A để tính trạng thái',
  },
  {
    step: 3,
    phase: 'Ghi sử dụng',
    feature: 'F05',
    action: 'Sau khi dùng 300 g, xem trước thay đổi và xác nhận số lượng.',
    data: 'A còn 200 g · Sự kiện Đã dùng 300 g',
  },
  {
    step: 4,
    phase: 'Xem lại',
    feature: 'F05',
    action: 'Mở Lịch sử hoặc Insights để xem lượng đã dùng theo đơn vị.',
    data: 'Tổng hợp từ sự kiện (g)',
  },
  {
    step: 5,
    phase: 'Đối chiếu',
    feature: 'F06',
    action: 'Lần nấu sau cần 500 g. Đối chiếu thấy còn 200 g → quyết định mua thêm 300 g.',
    data: 'Mục mua & liên kết kho (A không đổi)',
  },
  {
    step: 6,
    phase: 'Nhập gói mới',
    feature: 'F06 / F01',
    action: 'Sau khi mua, kiểm tra thông tin gói mới và lưu qua UC-05.',
    data: 'Tạo Bản ghi B (không gộp vào A)',
  },
];

export const CONCLUSION_DATA = {
  title: '6 nhóm tính năng F01–F06 giúp người dùng đạt được gì?',
  featureOutcomes: [
    {
      code: 'F01',
      name: 'Thêm thực phẩm',
      outcome: 'Ghi món mới qua ảnh nhãn, camera hoặc nhập tay và luôn kiểm tra lại trước khi lưu.',
      valueTag: 'Nhập đúng ngay từ đầu',
    },
    {
      code: 'F02',
      name: 'Quản lý thực phẩm',
      outcome: 'Xem, tìm, lọc, sửa món dễ dàng và bảo vệ dữ liệu với Thùng rác khôi phục trong 30 ngày.',
      valueTag: 'Tra cứu nhanh, tránh mất dữ liệu',
    },
    {
      code: 'F03',
      name: 'Danh mục & Nơi bảo quản',
      outcome: 'Phân loại món rõ ràng và biết chính xác thực phẩm đang cất ở vị trí nào.',
      valueTag: 'Biết rõ món ở đâu',
    },
    {
      code: 'F04',
      name: 'Hạn dùng & Nhắc nhở',
      outcome: 'Nhận biết kịp thời món quá hạn, sắp hết hạn hay chưa rõ HSD; hẹn kiểm tra hoặc hoãn nhắc.',
      valueTag: 'Chủ động dùng kịp thời',
    },
    {
      code: 'F05',
      name: 'Số lượng & Insights',
      outcome: 'Giữ số lượng sát thực tế qua Đã dùng, Đã bỏ, Điều chỉnh; xem lịch sử và tổng hợp theo đơn vị.',
      valueTag: 'Số liệu đáng tin & dễ đối soát',
    },
    {
      code: 'F06',
      name: 'Mua sắm & Đối chiếu kho',
      outcome: 'Lập danh sách mua và đối chiếu với kho đã ghi để quyết định mua thêm có căn cứ.',
      valueTag: 'Hạn chế mua trùng ngoài ý muốn',
    },
  ],
  closing:
    'Kết luận: Với 6 tính năng F01–F06, Expiry giúp người dùng biết mình đang có gì, kịp thời xử lý món cần chú ý, duy trì số lượng đáng tin và mua sắm có cơ sở trong một vòng khép kín.',
  statusNote: 'SPECIFIED · 31 UC · 53 Wireframes',
};
