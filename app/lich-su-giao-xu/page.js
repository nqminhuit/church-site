import Image from 'next/image';
import { ASSETS_BASE } from '@/utils/fetchIndex';

export default function HistoryPage() {
  return (
    <main className="min-h-screen p-6 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-b from-green-100 to-green-200 rounded-lg mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">📜 Lịch sử Giáo xứ Hy Vọng</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Khám phá hành trình hình thành và phát triển của Giáo xứ từ năm 1957 đến nay, vượt qua thách thức để trở thành cộng đoàn vững mạnh.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          Giáo xứ Hy Vọng được thành lập vào năm 1957 bởi Cha Giuse Nguyễn Hưng với 2700 giáo dân trong Giáo Hạt Tân Sơn Nhì, ban đầu với một ngôi thánh đường đơn sơ bằng vật liệu nhẹ.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 text-lg">
          Sau giai đoạn khó khăn do chiến tranh và di tản (1965-1975), giáo xứ trở thành họ đạo của Giáo xứ Nhân Hòa từ năm 1979. Nhờ sự hướng dẫn của các linh mục và sự phát triển của cộng đoàn, năm 2003 lễ đặt viên đá đầu tiên cho nhà thờ mới và giáo họ được nâng lên hàng giáo xứ với khoảng 3000 giáo dân.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 text-lg">
          Nhờ ơn Chúa và sự đồng hành của các cha sở cùng cộng đoàn, giáo xứ đã xây dựng được nhà thờ khang trang và phát triển các chương trình giáo lý, bác ái phục vụ cộng đồng.
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Dấu mốc phát triển</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1957</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Thành lập Giáo xứ ban đầu</h3>
              <p className="text-gray-600">Giáo xứ Hy Vọng được Cha Giuse Nguyễn Hưng thành lập với khoảng 2700 giáo dân, ngôi thánh đường ban đầu còn đơn sơ, làm bằng vật liệu nhẹ. Từ năm 1957 đến 1965, giáo xứ trải qua ba đời linh mục coi sóc: Cha Giuse Nguyễn Hưng, Cha Lê Quang Kế và Cha Nguyễn Bá Chấn; đời sống đức tin của giáo dân thời kỳ này phát triển mạnh.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1965</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Di tản và sát nhập</h3>
              <p className="text-gray-600">Điều kiện kinh tế ngày càng khó khăn, vùng đất nhiễm phèn, ao tù nước đọng khiến nhiều giáo dân phải di dời. Trong giai đoạn 1965–1966, giáo dân chuyển đến Long Khánh, Biên Hòa, Cần Thơ và nhiều nơi khác. Sinh hoạt giáo xứ tạm ngưng và được sáp nhập vào Giáo xứ Tân Việt.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1975</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Hồi hương</h3>
              <p className="text-gray-600">Sau năm 1975, một số gia đình trở về hoặc đi lập nghiệp tại các vùng kinh tế mới; cộng đoàn còn lại 79 người. Từ đó, sinh hoạt phụng vụ chỉ duy trì vào các ngày Chúa nhật.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1979</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Trở thành họ đạo</h3>
              <p className="text-gray-600">Cuối năm 1979, cộng đoàn chính thức trở thành họ đạo trực thuộc Giáo xứ Nhân Hòa với 21 gia đình, 131 giáo dân. Ngôi nhà thờ khi ấy xuống cấp, nền thấp và dột nát. Ban chấp hành giáo họ được thành lập; các cha Giuse Trần Văn Phước, Giuse Trịnh Văn Thậm, Giuse Phượng và Phaolô Võ Văn Bộ được mời đến dâng Thánh lễ vào chiều thứ Bảy và Chúa nhật.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1998</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Cha linh hướng đồng hành</h3>
              <p className="text-gray-600">Ngày 19-12-1998, nhằm ổn định đời sống mục vụ, cha sở Nhân Hòa mời cha cố Tôma Trần Quốc Phú nghỉ hưu về làm cha linh hướng. Sự hiện diện thường xuyên của ngài góp phần củng cố các đoàn thể và thúc đẩy sinh hoạt cộng đoàn phát triển.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2003</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Đặt viên đá xây dựng và nâng lên giáo xứ</h3>
              <p className="text-gray-600">Năm 2002, cha sở, cha cố cùng giáo dân quyết định mua thêm đất phía sau để xây dựng thánh đường mới. Ngày 23-03-2003, Đức cha Phêrô Trần Đình Tứ (Giáo phận Phú Cường) chủ sự nghi thức đặt viên đá đầu tiên, cùng cha sở Giuse Nguyễn Thiện Toàn, cha cố Tôma Trần Quốc Phú và toàn thể cộng đoàn. Khi thánh đường được khánh thành, giáo họ chính thức được nâng lên hàng giáo xứ với khoảng 3000 giáo dân.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2008</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Thời kỳ cha Vinh Sơn Trần Quốc Sử quản nhiệm</h3>
              <p className="text-gray-600">Từ năm 2008, dưới sự hướng dẫn của Cha Vinh Sơn Trần Quốc Sử, giáo xứ tiếp tục được củng cố và mở rộng. Cộng đoàn đạt khoảng 900 gia đình với hơn 3000 giáo dân, chưa kể số giáo dân nhập cư.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2019</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Cha Gioan Baotixita Nguyễn Ngọc Tân quản nhiệm</h3>
              <p className="text-gray-600">Từ năm 2019, Cha Gioan Baotixita Nguyễn Ngọc Tân đảm nhận trách nhiệm mục vụ, thúc đẩy nhiều hoạt động sinh hoạt và phục vụ, góp phần làm đời sống giáo xứ thêm phong phú.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2025</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Cha quản nhiệm Giuse Đỗ Quốc Huy</h3>
              <p className="text-gray-600">Từ tháng 9 năm 2025, Cha Giuse Đỗ Quốc Huy tiếp nhận sứ vụ quản nhiệm. Giáo xứ tiếp tục duy trì các hoạt động mục vụ, bác ái và sinh hoạt đoàn thể; gần đây còn tổ chức nhiều sự kiện cộng đoàn, góp phần xây dựng đời sống đức tin ngày càng bền vững.</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Managing Priests */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Danh sách tất cả Cha Sở và Linh Mục Quản Lý Giáo xứ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Giáo xứ Hy Vọng đã được chăm sóc bởi nhiều linh mục tận tâm qua các thời kỳ. Dưới đây là danh sách các cha sở và linh mục quản lý dựa trên các dấu mốc lịch sử và thông tin có sẵn từ nguồn uy tín:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Cha Giuse Nguyễn Hưng</strong> (1957-1965): Người sáng lập, cha sở đầu tiên.</li>
          <li><strong>Cha Lê Quang Kế</strong> (1957-1965): Cha sở.</li>
          <li><strong>Cha Nguyễn Bá Chấn</strong> (1957-1965): Cha sở.</li>
          <li><strong>Cha Giuse Trần Văn Phước</strong> (giai đoạn họ đạo từ 1979, hỗ trợ từ Giáo xứ Nhân Hòa).</li>
          <li><strong>Cha Giuse Trịnh Văn Thậm</strong> (hỗ trợ từ Giáo xứ Nhân Hòa).</li>
          <li><strong>Cha Giuse Phượng</strong> (hỗ trợ từ Giáo xứ Nhân Hòa).</li>
          <li><strong>Cha Phaolô Võ Văn Bộ</strong> (hỗ trợ từ Giáo xứ Nhân Hòa).</li>
          <li><strong>Cha Tôma Trần Quốc Phú</strong> (1998 trở đi, cha linh hướng nghỉ hưu).</li>
          <li><strong>Cha Giuse Nguyễn Thiện Toàn</strong> (2003, cha sở trong lễ đặt viên đá).</li>
          <li><strong>Cha Vinh Sơn Trần Quốc Sử</strong> (2008, quản nhiệm).</li>
          <li><strong>Cha Gioan Baotixita Nguyễn Ngọc Tân</strong> (2019, quản nhiệm).</li>
          <li><strong>Cha Giuse Đỗ Quốc Huy</strong> (2025 đến nay, quản nhiệm hiện tại).</li>
        </ul>
      </section>

      {/* Images and Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image
            src={`${ASSETS_BASE}/historic.jpg`}
            alt="history image"
            width={400}
            height={0}
            className="rounded-lg shadow-md object-cover"
            priority
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
