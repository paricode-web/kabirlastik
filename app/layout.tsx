
import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { site } from "@/lib/site";
const estedad = localFont({
  src: [
    { path: "../public/fonts/Estedad-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Estedad-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Estedad-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Estedad-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Estedad-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/Estedad-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-estedad",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | تولیدکننده قطعات لاستیکی`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={estedad.variable}>
      <body className="flex min-h-screen flex-col pb-14 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-ivory"
        >
          پرش به محتوای اصلی
        </a>

        <Header />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
