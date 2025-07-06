export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-green-100 rounded-lg">
        <h1 className="text-4xl font-bold text-green-800">Chào mừng đến với Giáo xứ Hy Vọng</h1>
        <p className="mt-4 text-lg text-gray-700">
          “Hy vọng nơi Chúa là nguồn sức mạnh của chúng ta.” (Is 40,31)
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <a href="/phan-cong-doc-sach" className="block bg-white shadow-md rounded-lg p-6 hover:bg-green-50">
          <h2 className="text-xl font-semibold text-green-800 mb-2">📖 Phân công đọc sách</h2>
          <p className="text-gray-600 text-sm">Lịch phân công cho các lễ sắp tới.</p>
        </a>
        <a href="/gio-le" className="block bg-white shadow-md rounded-lg p-6 hover:bg-green-50">
          <h2 className="text-xl font-semibold text-green-800 mb-2">🕊️ Giờ lễ</h2>
          <p className="text-gray-600 text-sm">Xem lịch giờ lễ trong tuần.</p>
        </a>
        <a href="/lien-he" className="block bg-white shadow-md rounded-lg p-6 hover:bg-green-50">
          <h2 className="text-xl font-semibold text-green-800 mb-2">📞 Liên hệ</h2>
          <p className="text-gray-600 text-sm">Thông tin liên lạc với giáo xứ.</p>
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">📢 Thông báo</h2>
        <p className="text-gray-600">Chưa có thông báo mới.</p>
      </section>
    </div>
  );
}
