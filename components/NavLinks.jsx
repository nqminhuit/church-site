'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ items, className = '', onClick, mobile = false }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {items.map((it, idx) => {
        const isActive = mounted ? pathname === it.href : false;
        const childActive = mounted && it.children ? it.children.some(c => pathname === c.href) : false;
        const activeParent = isActive || childActive;

        if (it.children) {
          if (mobile) {
            // On mobile: render children inline (no hover dropdown)
            return (
              <div key={idx} className={`mt-2 ${className}`}>
                <div className={`px-2 py-2 font-medium ${activeParent ? 'text-green-800 font-semibold' : 'text-gray-700'}`}>{it.label}</div>
                <div className="pl-2">
                  {it.children.map((c, i) => {
                    const active = mounted ? pathname === c.href : false;
                    return (
                      <Link
                        key={i}
                        href={c.href}
                        className={`block px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-800 rounded-md transition ${active ? 'font-semibold text-green-800' : ''}`}
                        onClick={onClick}
                      >
                        {c.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          // Desktop: dropdown on hover
          return (
            <div key={idx} className={`relative group pb-2 ${className}`}>
              <button className={`hover:underline cursor-pointer ${activeParent ? 'font-semibold text-green-100' : ''}`}>{it.label}</button>
              <div className="absolute left-0 top-full hidden group-hover:block hover:block bg-white shadow-lg rounded-md border z-50 min-w-[200px]">
                {it.children.map((c, i) => {
                  const active = mounted ? pathname === c.href : false;
                  return (
                    <Link
                      key={i}
                      href={c.href}
                      className={`block px-4 py-3 text-gray-800 hover:bg-green-100 hover:text-green-800 rounded-md transition ${active ? 'font-semibold text-green-800' : ''}`}
                      onClick={onClick}
                    >
                      {c.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        }

        const active = mounted ? pathname === it.href : false;
        if (mobile) {
          return (
            <Link
              key={idx}
              href={it.href}
              className={`block px-4 py-3 text-gray-800 hover:bg-green-50 rounded-md transition ${active ? 'font-semibold text-green-800' : ''}`}
              onClick={onClick}
            >
              {it.label}
            </Link>
          );
        }

        return (
          <Link
            key={idx}
            href={it.href}
            className={`hover:underline ${className} ${active ? 'font-semibold text-green-100' : ''}`}
            onClick={onClick}
          >
            {it.label}
          </Link>
        );
      })}
    </>
  );
}
