'use client'

import { useState } from 'react';
import CalendarSection from '@/components/CalendarSection';
import 'react-calendar/dist/Calendar.css';

export default function HomePage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="space-y-12">
      {/* Banner on top across full width */}
      <section className="text-center py-16 bg-green-100 rounded-lg">
        <h1 className="text-4xl font-bold text-green-800">Chào mừng đến với Giáo xứ Hy Vọng</h1>
        <p className="mt-4 text-lg text-gray-700">
          "Hy vọng nơi Chúa là nguồn sức mạnh của chúng ta." (Is 40,31)
        </p>
      </section>

      {/* Grid: Left - Content, Right - Calendar */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Main content */}
        <div className="md:col-span-2 space-y-10">
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
          <h2 className="text-xl font-semibold text-green-700">📅 Lịch Giáo xứ</h2>
          <CalendarSection />
          <p className="text-sm text-gray-600">Ngày được chọn: <strong>{date.toLocaleDateString('vi-VN')}</strong></p>
        </div>
      </div>
    </div>
  );
}
