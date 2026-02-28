"use client";

import { useEffect, useState } from "react";

const testValues = ["test", "staging"];
const sessionKey = "test-banner-dismissed";

export default function TestServerBanner({ message }) {
  const env = process.env.NEXT_PUBLIC_DEPLOY_ENV || "";
  const defaultMessage = message ||
    "Đây là trang web kiểm thử, thông tin không chính thức từ Giáo Xứ Hy Vọng.";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    try {
      if (sessionStorage.getItem(sessionKey) === "1") {
        return
      }
    } catch (e) {
      console.error(e)
    }
    env && testValues.includes(env.toLowerCase()) && setVisible(true);
  }, [sessionKey, env, testValues]);

  function dismiss() {
    try {
      sessionStorage.setItem(sessionKey, "1");
    } catch (e) {
      console.error(e)
    }
    setVisible(false);
  }

  if (!visible) {
    return null
  };

  return (
    <div
      role="region"
      aria-label="Test server banner"
      className="fixed inset-x-0 top-0 z-50 bg-yellow-500 text-black shadow"
    >
      <div className="max-w-2xl mx-auto my-3 flex">
        <div className="flex-1">
          <span>{defaultMessage}</span>
        </div>

        <div className="flex">
          <button
            onClick={dismiss}
            className="ml-2 bg-black text-white rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black cursor-pointer"
            aria-label="Đóng thông báo môi trường kiểm thử"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
