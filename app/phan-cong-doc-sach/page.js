export default function LectorPage() {
  return (
    <main className="min-h-screen p-6">
      <h2 className="text-3xl font-bold text-green-800 mb-2">📖 Lịch Phân Công Đọc Sách</h2>
      <h3 className="text-xl text-gray-700 mb-6">Tuần Lễ 06/07 – 12/07</h3>

      <div className="overflow-x-auto flex justify-center">
        <table className="w-full max-w-3xl border border-gray-300 text-sm">
          <thead className="bg-green-100 text-green-900">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Thứ & Ngày</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Giờ lễ</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Người đọc</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="border border-gray-300 px-4 py-2 align-top" rowSpan="6">
                <span className="font-semibold">Chúa Nhật</span><br />06/07
              </td>
              <td className="border border-gray-300 px-4 py-2">05:30</td>
              <td className="border border-gray-300 px-4 py-2">Gioakim Nguyễn Công Hoàng</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">05:30</td>
              <td className="border border-gray-300 px-4 py-2">Teresa Nguyễn Cao Hồng Lễ</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">17:00</td>
              <td className="border border-gray-300 px-4 py-2">Giuse Nguyễn Ngọc Đông</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">17:00</td>
              <td className="border border-gray-300 px-4 py-2">Maria Nguyễn Thị Kim Sắc</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">18:30</td>
              <td className="border border-gray-300 px-4 py-2">Savio Dương Ngọc Thủ</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">18:30</td>
              <td className="border border-gray-300 px-4 py-2">Anna Nguyễn Ngọc Phi Khanh</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 align-top" rowSpan="2">
                <span className="font-semibold">Thứ Hai</span><br />07/07
              </td>
              <td className="border border-gray-300 px-4 py-2">05:00</td>
              <td className="border border-gray-300 px-4 py-2">Teresa Trần Khánh Vy</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">18:00</td>
              <td className="border border-gray-300 px-4 py-2">Maria Hoàng Thị Kim Oanh</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 align-top" rowSpan="2">
                <span className="font-semibold">Thứ Ba</span><br />08/07
              </td>
              <td className="border border-gray-300 px-4 py-2">05:00</td>
              <td className="border border-gray-300 px-4 py-2">Maria Vũ Mộng Thùy My</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">18:00</td>
              <td className="border border-gray-300 px-4 py-2">Maria Trương Thị Hồng</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 align-top" rowSpan="2">
                <span className="font-semibold">Thứ Tư</span><br />09/07
              </td>
              <td className="border border-gray-300 px-4 py-2">05:00</td>
              <td className="border border-gray-300 px-4 py-2">Gioan Bosco Trần Thủy</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">18:00</td>
              <td className="border border-gray-300 px-4 py-2">Anna Nguyễn Thị Hiền</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 align-top" rowSpan="2">
                <span className="font-semibold">Thứ Năm</span><br />10/07
              </td>
              <td className="border border-gray-300 px-4 py-2">05:00</td>
              <td className="border border-gray-300 px-4 py-2">Simon Nguyễn Đức Dũng</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">18:00</td>
              <td className="border border-gray-300 px-4 py-2">Maria Lê Ngọc Diễm</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 align-top" rowSpan="2">
                <span className="font-semibold">Thứ Sáu</span><br />11/07
              </td>
              <td className="border border-gray-300 px-4 py-2">05:00</td>
              <td className="border border-gray-300 px-4 py-2">Gioan Vũ Trọng Hiếu</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">18:00</td>
              <td className="border border-gray-300 px-4 py-2">Maria Bùi Thị Hoa</td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-2 align-top" rowSpan="3">
                <span className="font-semibold">Thứ Bảy</span><br />12/07
              </td>
              <td className="border border-gray-300 px-4 py-2">05:00</td>
              <td className="border border-gray-300 px-4 py-2">Maria Lê Thị Thúy Oanh</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 align-top" rowSpan="2">18:00</td>
              <td className="border border-gray-300 px-4 py-2">Phêrô Quốc Linh</td>
              <td />
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Maria Nguyễn Thị Huệ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
