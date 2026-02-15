import Link from 'next/link';
import ErrorBoundary from '@/components/ErrorBoundary';
import './globals.css';

export const metadata = {
  title: 'Giáo xứ Hy Vọng',
  description: 'Trang thông tin Giáo xứ Hy Vọng',
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
              <div className="relative group">
                <button className="hover:underline cursor-pointer">Các hoạt động</button>
                <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-md border z-50">
                  <Link href="/cac-hoat-dong" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Tổng quan</Link>
                  <Link href="/cac-hoat-dong/phan-cong-doc-sach" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Phân công đọc sách</Link>
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
        <main className="max-w-6xl mx-auto px-4 py-8 flex-grow">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>

        {/* Footer */}
        <footer className="bg-green-800 text-white text-sm py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Giáo xứ Hy Vọng. Mọi quyền được bảo lưu.</p>
            <p className="mt-1">Địa chỉ: 123 Đường Đức Tin, Quận Bình An, TP.HCM</p>
            <p className="mt-1">Email: <a href="mailto:lienhe@gxhyvong.vn" className="underline">lienhe@gxhyvong.vn</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
