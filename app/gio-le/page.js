export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Giờ Lễ</h1>
      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-green-100 text-green-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Ngày</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Giờ lễ</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Ghi chú</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-800">
          <tr className="font-semibold">
            <td className="border border-gray-300 px-4 py-2">Chúa Nhật</td>
            <td className="border border-gray-300 px-4 py-2">05:30, 07:30, 17:00, 18:30</td>
            <td className="border border-gray-300 px-4 py-2">Thánh Lễ Trọng</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Thứ Hai - Thứ Sáu</td>
            <td className="border border-gray-300 px-4 py-2">05:00, 18:00</td>
            <td className="border border-gray-300 px-4 py-2">Thánh Lễ ngày thường</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2" rowSpan="2">Thứ Bảy</td>
            <td className="border border-gray-300 px-4 py-2">05:00</td>
            <td className="border border-gray-300 px-4 py-2">Thánh Lễ ngày thường</td>
          </tr>
          <tr className="font-semibold">
            <td className="border border-gray-300 px-4 py-2">18:00</td>
            <td className="border border-gray-300 px-4 py-2">Thánh Lễ vọng Chúa Nhật</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
