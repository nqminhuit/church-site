export const navItems = [
  { href: '/', label: 'Trang chủ' },
  { href: '/lich-su-giao-xu', label: 'Lịch sử Giáo Xứ' },
  { href: '/thong-bao', label: 'Thông báo' },
  { href: '/hinh-anh', label: 'Hình ảnh' },
  {
    label: 'Các hoạt động',
    children: [
      { href: '/cac-hoat-dong', label: '🏠 Tổng quan' },
      { href: '/cac-hoat-dong/phan-cong-doc-sach', label: '📖 Phân công đọc sách' },
      { href: '/gio-le', label: '🕊️ Giờ lễ' },
      { href: '/cac-hoat-dong/caritas', label: '❤️ Caritas Giáo xứ' },
    ],
  },
  { href: '/lien-he', label: 'Liên hệ' },
];
