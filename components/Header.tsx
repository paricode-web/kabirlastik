"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import { nav, site } from "@/lib/site";

/* Put the PDF in /public (e.g. public/catalog.pdf) */
const catalogHref = "/catalog.pdf";

const downloadIcon = (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 3v10M6 9.5l4 4 4-4M4 17h12" />
  </svg>
);
const phoneIcon = (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5.5 3h2.2l1.4 3.6-1.7 1.2a9 9 0 004.8 4.8l1.2-1.7L17 12.3v2.2A2.5 2.5 0 0114.5 17 11.5 11.5 0 013 5.5 2.5 2.5 0 015.5 3z" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname.startsWith(href);

  /* copper underline under the active link (and a short one on hover) */
  const linkClass = (href: string) =>
    `relative px-3.5 py-2 text-sm transition-colors after:absolute after:inset-x-3.5 after:bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-[#D49A62] after:transition-transform after:duration-300 ${
      isActive(href)
        ? "font-bold text-ivory after:scale-x-100"
        : "text-ivory/80 after:scale-x-0 hover:text-ivory hover:after:scale-x-50"
    }`;

  return (
    /* h-0: the header takes no space in the page flow, so nothing (no white strip)
       shows above it; the pill floats over the content and stays sticky */
    <header className="sticky top-0 z-50 h-0">
      <div
        className={`absolute inset-x-0 top-0 px-3 transition-[padding] duration-300 sm:px-4 ${
          scrolled ? "pt-2" : "pt-3 sm:pt-4"
        }`}
      >
        <div className="relative mx-auto max-w-5xl">
          {/* floating dark-glass pill: shrinks and gets a stronger blur on scroll */}
          <div
            className={`relative flex items-center justify-between gap-3 rounded-full border border-white/15 ps-5 pe-2.5 backdrop-saturate-150 transition-all duration-300 ${
              scrolled
                ? "h-12 bg-navy-900/80 backdrop-blur-2xl shadow-[0_10px_40px_-14px_rgb(0_0_0/0.55),inset_0_1px_0_0_rgb(255_255_255/0.12)]"
                : "h-16 bg-navy-900/45 backdrop-blur-xl shadow-[0_10px_40px_-14px_rgb(0_0_0/0.45),inset_0_1px_0_0_rgb(255_255_255/0.12)]"
            }`}
          >
            <div
              className={`origin-right transition-transform duration-300 ${
                scrolled ? "scale-[0.84]" : "scale-100"
              }`}
            >
              <Logo tone="dark" />
            </div>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="ناوبری اصلی">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={site.phones[0].href}
                dir="ltr"
                className="hidden items-center gap-2 px-2 text-sm text-ivory/85 transition-colors hover:text-bronze-300 xl:flex"
              >
                {phoneIcon}
                {site.phones[0].label}
              </a>
              <a
                href={catalogHref}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-ivory transition-colors hover:border-bronze-300 hover:text-bronze-300"
              >
                {downloadIcon}
                کاتالوگ
              </a>
              <Button href="/contact" variant="bronze" className="!px-5 !py-2 !text-sm">
                درخواست مشاوره
              </Button>
            </div>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full text-ivory transition-colors hover:bg-white/10 lg:hidden"
              aria-label={open ? "بستن منو" : "باز کردن منو"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M6 6l16 16M22 6L6 22" /> : <path d="M4 9h20M4 19h14" />}
              </svg>
            </button>
          </div>

          {/* mobile menu: floating dark-glass card under the pill */}
          {open && (
            <nav
              className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-3xl border border-white/15 bg-navy-900/85 p-3 shadow-[0_20px_50px_-18px_rgb(0_0_0/0.5)] backdrop-blur-xl backdrop-saturate-150 lg:hidden"
              aria-label="منوی موبایل"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base ${
                    isActive(item.href)
                      ? "bg-white/10 font-bold text-bronze-300"
                      : "text-ivory hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.phones[0].href}
                dir="ltr"
                className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-ivory hover:bg-white/10"
              >
                {phoneIcon}
                {site.phones[0].label}
              </a>
              <a
                href={catalogHref}
                download
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-4 py-3 text-ivory hover:border-bronze-300 hover:text-bronze-300"
              >
                {downloadIcon}
                دانلود کاتالوگ
              </a>
              <Button href="/contact" variant="bronze" className="mt-2 w-full">
                درخواست مشاوره
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}