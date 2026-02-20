'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CalendarSection from '@/components/CalendarSection';
import 'react-calendar/dist/Calendar.css';

export default function HomePage() {
  const [date, setDate] = useState(new Date());
  const [announcements, setAnnouncements] = useState([]);
  const [images, setImages] = useState([]);
  const [gospelOfTheDay, setGospelOfTheDay] = useState(null);
  const [liturgicalCalendar, setLiturgicalCalendar] = useState(null);
  const [lectionary, setLectionary] = useState(null);

  const MINIO_BASE = 'https://s3-api.prud.uk/web/church/hyvong';

  const getSundayLabel = (dayInfo) => {
    const seasons = {
      advent: 'Mùa Vọng',
      christmas: 'Mùa Giáng Sinh',
      ordinary: 'Mùa Thường Niên',
      lent: 'Mùa Chay',
      easter: 'Mùa Phục Sinh'
    };
    const weekdays = {
      sun: 'Chúa Nhật',
      mon: 'Thứ Hai',
      tue: 'Thứ Ba',
      wed: 'Thứ Tư',
      thu: 'Thứ Năm',
      fri: 'Thứ Sáu',
      sat: 'Thứ Bảy'
    };
    if (dayInfo.week_of_season === 0) {
      return `
        ${weekdays[dayInfo.weekday]}
        ${seasons[dayInfo.season]}
        Năm ${dayInfo.weekday === 'sun' ? dayInfo.sunday_cycle : dayInfo.weekday_cycle}`;
    }
    return `
      ${weekdays[dayInfo.weekday]}
      ${seasons[dayInfo.season]}
      Tuần ${dayInfo.week_of_season}
      Năm ${dayInfo.weekday === 'sun' ? dayInfo.sunday_cycle : dayInfo.weekday_cycle}`;
  };

  useEffect(() => {
    fetch(MINIO_BASE + '/index.json')
      .then(res => res.json())
      .then(data => {
        const sortedAnnouncements = data.announcements ? data.announcements.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3) : [];
        setAnnouncements(sortedAnnouncements);

        const sortedImages = data.images ? data.images.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4) : [];
        setImages(sortedImages);
      })
      .catch(console.error);

    // Fetch liturgical calendar and lectionary
    const currentYear = new Date().getFullYear();
    Promise.all([
      fetch(`https://raw.githubusercontent.com/nqminhuit/liturgical-calendar/refs/heads/master/resources/liturgical-calendar-${currentYear}.json`),
      fetch('https://raw.githubusercontent.com/nqminhuit/liturgical-calendar/refs/heads/master/resources/lectionary.json')
    ])
      .then(([calRes, lecRes]) => Promise.all([calRes.json(), lecRes.json()]))
      .then(([calData, lecData]) => {
        setLiturgicalCalendar(calData);
        setLectionary(lecData);
      })
      .catch(console.error);
  }, []);

  // Compute Gospel of the Day
  useEffect(() => {
    if (liturgicalCalendar && lectionary) {
      const currentDate = new Date().toISOString().split('T')[0];
      const dayInfo = liturgicalCalendar[currentDate];
      if (dayInfo) {
        const reading = lectionary.readings[dayInfo.lectionary_key];
        if (reading && reading.gospel) {
          const sunday = getSundayLabel(dayInfo);
          setGospelOfTheDay({
            quote: reading.gospelQuote,
            reference: reading.gospel,
            sunday: sunday
          });
        } else {
          setGospelOfTheDay(null);
        }
      } else {
        setGospelOfTheDay(null);
      }
    }
  }, [liturgicalCalendar, lectionary]);

  return (
    <div className="space-y-12">
      {/* Banner on top across full width */}
      <section className="text-center py-20 bg-gradient-to-b from-green-100 to-green-200 rounded-lg overflow-hidden animate-[fadeIn_1s_ease-out_forwards]">
        <Image
          src={MINIO_BASE + '/media/main_banner.jpg'}
          alt="Giáo xứ Hy Vọng community gathering"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mb-6 object-cover block mx-auto"
          priority
        />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800">Chào mừng đến với Giáo xứ Hy Vọng</h1>
          <p className="mt-4 text-lg text-gray-700">&quot;Hy vọng nơi Chúa là nguồn sức mạnh của chúng ta.&quot; (Is 40,31)</p>
          <Link href="/gio-le" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition">Tham Dự Thánh Lễ</Link>
        </div>
      </section>

      {/* Word of God Section - Full Width */}
      <section className="max-w-4xl mx-auto text-center py-8 bg-gradient-to-r from-green-50 to-green-200 border border-green-300 rounded-lg shadow-lg my-8 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
        <h2 className="text-2xl font-bold text-green-900 mb-4">📖 Lời Chúa hôm nay</h2>
        {gospelOfTheDay ? (
          <>
            <blockquote className="text-lg text-gray-800 italic font-medium mx-4">
              &quot;{gospelOfTheDay.quote}&quot;
            </blockquote>
            <cite className="text-sm text-gray-600 mt-2 block">({gospelOfTheDay.reference})</cite>
            <p className="text-sm text-green-700 font-semibold mt-2">{gospelOfTheDay.sunday}</p>
          </>
        ) : (
          <>
            <blockquote className="text-lg text-gray-800 italic font-medium mx-4">
              &quot;Anh em hãy yêu thương nhau như Thầy đã yêu thương anh em.&quot;
            </blockquote>
            <cite className="text-sm text-gray-600 mt-2 block">(Ga 15,12)</cite>
          </>
        )}
      </section>

      {/* Grid: Left - Content, Right - Calendar */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Main content */}
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-2">🌟 Giới thiệu</h2>
            <p className="text-gray-700 leading-relaxed">Giáo xứ Hy Vọng được thành lập và phát triển từ năm 1957 tại Giáo Hạt Tân Sơn Nhì, là nơi quy tụ cộng đoàn tín hữu cùng nhau cầu nguyện, chia sẻ đức tin và phục vụ tha nhân. Chúng tôi luôn chào đón mọi người đến tham dự Thánh lễ và các hoạt động mục vụ.</p>
          </section>



          <section className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <span className="mr-2">📢</span> Thông báo
            </h2>
            <ul className="space-y-2 text-gray-700">
              {announcements.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-600 mr-2">🔔</span>
                  <span><strong>{new Date(item.date).toLocaleDateString('vi-VN')}:</strong> {item.summary}</span>
                </li>
              ))}
            </ul>
            <Link href="/thong-bao" className="inline-block mt-4 text-green-700 underline font-medium hover:text-green-800">Xem tất cả &raquo;</Link>
          </section>
          <section className="mt-12">
            <h2 className="text-xl font-bold text-green-800 mb-4">📸 Hình ảnh mới</h2>
            <div className="flex flex-wrap gap-4">
              {images.map((item, idx) => (
                <Image
                  key={idx}
                  src={MINIO_BASE + '/media/' + item.src}
                  alt={item.alt}
                  width={232}
                  height={160}
                  className="object-cover rounded shadow"
                  priority={idx === 0}
                />
              ))}
            </div>
            <Link href="/hinh-anh" className="block mt-2 text-green-700 underline text-sm">Xem tất cả »</Link>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-2">⛪ Giờ lễ trong tuần</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Chúa Nhật: 05:30, 07:30, 17:00, 18:30</li>
              <li>Thứ Hai - Thứ Bảy: 05:00, 18:00</li>
            </ul>
            <Link href="/gio-le" className="text-green-800 underline text-sm mt-2 inline-block">Xem chi tiết &raquo;</Link>
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
