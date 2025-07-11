import Link from 'next/link';
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
            <nav className="space-x-4 text-sm">
              <a href="/lich-su-giao-xu" className="hover:underline">Lịch sử Giáo Xứ</a>
              <a href="/phan-cong-doc-sach" className="hover:underline">Phân công đọc sách</a>
              <a href="/gio-le" className="hover:underline">Giờ lễ</a>
              <a href="/lien-he" className="hover:underline">Liên hệ</a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-6xl mx-auto px-4 py-8 flex-grow">
          {children}
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
