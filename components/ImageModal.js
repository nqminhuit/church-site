'use client'

import { MEDIA_BASE } from '@/utils/fetchIndex';
import Image from 'next/image';

export default function ImageModal({ selectedImage, onClose }) {
  if (!selectedImage) {
    return null
  };
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative p-4" onClick={(e) => e.stopPropagation()}>
        <Image
          src={`${MEDIA_BASE}/${selectedImage.src}`}
          alt={selectedImage.alt}
          className="rounded-lg"
          width={1750}
          height={0}
          priority
        />
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}
