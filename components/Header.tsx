"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import { nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `transition-colors hover:text-bronze-600 ${
      pathname.startsWith(href) ? "font-bold text-bronze-600" : "text-navy-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-stone bg-ivory/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20 lg:h-24 lg:gap-8 xl:h-28">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="ناوبری اصلی">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">درخواست مشاوره</Button>
        </div>

        <button
          type="button"
          className="p-2 text-navy-900 lg:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l16 16M22 6L6 22" /> : <path d="M4 9h20M4 19h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="container-x flex flex-col gap-1 border-t border-stone pb-5 pt-3 lg:hidden" aria-label="منوی موبایل">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`py-3 ${linkClass(item.href)}`}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-3 w-full">
            درخواست مشاوره
          </Button>
        </nav>
      )}
    </header>
  );
}
