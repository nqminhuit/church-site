'use client';

import { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import { navItems } from './nav-items';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // avoid DOM differences between server and client by only rendering the
  // panel after mount. Server and initial client render will both omit it.
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        className="md:hidden text-white text-2xl p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/60"
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? 'Đóng menu' : 'Mở menu'}
        onClick={() => setOpen(v => !v)}
      >
        {open ? '✕' : '☰'}
      </button>

      {mounted && (
        <div className={`fixed inset-0 z-50 ${open ? '' : 'hidden'}`} aria-hidden={!open}>
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <nav
            id="mobile-menu"
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-4 overflow-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-4">
              <span className="text-lg font-semibold text-gray-800">⛪ Giáo xứ Hy Vọng</span>
            </div>

            <NavLinks items={navItems} onClick={() => setOpen(false)} mobile />
          </nav>
        </div>
      )}
    </>
  );
}
