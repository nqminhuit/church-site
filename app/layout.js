import BackToTop from '@/components/BackToTop';
import ErrorBoundary from '@/components/ErrorBoundary';
import MobileNav from '@/components/MobileNav';
import NavLinks from '@/components/NavLinks';
import TestServerBanner from '@/components/TestServerBanner';
import { navItems } from '@/components/nav-items';
import { Analytics } from '@vercel/analytics/next';
import Link from 'next/link';
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
        <TestServerBanner />

        {/* Header */}
        <header className="bg-green-700 text-white shadow-md">
          <div className="max-w-6xl mx-auto py-1 flex justify-between items-center">
            <div className="text-xl font-bold hover:scale-[1.2] transition-all duration-300">
              <Link href="/" className="text-xl font-bold no-underline hover:opacity-70">⛪ Giáo xứ Hy Vọng</Link>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-4 text-sm relative">
              <NavLinks items={navItems} />
            </nav>
            {/* Mobile Nav */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="w-full max-w-6xl mx-auto px-4 py-6 flex-grow">
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
                <span className="mr-2">🔗</span>
                <Link href="/lien-he" className="underline hover:text-green-200">Xem chi tiết liên hệ</Link>
              </p>
              {/* Add social if available: <a href="https://facebook.com/gxhyvong" className="underline">Facebook</a> */}
            </div>
          </div>
          <BackToTop />
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
