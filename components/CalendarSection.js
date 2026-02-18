'use client';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
  { date: new Date(new Date().getFullYear(), 6, 7), title: "Khai giảng lớp giáo lý" },
  { date: new Date(new Date().getFullYear(), 6, 14), title: "Tĩnh tâm giới trẻ" },
  { date: new Date(new Date().getFullYear(), 6, 20), title: "Chầu Thánh Thể" },
];

export default function CalendarSection({date, onChange}) {
  return (
    <div>
      <Calendar
        locale="en-US"
        onChange={onChange}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            const isEvent = events.some(
              (event) => event.date.toDateString() === date.toDateString()
            );
            const dayOfWeek = date.getDay();
            if (isEvent) return 'event-date bg-red-200 text-red-800';
            if (dayOfWeek === 0) return 'bg-red-200 text-red-900 font-bold';
            if (dayOfWeek === 6) return 'font-bold';
            return null;
          }
        }}
        tileContent={() => null}
        className="rounded-lg shadow-lg p-4 border-2 border-green-200 bg-white"
        showNeighboringMonth={false}
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
