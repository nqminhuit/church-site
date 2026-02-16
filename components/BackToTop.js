'use client'

export default function BackToTop() {
  return (
    <div className="text-center mt-4">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="underline hover:text-green-200 cursor-pointer">Quay lại đầu trang
      </button>
    </div>
  );
}
