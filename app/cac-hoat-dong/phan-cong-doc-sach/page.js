import Link from 'next/link';

export default function LectorPage() {
  return (
    <main className="min-h-screen p-6 max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link href="/" className="text-green-700 hover:underline">Trang chủ</Link>
        <span className="mx-2 text-gray-500">&gt;</span>
        <Link href="/cac-hoat-dong" className="text-green-700 hover:underline">Các hoạt động</Link>
        <span className="mx-2 text-gray-500">&gt;</span>
        <span className="text-gray-800">Phân công đọc sách</span>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-8 bg-gradient-to-r from-green-50 to-green-100 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">📖 Lịch Phân Công Đọc Sách</h1>
        <p className="text-lg text-gray-700">Tuần Lễ 06/07 – 12/07</p>
      </section>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse border border-gray-300 text-sm bg-white">
          <thead className="bg-green-100 text-green-900">
            <tr>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Thứ & Ngày</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Giờ lễ</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Người đọc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 align-top font-medium" rowSpan="6">
                <span className="font-semibold">Chúa Nhật</span><br />06/07
              </td>
              <td className="border border-gray-300 px-4 py-3">05:30</td>
              <td className="border border-gray-300 px-4 py-3">Gioakim Nguyễn Công Hoàng</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">05:30</td>
              <td className="border border-gray-300 px-4 py-3">Teresa Nguyễn Cao Hồng Lễ</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">17:00</td>
              <td className="border border-gray-300 px-4 py-3">Giuse Nguyễn Ngọc Đông</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">17:00</td>
              <td className="border border-gray-300 px-4 py-3">Maria Nguyễn Thị Kim Sắc</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">18:30</td>
              <td className="border border-gray-300 px-4 py-3">Savio Dương Ngọc Thủ</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">18:30</td>
              <td className="border border-gray-300 px-4 py-3">Anna Nguyễn Ngọc Phi Khanh</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 align-top font-medium" rowSpan="2">
                <span className="font-semibold">Thứ Hai</span><br />07/07
              </td>
              <td className="border border-gray-300 px-4 py-3">05:00</td>
              <td className="border border-gray-300 px-4 py-3">Teresa Trần Khánh Vy</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">18:00</td>
              <td className="border border-gray-300 px-4 py-3">Maria Hoàng Thị Kim Oanh</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 align-top font-medium" rowSpan="2">
                <span className="font-semibold">Thứ Ba</span><br />08/07
              </td>
              <td className="border border-gray-300 px-4 py-3">05:00</td>
              <td className="border border-gray-300 px-4 py-3">Maria Vũ Mộng Thùy My</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">18:00</td>
              <td className="border border-gray-300 px-4 py-3">Maria Trương Thị Hồng</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 align-top font-medium" rowSpan="2">
                <span className="font-semibold">Thứ Tư</span><br />09/07
              </td>
              <td className="border border-gray-300 px-4 py-3">05:00</td>
              <td className="border border-gray-300 px-4 py-3">Gioan Bosco Trần Thủy</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">18:00</td>
              <td className="border border-gray-300 px-4 py-3">Anna Nguyễn Thị Hiền</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 align-top font-medium" rowSpan="2">
                <span className="font-semibold">Thứ Năm</span><br />10/07
              </td>
              <td className="border border-gray-300 px-4 py-3">05:00</td>
              <td className="border border-gray-300 px-4 py-3">Simon Nguyễn Đức Dũng</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">18:00</td>
              <td className="border border-gray-300 px-4 py-3">Maria Lê Ngọc Diễm</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 align-top font-medium" rowSpan="2">
                <span className="font-semibold">Thứ Sáu</span><br />11/07
              </td>
              <td className="border border-gray-300 px-4 py-3">05:00</td>
              <td className="border border-gray-300 px-4 py-3">Gioan Vũ Trọng Hiếu</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">18:00</td>
              <td className="border border-gray-300 px-4 py-3">Maria Bùi Thị Hoa</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 align-top font-medium" rowSpan="3">
                <span className="font-semibold">Thứ Bảy</span><br />12/07
              </td>
              <td className="border border-gray-300 px-4 py-3">05:00</td>
              <td className="border border-gray-300 px-4 py-3">Maria Lê Thị Thúy Oanh</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 align-top" rowSpan="2">18:00</td>
              <td className="border border-gray-300 px-4 py-3">Phêrô Quốc Linh</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Maria Nguyễn Thị Huệ</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notes */}
      <section className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <p className="text-gray-700">
          Lịch phân công có thể thay đổi. Vui lòng liên hệ với cha xứ hoặc ban mục vụ để cập nhật thông tin mới nhất.
        </p>
      </section>
    </main>
  );
}
