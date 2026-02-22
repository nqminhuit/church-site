'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchIndexJson, MINIO_BASE } from '../utils/fetchIndex';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 7;

  useEffect(() => {
    fetchIndexJson()
      .then(data => {
        setAnnouncements(data.announcements
          ? data.announcements.sort((a, b) => new Date(b.date) - new Date(a.date))
          : []);
      })
      .catch(console.error);
  }, []);

  const indexOfLast = currentPage * announcementsPerPage;
  const indexOfFirst = indexOfLast - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(announcements.length / announcementsPerPage);

  return (
    <main className="min-h-screen p-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-b from-green-100 to-green-200 rounded-lg mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Thông Báo</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Cập nhật tin tức mới nhất và thông báo quan trọng từ Giáo xứ Hy Vọng.
        </p>
      </section>

      {/* Announcements List */}
      <section className="space-y-6">
        {currentAnnouncements.map((announcement, idx) => (
          <div key={idx} className="shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src={`${MINIO_BASE}/media/${announcement.thumbnail || announcement.image}`}
                  alt={announcement.title}
                  width={0}
                  height={0}
                  className="object-cover md:h-full md:w-48"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-500">{new Date(announcement.date).toLocaleDateString('vi-VN')}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-green-600 font-medium">Thông báo</span>
                </div>
                <h2 className="text-xl font-bold text-green-800 mb-2">{announcement.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{announcement.summary}</p>
                <Link
                  href={`/thong-bao/${announcement.slug}`}
                  className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                >
                  Xem chi tiết »
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </main>
  );
}
