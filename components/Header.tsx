
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import { nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [logoVariant, setLogoVariant] = useState<"light" | "dark">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-header-theme]")
    );

    if (!sections.length) return;

    const updateLogo = () => {
      const threshold = 85;
      let currentTheme: "light" | "dark" = "dark";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= threshold && rect.bottom > threshold) {
          currentTheme =
            section.dataset.headerTheme === "light" ? "light" : "dark";
          break;
        }

        if (rect.top > threshold) break;
      }

      setLogoVariant(currentTheme);
    };

    updateLogo();

    window.addEventListener("scroll", updateLogo, { passive: true });
    window.addEventListener("resize", updateLogo);

    return () => {
      window.removeEventListener("scroll", updateLogo);
      window.removeEventListener("resize", updateLogo);
    };
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `rounded-full px-3.5 py-1.5 text-sm transition-colors ${
      isActive(href)
        ? "bg-navy-900/[0.06] font-bold text-bronze-600"
        : "text-navy-900/80 hover:bg-navy-900/[0.04] hover:text-navy-900"
    }`;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative mx-auto max-w-5xl">
        {/* Main navigation */}
        <div
          className="
            relative flex h-14 items-center justify-between gap-3
            rounded-lg border border-white/50
            bg-ivory/70
            supports-[backdrop-filter]:bg-ivory/45
            ps-4 pe-2 sm:ps-5
            backdrop-blur-xl backdrop-saturate-150
            shadow-[0_10px_40px_-14px_rgb(15_36_56/0.25),inset_0_1px_0_0_rgb(255_255_255/0.7)]
          "
        >
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Logo
              variant={logoVariant}
              className="h-11 w-auto sm:h-12"
            />
          </div>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="ناوبری اصلی"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/contact" className="!px-5 !py-2 !text-sm">
              درخواست مشاوره
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-navy-900 transition-colors hover:bg-navy-900/[0.06] lg:hidden"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 28 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l16 16M22 6L6 22" />
              ) : (
                <path d="M4 9h20M4 19h14" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <nav
            className="
              absolute inset-x-0 top-full mt-2
              flex flex-col gap-1 lg:hidden
              rounded-lg border border-white/50
              bg-ivory/85 p-3
              backdrop-blur-xl backdrop-saturate-150
              shadow-[0_20px_50px_-18px_rgb(15_36_56/0.3)]
            "
            aria-label="منوی موبایل"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-base transition-colors ${
                  isActive(item.href)
                    ? "bg-navy-900/[0.06] font-bold text-bronze-600"
                    : "text-navy-900 hover:bg-navy-900/[0.04]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Button href="/contact" className="mt-2 w-full">
              درخواست مشاوره
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
