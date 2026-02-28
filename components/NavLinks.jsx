'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ items, onClick, mobile = false }) {
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
            // Mobile: parent label + inline children (styled)
            return (
              <div key={idx} className='mt-2'>
                <div className={`px-2 py-2 font-medium ${activeParent ? 'text-green-700 bg-green-50 rounded-md' : 'text-gray-700'}`}>
                  {it.label}
                </div>
                <div className="pl-2 mt-1">
                  {it.children.map((c, i) => {
                    const active = mounted ? pathname === c.href : false;
                    return (
                      <Link
                        key={i}
                        href={c.href}
                        className={`block px-4 py-3 rounded-md transition-colors ${active ? 'font-semibold text-green-800 bg-green-100 border-l-4 border-green-700' : 'text-gray-800 hover:bg-green-50'}`}
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

          // Desktop: parent button with nicer pill style, dropdown children in white card
          return (
            <div key={idx} className='relative group'>
              <button
                className={`px-3 py-3 rounded-md transition-colors cursor-pointer ${activeParent ? 'bg-white/90 text-green-900' : 'text-white hover:bg-white/20'}`}
                aria-haspopup="true"
              >
                {it.label}
              </button>

              <div className="absolute left-0 top-full hidden group-hover:block hover:block bg-white shadow-lg rounded-md border z-50 min-w-[12rem]">
                {it.children.map((c, i) => {
                  const active = mounted ? pathname === c.href : false;
                  return (
                    <Link
                      key={i}
                      href={c.href}
                      className={`block px-3 py-3 text-gray-800 hover:bg-green-100 hover:text-green-800 rounded-md transition ${active ? 'font-semibold text-green-800' : ''}`}
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
              className={`block px-4 py-3 rounded-md transition-colors ${active ? 'font-semibold text-green-800 bg-green-100 border-l-4 border-green-700' : 'text-gray-800 hover:bg-green-50'}`}
              onClick={onClick}
            >
              {it.label}
            </Link>
          );
        }

        // Desktop single link style (no underline)
        return (
          <Link
            key={idx}
            href={it.href}
            className={`px-3 py-3 rounded-md transition-colors ${active ? 'bg-white/90 text-green-900' : 'text-white hover:bg-white/20'}`}
            onClick={onClick}
          >
            {it.label}
          </Link>
        );
      })}
    </>
  );
}
