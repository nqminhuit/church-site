'use client'

import ContactForm from '@/components/ContactForm';

export default function ContactInfo() {
  return (
    <div className="w-full mx-auto px-4 py-8" aria-label="Liên hệ">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Liên hệ</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <section className="bg-white space-y-4 md:w-1/2">
          <div>
            <p className="text-xl font-semibold text-green-700">🏠 Địa chỉ</p>
            <p className="text-gray-700">69 Phan Huy Ích, Phường 15, Quận Tân Bình, TP. Hồ Chí Minh</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-green-700">📱 Điện thoại</p>
            <a href="tel:+842838151700" className="text-gray-700 hover:text-green-800 underline">(+84) 28 3815 1700</a>
          </div>
          <div>
            <p className="text-xl font-semibold text-green-700">⛪ Giờ hành chính</p>
            <p className="text-gray-700">Thứ Hai – Thứ Bảy: 08:00 – 17:00</p>
          </div>
        </section>

        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>

      <iframe className="w-full min-h-[300px] md:h-full rounded-lg shadow mt-8"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7867844783646!2d106.649!3d10.796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297d190a60b9%3A0x31136e6c8eed5a31!2s69%20Phan%20Huy%20Ich,%20Phuong%2015,%20Tan%20Binh!5e0!3m2!1sen!2s!4v1752238668986!5m2!1sen!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Bản đồ vị trí Giáo xứ Hy Vọng tại Tân Bình"
      />
    </div>
  );
}
