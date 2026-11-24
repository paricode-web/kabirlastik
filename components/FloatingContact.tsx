"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

/*
  Mobile-only floating bar: one main CTA (quote request) + a round call button.
  - Floats above the page (not attached to the edge), matching the header pill.
  - Hides while scrolling down, comes back on scroll up, so it never covers content.
  - Respects the iPhone home-indicator via safe-area-inset-bottom.
*/
export default function FloatingContact() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;

        if (y < 120) setVisible(true);
        else if (delta > 8) setVisible(false);
        else if (delta < -8) setVisible(true);

        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed inset-x-0 bottom-0 z-40 md:hidden
        px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]
        transition-transform duration-300 ease-out motion-reduce:transition-none
        ${visible ? "translate-y-0" : "translate-y-[150%]"}
      `}
    >
      <div className="flex items-center gap-2">
        <Link
          href="/contact"
          className="
            flex h-12 flex-1 items-center justify-center gap-2 rounded-full
            bg-bronze-500 text-sm font-bold text-navy-900
            shadow-[0_10px_30px_-10px_rgb(0_0_0/0.5)]
            transition-colors active:bg-bronze-300
          "
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M9 13h6" />
            <path d="M9 17h6" />
          </svg>
          درخواست استعلام
        </Link>

        <a
          href={site.phones[0].href}
          aria-label="تماس تلفنی"
          className="
            grid h-12 w-12 flex-none place-items-center rounded-full
            border border-white/15 bg-navy-900 text-ivory
            shadow-[0_10px_30px_-10px_rgb(0_0_0/0.5)]
            transition-colors active:bg-navy-800
          "
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
        </a>
      </div>
    </div>
  );
}
