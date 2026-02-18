import Image from 'next/image';

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
              <p className="text-gray-600">Giáo xứ Hy Vọng được thành lập bởi Cha Giuse Nguyễn Hưng với 2700 giáo dân, thánh đường đơn sơ bằng vật liệu nhẹ. Trong thời gian từ 1957-1965 trải qua ba đời linh mục coi sóc: Cha Giuse Nguyễn Hưng, Cha Lê Quang Kế, Cha Nguyễn Bá Chấn, với giáo dân phát triển mạnh.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1965</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Di tản và sát nhập</h3>
              <p className="text-gray-600">Đời sống kinh tế giáo dân mỗi ngày khó khăn hơn, vùng đất ao tù nước đọng phèn chua. Từ 1965-1966, nhiều giáo dân di tản đi Long Khánh, Biên Hòa, Cần Thơ và các nơi khác. Giáo xứ ngừng hoạt động và sát nhập vào Giáo xứ Tân Việt.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1975</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Hồi hương</h3>
              <p className="text-gray-600">Năm 1975 dân chúng lại hồi hương một số đi kinh tế mới, cộng đoàn giáo dân còn lại 79 người. Vì thế, thời gian này nhà thờ chỉ còn sinh hoạt vào ngày Chúa nhật.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1979</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Trở thành họ đạo</h3>
              <p className="text-gray-600">Đến cuối năm 1979, giáo xứ chính thức trở thành họ đạo của Giáo xứ Nhân Hòa với 21 gia đình và 131 giáo dân, với ngôi nhà thờ xiêu vẹo dột nát nền trũng sâu. Ban chấp hành giáo họ được thành lập. Trong thời gian này, cha sở Nhân Hòa có nhờ các cha Giuse Trần Văn Phước, Giuse Trịnh Văn Thậm, Giuse Phượng và Phaolô Võ Văn Bộ đến dâng Thánh lễ vào chiều thứ Bảy và ngày Chúa nhật.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1998</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Cha linh hướng</h3>
              <p className="text-gray-600">Ngày 19-12-1998 để ổn định, cha sở Nhân Hòa mời cha cố Tôma Trần Quốc Phú nghỉ hưu làm cha linh hướng cho họ đạo. Nhờ cha thường xuyên ở với họ đạo, các đoàn thể và cộng đoàn mỗi ngày phát triển mạnh mẽ.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2003</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Lễ đặt viên đá và nâng giáo xứ</h3>
              <p className="text-gray-600">Vào năm 2002, cha sở, cha cố cùng toàn thể giáo dân quyết định mua thửa đất tiếp nối phía sau để xây dựng Thánh Đường. Ngày 23-03-2003, Đức cha Phêrô Trần Đình Tứ giáo phận Phú Cường, cha sở Giuse Nguyễn Thiện Toàn cùng cha cố Tôma Trần Quốc Phú và toàn thể cộng đoàn cử hành nghi lễ đặt viên đá đầu tiên xây dựng Thánh Đường. Ngày khánh thành Thánh Đường cũng là ngày giáo họ được nâng lên hàng giáo xứ với tổng số giáo dân khoảng 3000 người.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2008</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Cha Vinh Sơn Trần Quốc Sử quản nhiệm</h3>
              <p className="text-gray-600">Tiếp tục sứ mạng với Cha Vinh Sơn Trần Quốc Sử quản nhiệm từ 2008, cộng đoàn mạnh mẽ với khoảng 900 gia đình, trên 3000 nhân danh (chưa kể 1000 nhập cư).</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2019</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Cha Gioan Baotixita Nguyễn Ngọc Tân quản nhiệm</h3>
              <p className="text-gray-600">Tiếp tục sứ mạng với Cha Gioan Baotixita Nguyễn Ngọc Tân quản nhiệm từ 2019, cộng đoàn mạnh mẽ với các hoạt động phong phú.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2025</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Cha quản nhiệm Giuse Đỗ Quốc Huy</h3>
              <p className="text-gray-600">Tiếp tục sứ mạng với Cha quản nhiệm Giuse Đỗ Quốc Huy từ tháng 9/2025 đến nay, cộng đoàn mạnh mẽ với các hoạt động phong phú. Gần đây, giáo xứ tổ chức các sự kiện như ...</p>
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
          <li><strong>Cha cố Tôma Trần Quốc Phú</strong> (1998 trở đi, cha linh hướng nghỉ hưu).</li>
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
            src="/photos/event2.compressed.jpg"
            alt="Sự kiện lễ đặt viên đá xây dựng nhà thờ năm 2003"
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

      {/* Sources */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Nguồn tham khảo</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Thông tin lịch sử được lấy từ các nguồn uy tín của Giáo hội Công giáo:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li><a href="https://sotayconggiao.com/nhatho/gio-le-nha-tho-hy-vong-q-tan-binh/" className="underline text-green-600">Sổ Tay Công Giáo - Giờ lễ Nhà Thờ Hy Vọng (Q. Tân Bình)</a></li>
          <li><a href="https://tgpsaigon.net/gioi-thieu-giao-xu/hy-vong-913" className="underline text-green-600">Tổng Giáo Phận Sài Gòn - Giới thiệu Giáo xứ Hy Vọng</a></li>
          <li><a href="https://tgpsaigon.net/bai-viet/giao-xu-hy-vong-chua-thanh-than-lai-den-33671" className="underline text-green-600">Tổng Giáo Phận Sài Gòn - Sự kiện lễ Thêm Sức 2024</a></li>
        </ul>
      </section>
    </main>
  );
}
