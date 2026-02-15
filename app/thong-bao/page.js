import Image from 'next/image';

export default function AnnouncementsPage() {
  const announcements = [
    {
      title: 'Khai giảng lớp Giáo lý tháng 7',
      date: '07/07/2024',
      summary: 'Chương trình giáo lý dành cho các em thiếu nhi sẽ chính thức bắt đầu. Mời phụ huynh đăng ký.',
      image: '/photos/event1.compressed.jpg',
      link: '#'
    },
    {
      title: 'Tĩnh tâm giới trẻ mùa hè',
      date: '14/07/2024',
      summary: 'Các bạn trẻ hãy tham gia buổi tĩnh tâm để củng cố đức tin và gắn kết cộng đồng.',
      image: '/photos/event2.compressed.jpg',
      link: '#'
    },
    {
      title: 'Chầu Thánh Thể cầu nguyện cho hòa bình',
      date: '20/07/2024',
      summary: 'Lễ chầu Thánh Thể bắt đầu từ 19h00 tại nhà thờ. Mời tất cả cộng đoàn tham dự.',
      image: '/photos/event3.compressed.jpg',
      link: '#'
    },
  ];

  return (
    <main className="min-h-screen p-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-b from-green-100 to-green-200 rounded-lg mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">📢 Thông Báo</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Cập nhật tin tức mới nhất và thông báo quan trọng từ Giáo xứ Hy Vọng.
        </p>
      </section>

      {/* Announcements List */}
      <section className="space-y-6">
        {announcements.map((announcement, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src={announcement.image}
                  alt={announcement.title}
                  width={200}
                  height={150}
                  className="object-cover md:h-full md:w-48"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-500">{announcement.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-green-600 font-medium">Thông báo</span>
                </div>
                <h2 className="text-xl font-bold text-green-800 mb-2">{announcement.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{announcement.summary}</p>
                <a
                  href={announcement.link}
                  className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                >
                  Xem chi tiết »
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Additional Info */}
      <section className="mt-12 text-center">
        <p className="text-gray-600">
          Để nhận thông báo qua email, vui lòng liên hệ với giáo xứ hoặc đăng ký qua trang liên hệ.
        </p>
      </section>
    </main>
  );
}
