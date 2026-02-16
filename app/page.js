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
          <a href="/gio-le" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition">Tham Dự Thánh Lễ</a>
        </div>
      </section>

      {/* Word of God Section - Full Width */}
      <section className="max-w-4xl mx-auto text-center py-8 bg-gradient-to-r from-green-50 to-green-200 border border-green-300 rounded-lg shadow-lg my-8">
        <h2 className="text-2xl font-bold text-green-900 mb-4">📖 Lời Chúa hôm nay</h2>
        <blockquote className="text-lg text-gray-800 italic font-medium mx-4">
          &quot;Anh em hãy yêu thương nhau như Thầy đã yêu thương anh em.&quot;
        </blockquote>
        <cite className="text-sm text-gray-600 mt-2 block">(Ga 15,12)</cite>
        <p className="text-sm text-green-700 font-semibold mt-2">Chúa Nhật XIV Thường Niên - Năm B</p>
      </section>

      {/* Grid: Left - Content, Right - Calendar */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Main content */}
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-2">🌟 Giới thiệu</h2>
            <p className="text-gray-700 leading-relaxed">Giáo xứ Hy Vọng được thành lập năm XXXX, là nơi quy tụ cộng đoàn tín hữu cùng nhau cầu nguyện, chia sẻ đức tin và phục vụ tha nhân. Chúng tôi luôn chào đón mọi người đến tham dự Thánh lễ và các hoạt động mục vụ.</p>
          </section>



          <section className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <span className="mr-2">📢</span> Thông báo
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🔔</span>
                <span><strong>07/07:</strong> Khai giảng lớp giáo lý Thêm Sức.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🔔</span>
                <span><strong>14/07:</strong> Tĩnh tâm giới trẻ mùa hè.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🔔</span>
                <span><strong>20/07:</strong> Chầu Thánh Thể lúc 19h00.</span>
              </li>
            </ul>
            <a href="/thong-bao" className="inline-block mt-4 text-green-700 underline font-medium hover:text-green-800">Xem tất cả &raquo;</a>
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
