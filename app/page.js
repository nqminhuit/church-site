'use client'

import CalendarSection from '@/components/CalendarSection';
import ImageModal from '@/components/ImageModal';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { fetchAnnouncements, fetchPhotos, MINIO_BASE } from '@/utils/fetchIndex';

export default function HomePage() {
  const topItemsCount = 3;
  const [date, setDate] = useState(new Date());
  const [announcements, setAnnouncements] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gospelOfTheDay, setGospelOfTheDay] = useState(null);
  const [liturgicalCalendar, setLiturgicalCalendar] = useState(null);
  const [lectionary, setLectionary] = useState(null);

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
    fetchAnnouncements()
      .then(anns => setAnnouncements(anns ? anns.slice(0, topItemsCount) : []))
      .catch(console.error);
    fetchPhotos()
      .then(imgs => setImages(imgs ? imgs.slice(0, topItemsCount) : []))
      .catch(console.error);

    // Fetch liturgical calendar and lectionary
    // const currentYear = new Date().getFullYear();
    const currentYear = date.getFullYear();
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
  }, [date]);

  // Compute Gospel of the Day
  useEffect(() => {
    if (liturgicalCalendar && lectionary) {
      const selectedDate = date.toLocaleDateString('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' });
      const dayInfo = liturgicalCalendar[selectedDate];
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
  }, [liturgicalCalendar, lectionary, date]);

  return (
    <div className="space-y-12">
      {/* Banner on top across full width */}
      <section className="text-center py-6 bg-gradient-to-b from-green-100 to-green-200 rounded-lg overflow-hidden animate-[fadeIn_1s_ease-out_forwards]">
        <Image
          src={`${MINIO_BASE}/media/main_banner.jpg`}
          alt="Giáo xứ Hy Vọng community gathering"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mb-6 object-cover block mx-auto"
          priority
        />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800">Chào mừng đến với Giáo xứ Hy Vọng</h1>
          <blockquote className="mt-4 text-lg text-gray-700 italic">
            <q>Xin Thiên Chúa là nguồn hy vọng, ban cho anh em được chan chứa niềm vui và bình an nhờ đức tin, để nhờ quyền năng của Thánh Thần, anh em được tràn trề hy vọng.</q>
            <cite className="text-sm text-gray-600 mx-3">(Rm 15,13)</cite>
          </blockquote>
          <Link href="/gio-le" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition">Tham Dự Thánh Lễ</Link>
        </div>
      </section>

      {/* Word of God Section - Full Width */}
      <section className="max-w-4xl mx-auto text-center py-6 bg-gradient-to-r from-green-50 to-green-200 border border-green-300 rounded-lg shadow-lg my-8 animate-[fadeIn_1s_ease-out_0.3s_forwards] min-h-[14em]">
        <h2 className="text-2xl font-bold text-green-900 mb-4">
          {
            gospelOfTheDay
              ? date.toDateString() === new Date().toDateString()
                ? "📖 Lời Chúa hôm nay"
                : `📖 Lời Chúa ${date.toLocaleDateString('vi-VN')}`
              : "📖 Lời Chúa"
          }
        </h2>
        {gospelOfTheDay
          ? (<>
            <blockquote className="text-lg text-gray-800 italic font-medium mx-4">
              <q>{gospelOfTheDay.quote}</q>
            </blockquote>
            <cite className="text-sm text-gray-600 mt-2 block">({gospelOfTheDay.reference})</cite>
            <p className="text-sm text-green-700 font-semibold mt-2">{gospelOfTheDay.sunday}</p>
          </>)
          : (<>
            <blockquote className="text-lg text-gray-800 italic font-medium mx-4">
              <q>Anh em hãy yêu thương nhau như Thầy đã yêu thương anh em.</q>
            </blockquote>
            <cite className="text-sm text-gray-600 mt-2 block">(Ga 15,12)</cite>
          </>)}
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
                <div key={idx} className="overflow-hidden rounded-lg hover:shadow-lg hover:scale-107 transition-all duration-300 cursor-pointer" onClick={() => setSelectedImage(item)}>
                  <Image
                    src={`${MINIO_BASE}/media/${item.src}`}
                    alt={item.alt}
                    width={230}
                    height={0}
                    priority={idx === 0}
                  />
                </div>
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
          <CalendarSection date={date} onChange={setDate} />
          <p className="text-sm text-gray-600">Ngày được chọn: <strong>{date.toLocaleDateString('vi-VN')}</strong></p>
        </div>
      </div>

      <ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
