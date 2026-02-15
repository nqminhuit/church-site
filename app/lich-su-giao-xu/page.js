import Image from 'next/image';

export default function HistoryPage() {
  return (
    <main className="min-h-screen p-6 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-b from-green-100 to-green-200 rounded-lg mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">📜 Lịch sử Giáo xứ Hy Vọng</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Khám phá hành trình hình thành và phát triển của Giáo xứ qua hơn 20 năm đồng hành cùng cộng đoàn.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          Giáo xứ Hy Vọng được thành lập vào năm 1995 với sứ mạng phục vụ cộng đoàn Đức Tin tại khu vực miền Đông thành phố.
          Qua nhiều năm hình thành và phát triển, giáo xứ đã trở thành một điểm đến thiêng liêng cho bao thế hệ tín hữu.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 text-lg">
          Nhờ ơn Chúa và sự đồng hành của các cha xứ, giáo xứ đã xây dựng được nhà thờ khang trang, trung tâm mục vụ, và các chương trình giáo lý, bác ái phục vụ cộng đồng.
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Dấu mốc phát triển</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1995</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Thành lập Giáo xứ</h3>
              <p className="text-gray-600">Giáo xứ Hy Vọng chính thức được thành lập, bắt đầu sứ mạng phục vụ cộng đồng tín hữu.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2000</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Xây dựng nhà thờ</h3>
              <p className="text-gray-600">Khởi công xây dựng nhà thờ chính tòa, trở thành biểu tượng của niềm hy vọng.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2010</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Phát triển chương trình mục vụ</h3>
              <p className="text-gray-600">Mở rộng các hoạt động giáo lý, từ thiện, và chăm sóc cộng đồng.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2024</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Hiện tại</h3>
              <p className="text-gray-600">Tiếp tục sứ mạng với cộng đoàn mạnh mẽ và các hoạt động phong phú.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Images and Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image
            src="/photos/event2.compressed.jpg"
            alt="Historical church event"
            width={400}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Tầm nhìn tương lai</h2>
          <p className="text-gray-700 leading-relaxed">
            Giáo xứ hướng tới việc mở rộng thêm các dịch vụ, nâng cao đời sống tinh thần, và luôn đồng hành cùng cộng đồng địa phương.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Chúng tôi tin rằng, với sự ủng hộ của cộng đoàn, Giáo xứ Hy Vọng sẽ tiếp tục là ngọn hải đăng của niềm tin và hy vọng.
          </p>
        </div>
      </section>
    </main>
  );
}
