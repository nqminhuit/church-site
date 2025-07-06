import './globals.css';

export const metadata = {
  title: 'Giáo xứ Hy Vọng',
  description: 'Trang thông tin Giáo xứ Hy Vọng',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="font-sans">
        <header className="bg-green-700 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">
              ⛪ Giáo xứ Hy Vọng
            </div>
            <nav className="space-x-4 text-sm">
              <a href="/" className="hover:underline">Trang chủ</a>
              <a href="/phan-cong-doc-sach" className="hover:underline">Phân công đọc sách</a>
              <a href="/gio-le" className="hover:underline">Giờ lễ</a>
              <a href="/lien-he" className="hover:underline">Liên hệ</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
