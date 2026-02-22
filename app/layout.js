import Link from 'next/link';
import ErrorBoundary from '@/components/ErrorBoundary';
import BackToTop from '@/components/BackToTop';
import './globals.css';

export const metadata = {
  title: 'Giáo xứ Hy Vọng',
  description: 'Trang thông tin Giáo xứ Hy Vọng',
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="font-sans flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-green-700 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">
              <Link href="/" className="text-xl font-bold no-underline hover:opacity-70">⛪ Giáo xứ Hy Vọng</Link>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-4 text-sm relative">
              <Link href="/" className="hover:underline">Trang chủ</Link>
              <Link href="/lich-su-giao-xu" className="hover:underline">Lịch sử Giáo Xứ</Link>
              <Link href="/thong-bao" className="hover:underline">Thông báo</Link>
              <Link href="/hinh-anh" className="hover:underline">Hình ảnh</Link>
              <div className="relative group pb-2">
                <button className="hover:underline cursor-pointer">Các hoạt động</button>
                <div className="absolute left-0 top-full hidden group-hover:block hover:block bg-white shadow-lg rounded-md border z-50 min-w-[200px]">
                  <Link href="/cac-hoat-dong" className="block px-4 py-3 text-gray-800 hover:bg-green-100 hover:text-green-800 rounded-md transition">🏠 Tổng quan</Link>
                  <Link href="/cac-hoat-dong/phan-cong-doc-sach" className="block px-4 py-3 text-gray-800 hover:bg-green-100 hover:text-green-800 rounded-md transition">📖 Phân công đọc sách</Link>
                  <Link href="/gio-le" className="block px-4 py-3 text-gray-800 hover:bg-green-100 hover:text-green-800 rounded-md transition">🕊️ Giờ lễ</Link>
                  <Link href="/cac-hoat-dong/caritas" className="block px-4 py-3 text-gray-800 hover:bg-green-100 hover:text-green-800 rounded-md transition">❤️ Caritas Giáo xứ</Link>
                </div>
              </div>
              <Link href="/lien-he" className="hover:underline">Liên hệ</Link>
            </nav>
            {/* Mobile Nav Placeholder - can add hamburger menu later */}
            <div className="md:hidden">
              <button className="text-white text-xl">☰</button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-6xl mx-auto px-4 py-6 flex-grow">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-t from-green-700 to-green-900 text-white text-sm py-8 mt-12 border-t border-green-600">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
            <div>
              <p>&copy; {new Date().getFullYear()} Giáo xứ Hy Vọng. Mọi quyền được bảo lưu.</p>
              <p className="mt-2 flex items-start">
                <span className="mr-2">🏠</span>
                <span>Địa chỉ: 69 Phan Huy Ích, Phường 15, Quận Tân Bình, TP. Hồ Chí Minh</span>
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="mt-2 flex items-center justify-start md:justify-end">
                <span className="mr-2">📧</span>
                <a href="mailto:giaoxuhyvong@gmail.com" className="underline hover:text-green-200">Email: giaoxuhyvong@gmail.com</a>
              </p>
              <p className="mt-2 flex items-center justify-start md:justify-end">
                <span className="mr-2">📱</span>
                <a href="tel:+842838151700" className="underline hover:text-green-200">Điện thoại: (+84) 28 3815 1700</a>
              </p>
              <p className="mt-2 flex items-center justify-start md:justify-end">
                <span className="mr-2">🔗</span>
                <Link href="/lien-he" className="underline hover:text-green-200">Xem chi tiết liên hệ</Link>
              </p>
              {/* Add social if available: <a href="https://facebook.com/gxhyvong" className="underline">Facebook</a> */}
            </div>
          </div>
          <BackToTop />
        </footer>
      </body>
    </html>
  );
}
