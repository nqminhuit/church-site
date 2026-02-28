"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", hp: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  function validate() {
    const e = {};
    if (!form.name.trim()) {
      e.name = "Vui lòng nhập tên."
    };
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Email không hợp lệ."
    };
    if (!form.message.trim()) {
      e.message = "Vui lòng nhập tin nhắn."
    };
    if (!form.phone.trim()) {
      e.phone = "Vui lòng nhập số điện thoại."
    };
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: false, success: null, error: null });
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length) return;
    // Send
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ loading: false, success: 'Gửi thành công. Cảm ơn bạn!', error: null });
        setForm({ name: '', email: '', phone: '', message: '', hp: '' });
      } else {
        setStatus({ loading: false, success: null, error: data.error || 'Đã có lỗi xảy ra.' });
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Network error' });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg" aria-label="contact form">
      {
        /* Honeypot - is a simple anti-bot trick:
             you add a form field that normal users never see or interact with,
             but naive bots that auto-fill every input will fill it.
             On the server you reject any submission where that hidden field is non-empty.
         */
      }
      <div style={{ display: 'none' }} aria-hidden>
        <label htmlFor="hp">hp</label>
        <input id="hp" name="hp" value={form.hp} onChange={(e) => setForm({ ...form, hp: e.target.value })} />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">Tên *</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">Email (Tùy chọn)</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium">Điện thoại *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.phone && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium">Tin nhắn *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <div className="flex items-center justify-end gap-3">
        <button
          type="submit"
          disabled={status.loading}
          className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
        >
          {status.loading ? 'Đang gửi…' : 'Gửi liên hệ'}
        </button>
        {status.success && <p className="text-green-600">{status.success}</p>}
        {status.error && <p className="text-red-600">{status.error}</p>}
      </div>
    </form>
  );
}
