import Link from 'next/link';
import Image from 'next/image';

export default function ActivitiesPage() {
  const activities = [
    {
      title: 'Phân công đọc sách',
      description: 'Lịch phân công phục vụ sách Thánh trong các thánh lễ.',
      link: '/cac-hoat-dong/phan-cong-doc-sach',
      image: '/photos/event1.compressed.jpg'
    },
    {
      title: 'Giờ lễ',
      description: 'Lịch giờ các thánh lễ hàng tuần.',
      link: '/gio-le',
      image: '/photos/event2.compressed.jpg'
    },
    {
      title: 'Các hoạt động khác',
      description: 'Thông tin về các chương trình mục vụ, từ thiện, và sự kiện cộng đồng.',
      link: '#',
      image: '/photos/event3.compressed.jpg'
    }
  ];

  return (
    <main className="min-h-screen p-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-b from-green-100 to-green-200 rounded-lg mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">🎉 Các Hoạt Động</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Khám phá các hoạt động và chương trình phong phú của Giáo xứ Hy Vọng, từ các thánh lễ đến các sáng kiến cộng đồng.
        </p>
      </section>

      {/* Activities Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300">
            <Image
              src={activity.image}
              alt={activity.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-green-800 mb-2">{activity.title}</h2>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <Link
                href={activity.link}
                className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
              >
                Xem chi tiết »
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Upcoming Events */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Sự kiện sắp tới</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-green-50 p-4 rounded-lg">
            <div>
              <h3 className="font-semibold text-green-800">Chầu Thánh Thể cầu nguyện cho hòa bình</h3>
              <p className="text-sm text-gray-600">20/07/2024, 19h00 - Nhà thờ chính</p>
            </div>
            <Link href="/thong-bao" className="text-green-700 underline">Chi tiết</Link>
          </div>
          <div className="flex justify-between items-center bg-green-50 p-4 rounded-lg">
            <div>
              <h3 className="font-semibold text-green-800">Tĩnh tâm giới trẻ mùa hè</h3>
              <p className="text-sm text-gray-600">14/07/2024 - Trung tâm mục vụ</p>
            </div>
            <Link href="/thong-bao" className="text-green-700 underline">Chi tiết</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
