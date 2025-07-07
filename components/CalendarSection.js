'use client';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const events = [
  { date: new Date(2025, 6, 7), title: "Khai giảng lớp giáo lý" },
  { date: new Date(2025, 6, 14), title: "Tĩnh tâm giới trẻ" },
  { date: new Date(2025, 6, 20), title: "Chầu Thánh Thể" },
];

export default function CalendarSection({date, onChange}) {
  return (
    <div>
      <Calendar
        locale="vi-VN"
        onChange={onChange}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            const isEvent = events.some(
              (event) => event.date.toDateString() === date.toDateString()
            );
            return isEvent ? 'event-date' : null;
          }
        }}
        className="rounded-lg shadow-md p-2"
      />

      <ul className="text-sm mt-4 text-gray-700 list-disc list-inside">
        {events.map((e, idx) => (
          <li key={idx}>
            {e.date.toLocaleDateString('vi-VN')}: {e.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
