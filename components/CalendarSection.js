'use client';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
  { date: "7/7/2020", title: "Khai giảng lớp giáo lý" },
  { date: "14/7/2020", title: "Tĩnh tâm giới trẻ" },
  { date: "20/7/2020", title: "Chầu Thánh Thể" },
];

export default function CalendarSection({date, onChange}) {
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
        calendarType='gregory'
        formatMonthYear={(locale, date) => `${date.toLocaleDateString('en-GB', {
          timeZone: 'Asia/Ho_Chi_Minh',
          month: '2-digit',
          year: 'numeric',
        })}`}
        tileClassName={({ date: tileDate }) => tileDate.toDateString() === date.toDateString()
          ? '!bg-green-500 !text-white !rounded-full'
          : '!rounded-full'}
        className="rounded-md shadow-lg p-1" />
      <ul className="text-sm mt-4 text-gray-700 list-disc list-inside">
        {events.map((e, idx) => (
          <li key={idx}>
            {e.date}: {e.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
