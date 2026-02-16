'use client'

import { useState } from 'react';

export default function ContactInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Cảm ơn ${name}! Lời nhắn của bạn đã được gửi. Chúng tôi sẽ liên hệ sớm.`);
        // Here you can add logic to send email or store in database
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Liên hệ</h1>

            <div className="flex flex-col md:flex-row gap-8 mt-16">
                <section className="bg-white space-y-4 flex-1">
                    <div>
                        <p className="text-xl font-semibold text-green-700">🏠 Địa chỉ</p>
                        <p className="text-gray-700">123 Đường Hy Vọng, Phường Bình An, Quận 2, TP. Thủ Đức</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-green-700">📧 Email</p>
                        <a href="mailto:giaoxuhyvong@gmail.com" className="text-gray-700 hover:text-green-800 underline">giaoxuhyvong@gmail.com</a>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-green-700">📱 Điện thoại</p>
                        <a href="tel:+842812345678" className="text-gray-700 hover:text-green-800 underline">(+84) 28 1234 5678</a>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-green-700">⛪ Giờ hành chính</p>
                        <p className="text-gray-700">Thứ Hai – Thứ Bảy: 08:00 – 17:00</p>
                    </div>
                </section>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md flex-1 space-y-4">
                    <h2 className="text-xl font-semibold text-green-800">Gửi tin nhắn</h2>
                    <input
                        type="text"
                        placeholder="Tên của bạn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email của bạn"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        placeholder="Lời nhắn"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button type="submit" className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
                        Gửi
                    </button>
                </form>
            </div>

            <iframe className="w-full min-h-[300px] md:h-full rounded-lg shadow mt-8"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7867844783646!2d106.62908767606874!3d10.827622489324279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297d190a60b9%3A0x31136e6c8eed5a31!2sHy%20Vong%20Parish%20Church!5e0!3m2!1sen!2s!4v1752238668986!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ vị trí Giáo xứ Hy Vọng"
            />
        </div>
    );
}
