'use client'

import ImageModal from '@/components/ImageModal';
import { fetchPhotos, MEDIA_BASE } from '@/utils/fetchIndex';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchPhotos().then(setImages).catch(console.error);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-green-800 mb-8">📸 Hình Ảnh</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, idx) => {
          const key = image.src
          return (
            <div
              key={key}
              className="relative aspect-[16/9] overflow-hidden rounded-lg
                         hover:shadow-lg hover:scale-110
                         transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse skeleton" />

              <Image
                src={`${MEDIA_BASE}/${image.src}`}
                alt={image.alt}
                fill
                className='object-cover transition-opacity duration-1000 opacity-0'
                priority={idx < 4}
                onLoad={(e) => {
                  e.currentTarget.style.opacity = '1'
                  // remove skeleton
                  const skeleton = e.currentTarget.parentElement.querySelector('.skeleton')
                  if (skeleton) {
                    skeleton.remove();
                  }
                }}
              />
            </div>
          )
        })}
      </div>
      {images.length === 0 && <p className="text-gray-600">Chưa có hình ảnh nào.</p>}

      <ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}
