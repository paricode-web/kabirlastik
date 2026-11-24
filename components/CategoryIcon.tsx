import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  "oil-filter-gaskets": (
    <>
      <circle cx="32" cy="32" r="24" />
      <circle cx="32" cy="32" r="14" />
      <circle cx="32" cy="32" r="4" />
    </>
  ),
  "diesel-filter-gaskets": (
    <>
      <circle cx="32" cy="32" r="24" />
      <circle cx="32" cy="32" r="12" />
      <path d="M32 8v8M32 48v8M8 32h8M48 32h8" />
    </>
  ),
  "air-filter-foam-gaskets": (
    <>
      <rect x="8" y="14" width="48" height="36" rx="10" />
      <rect x="19" y="24" width="26" height="16" rx="4" />
      <path d="M15 21h.01M49 21h.01M15 43h.01M49 43h.01" />
    </>
  ),
  "air-filter-parts": (
    <>
      <rect x="8" y="10" width="48" height="44" rx="4" />
      <path d="M18 18v28M26 18v28M34 18v28M42 18v28" />
    </>
  ),
  hoses: (
    <>
      <path d="M8 40C8 24 24 32 32 22S48 14 56 12" />
      <path d="M8 52C8 36 24 44 32 34S48 26 56 24" />
      <path d="M8 40v12M56 12v12" />
    </>
  ),
};

export default function CategoryIcon({ slug, className = "" }: { slug: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[slug]}
    </svg>
  );
}
