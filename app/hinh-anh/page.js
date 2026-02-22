'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchIndexJson } from '../utils/fetchIndex';

export default function Page() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const MINIO_BASE = 'https://s3-api.prud.uk/web/church/hyvong';

  useEffect(() => {
    fetchIndexJson()
      .then(data => {
        // Assume data has "images": array of {src, alt, date}
        setImages(data.images ? data.images.sort((a, b) => new Date(b.date) - new Date(a.date)) : []);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">📸 Hình Ảnh</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => setSelectedImage(image)}>
            <Image
              src={`${MINIO_BASE}/media/${image.src}`}
              alt={image.alt}
              width={300}
              height={200}
              className="object-cover w-full h-48"
              unoptimized
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
      {images.length === 0 && <p className="text-gray-600">Chưa có hình ảnh nào.</p>}

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`${MINIO_BASE}/media/${selectedImage.src}`}
              alt={selectedImage.alt}
              className="rounded-lg"
              width={1750}
              height={0}
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
