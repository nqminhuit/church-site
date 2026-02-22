'use client'

import ImageModal from '@/components/ImageModal';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchIndexJson, MINIO_BASE } from '../utils/fetchIndex';

export default function Page() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchIndexJson()
      .then(data => setImages(data.images))
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">📸 Hình Ảnh</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => setSelectedImage(image)}>
            <Image
              src={`${MINIO_BASE}/media/${image.src}`}
              alt={image.alt}
              width={300}
              height={0}
              className="object-cover w-full h-48"
              unoptimized
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
      {images.length === 0 && <p className="text-gray-600">Chưa có hình ảnh nào.</p>}

      <ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
