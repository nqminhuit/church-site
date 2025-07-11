export default function ContactInfo() {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Giờ Thánh Lễ</h1>
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
                        <td className="border border-gray-300 px-4 py-2">05:30, 07:00, 17:30</td>
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

            <div className="flex flex-col md:flex-row gap-8 mt-16">
                <section className="bg-white space-y-4 flex-1">
                    <div>
                        <p className="text-xl font-semibold text-green-700">🏠 Địa chỉ</p>
                        <p className="text-gray-700">123 Đường Hy Vọng, Phường Bình An, Quận 2, TP. Thủ Đức</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-green-700">📧 Email</p>
                        <p className="text-gray-700">giaoxuhyvong@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-green-700">📱 Điện thoại</p>
                        <p className="text-gray-700">(+84) 28 1234 5678</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-green-700">⛪ Giờ hành chính</p>
                        <p className="text-gray-700">Thứ Hai – Thứ Bảy: 08:00 – 17:00</p>
                    </div>
                </section>

                <iframe className="flex-1 w-full min-h-[300px] md:h-full rounded-lg shadow"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7867844783646!2d106.62908767606874!3d10.827622489324279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297d190a60b9%3A0x31136e6c8eed5a31!2sHy%20Vong%20Parish%20Church!5e0!3m2!1sen!2s!4v1752238668986!5m2!1sen!2s"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    );
}
