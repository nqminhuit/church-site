import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { ASSETS_BASE } from '@/utils/fetchIndex';

export const metadata = {
  title: 'Caritas Giáo xứ Hy Vọng',
  description: 'Caritas Giáo xứ Hy Vọng - hoạt động từ thiện và hỗ trợ cộng đồng. Tham gia cùng chúng tôi để phục vụ người nghèo và cần giúp đỡ.',
};

export default function CaritasPage() {
  return (
    <div className="container mx-auto px-4 py-8" aria-label="Caritas page">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">❤️ Caritas Giáo xứ Hy Vọng</h1>
        <p className="mt-2 text-gray-700">
          Chúng tôi đồng hành cùng những người gặp khó khăn: cung cấp bữa ăn, hỗ trợ y tế và tạo cơ hội cho cộng đồng phát triển.
        </p>
      </header>

      {/* Hero */}
      <section className="flex flex-col lg:flex-row items-center gap-6 mb-8" aria-label="hero">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">Sứ mệnh của chúng tôi</h2>
          <p className="mt-3 text-gray-700">
            Lan tỏa tình yêu và sự chia sẻ bằng những hành động cụ thể — cung cấp bữa ăn, hỗ trợ y tế và đồng hành cùng người nghèo.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded shadow text-center">
              <p className="text-3xl font-bold">12,345</p>
              <p className="text-sm text-gray-600">Số bữa ăn/năm</p>
            </div>
            <div className="p-4 bg-white rounded shadow text-center">
              <p className="text-3xl font-bold">1,234</p>
              <p className="text-sm text-gray-600">Người nhận hỗ trợ</p>
            </div>
            <div className="p-4 bg-white rounded shadow text-center">
              <p className="text-3xl font-bold">123</p>
              <p className="text-sm text-gray-600">Tình nguyện viên</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <Image
            src={`${ASSETS_BASE}/caritas.jpg`}
            alt="Caritas hero"
            width={500} height={300}
            className="rounded shadow" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-8" aria-label="faq">
        <h2 className="text-2xl font-semibold">Câu hỏi thường gặp</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold">Làm sao để tham gia làm tình nguyện?</h3>
            <p className="text-gray-700">Bạn có thể đến gặp trực tiếp Hội Đồng Mục Vụ giáo xứ hoặc điền vào form liên hệ bên dưới. Chúng tôi sẽ liên hệ lại với bạn để hướng dẫn.</p>
          </div>
          <div>
            <h3 className="font-semibold">Caritas hỗ trợ những đối tượng nào?</h3>
            <p className="text-gray-700">Chúng tôi tập trung vào người nghèo, người già neo đơn, bệnh nhân khó khăn và các gia đình cần trợ giúp kịp thời.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-form" className="mb-12" aria-label="contact form">
        <h2 className="text-2xl font-semibold">Liên hệ</h2>
        <p className="mt-2 text-gray-700">Vui lòng gửi thông tin liên hệ hoặc lời nhắn — chúng tôi sẽ phản hồi sớm nhất có thể.</p>
        <div className="mt-4 max-w-md">
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
