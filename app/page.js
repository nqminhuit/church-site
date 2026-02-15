'use client'

import { useState } from 'react';
import Image from 'next/image';
import CalendarSection from '@/components/CalendarSection';
import 'react-calendar/dist/Calendar.css';

export default function HomePage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="space-y-12">
      {/* Banner on top across full width */}
      <section className="text-center py-20 bg-gradient-to-b from-green-100 to-green-200 rounded-lg overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/photos/event1.compressed.jpg"
            alt="Giáo xứ Hy Vọng community gathering"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold text-green-800">Chào mừng đến với Giáo xứ Hy Vọng</h1>
          <p className="mt-4 text-lg text-gray-700">&quot;Hy vọng nơi Chúa là nguồn sức mạnh của chúng ta.&quot; (Is 40,31)</p>
          <a href="/gio-le" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition">Tham Gia Thánh Lễ Chúa Nhật</a>
        </div>
      </section>

      {/* Grid: Left - Content, Right - Calendar */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Main content */}
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-2">🌟 Giới thiệu</h2>
            <p className="text-gray-700 leading-relaxed">Giáo xứ Hy Vọng được thành lập năm XXXX, là nơi quy tụ cộng đoàn tín hữu cùng nhau cầu nguyện, chia sẻ đức tin và phục vụ tha nhân. Chúng tôi luôn chào đón mọi người đến tham dự Thánh lễ và các hoạt động mục vụ.</p>
          </section>
          <section className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-green-800 mb-2">📖 Lời Chúa hôm nay</h2>
            <p className="text-gray-700 italic">&quot;Anh em hãy yêu thương nhau như Thầy đã yêu thương anh em.&quot; (Ga 15,12)</p>
            <p className="text-sm text-gray-500 mt-2">Chúa Nhật XIV Thường Niên - Năm B</p>
          </section>

          <section className="grid sm:grid-cols-2 gap-6">
            <a href="/phan-cong-doc-sach" className="block bg-white shadow-md rounded-lg p-6 hover:bg-green-50">
              <h2 className="text-xl font-semibold text-green-800 mb-2">📖 Phân công đọc sách</h2>
              <p className="text-gray-600 text-sm">Lịch phân công cho các lễ sắp tới.</p>
            </a>
            <a href="/gio-le" className="block bg-white shadow-md rounded-lg p-6 hover:bg-green-50">
              <h2 className="text-xl font-semibold text-green-800 mb-2">🕊️ Giờ lễ</h2>
              <p className="text-gray-600 text-sm">Xem lịch giờ lễ trong tuần.</p>
            </a>
            <a href="/lien-he" className="block bg-white shadow-md rounded-lg p-6 hover:bg-green-50 col-span-2 sm:col-span-1">
              <h2 className="text-xl font-semibold text-green-800 mb-2">📞 Liên hệ</h2>
              <p className="text-gray-600 text-sm">Thông tin liên lạc với giáo xứ.</p>
            </a>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-2">📢 Thông báo</h2>
            <ul className="space-y-1 text-gray-700">
              <li>🔔 <strong>07/07:</strong> Khai giảng lớp giáo lý Thêm Sức.</li>
              <li>🔔 <strong>14/07:</strong> Tĩnh tâm giới trẻ mùa hè.</li>
              <li>🔔 <strong>20/07:</strong> Chầu Thánh Thể lúc 19h00.</li>
            </ul>
          </section>
          <section className="mt-12">
            <h2 className="text-xl font-bold text-green-800 mb-4">📸 Hình ảnh mới</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { src: '/photos/event1.compressed.jpg', alt: 'Sunday Mass celebration' },
                { src: '/photos/event2.compressed.jpg', alt: 'Youth group gathering' },
                { src: '/photos/event3.compressed.jpg', alt: 'Community charity event' },
              ].map(({src, alt}, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={alt}
                  width={232}
                  height={160}
                  className="object-cover rounded shadow"
                />
              ))}
            </div>
            <a href="/hinh-anh" className="block mt-2 text-green-700 underline text-sm">Xem tất cả »</a>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-2">⛪ Giờ lễ trong tuần</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Chúa Nhật: 5h30, 7h00, 17h30</li>
              <li>Thứ Hai - Thứ Bảy: 5h00 sáng</li>
            </ul>
            <a href="/gio-le" className="text-green-800 underline text-sm mt-2 inline-block">Xem chi tiết &raquo;</a>
          </section>
        </div>

        {/* Right Column: Calendar */}
        <div className="space-y-4">
          <CalendarSection date={date} onChange={setDate}/>
          <p className="text-sm text-gray-600">Ngày được chọn: <strong>{date.toLocaleDateString('vi-VN')}</strong></p>
        </div>
      </div>
    </div>
  );
}
