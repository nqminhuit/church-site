'use client'

import { ASSETS_BASE, fetchAnnouncements } from '@/utils/fetchIndex';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SKELETON_MIN_DELAY = 1234;

function AnnouncementSkeleton() {
  return (
    <div className="shadow-md rounded-lg overflow-hidden animate-pulse">
      <div className="md:flex">
        <div className="md:flex-shrink-0 bg-gray-300 md:h-48 md:w-48 w-full h-48" />
        <div className="p-6 w-full space-y-4">
          <div className="h-4 bg-gray-300 rounded w-1/3" />
          <div className="h-6 bg-gray-300 rounded w-2/3" />
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
          <div className="h-10 bg-gray-300 rounded w-32" />
        </div>
      </div>
    </div>
  );
}

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const announcementsPerPage = 7;

  useEffect(() => {
    let isMounted = true;

    async function load() {
      const start = Date.now();

      try {
        const data = await fetchAnnouncements();

        const elapsed = Date.now() - start;
        const remaining = Math.max(SKELETON_MIN_DELAY - elapsed, 0);

        setTimeout(() => {
          if (!isMounted) return;
          setAnnouncements(data);
          setLoading(false);
          // allow next frame before revealing content
          requestAnimationFrame(() => setShowContent(true));
        }, remaining);

      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
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
      <section className="relative space-y-6">
        {/* Skeleton Layer */}
        <div
          className={`transition-opacity duration-500
          ${showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          {Array.from({ length: announcementsPerPage }).map((_, i) => (
            <AnnouncementSkeleton key={i} />
          ))}
        </div>
        {/* Real Content Layer */}
        <div
          className={`absolute inset-0 space-y-6 transition-all duration-500 transform
          ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {currentAnnouncements.map((announcement, idx) => (
            <div
              key={idx}
              className="shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    src={`${ASSETS_BASE}/${announcement.thumbnail}`}
                    alt={announcement.thumbnail}
                    width={0}
                    height={0}
                    className="object-cover md:h-full md:w-48"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-500">
                      {new Date(announcement.date).toLocaleDateString('vi-VN')}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-green-600 font-medium">
                      Thông báo
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-green-800 mb-2">
                    {announcement.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {announcement.summary}
                  </p>
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
        </div>
      </section>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
          >
            &lt;&lt;
          </button>
          <span className="text-gray-700">
            Trang {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
          >
            &gt;&gt;
          </button>
        </div>
      )}
    </main>
  );
}
