"use client";

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties, MouseEvent } from "react";
import CategoryIcon from "./CategoryIcon";
import { categories } from "@/lib/site";

/* Six-column grid: 3+3 / 2+2+2, so the two main oil/diesel lines lead */
const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "sm:col-span-2 lg:col-span-2",
];

/* Vector art shown on hover (default for every card). */
const defaultArt = "/brand/hero2.svg";
const artBySlug: Record<string, string> = {};

/* MACRO PHOTOS: add one per category slug and the card shows the photo
   instead of the icon, e.g.  "oil-filter": "/images/macro-oring.jpg"
   (files go in /public/images). Empty = cards keep the icon. */
const photoBySlug: Record<string, string> = {};

const tiltStyle: CSSProperties = {
  transform: "perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
};

function onMove(e: MouseEvent<HTMLAnchorElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  el.style.setProperty("--rx", `${((0.5 - py) * 8).toFixed(2)}deg`);
  el.style.setProperty("--ry", `${((px - 0.5) * 8).toFixed(2)}deg`);
  el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
  el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
}

function onLeave(e: MouseEvent<HTMLAnchorElement>) {
  const el = e.currentTarget;
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
}

export default function CategoryBento() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6">
      {categories.map((c, i) => {
        const photo = photoBySlug[c.slug];
        return (
          <li key={c.slug} className={spans[i]}>
            <Link
              href={`/products#${c.slug}`}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={tiltStyle}
              className={`group relative isolate flex h-full min-h-44 flex-col justify-between overflow-hidden rounded-lg border p-5 transition-[transform,border-color,box-shadow] duration-200 will-change-transform hover:border-[#D49A62] hover:shadow-[0_0_44px_-12px_rgb(212_154_98/0.65)] focus-visible:border-[#D49A62] sm:min-h-52 sm:p-7 ${
                photo ? "border-navy-900" : "border-navy-900/15"
              }`}
            >
              {/* layer 1: navy base (always on with a photo, on hover without) */}
              <span
                aria-hidden="true"
                className={`absolute inset-0 -z-30 bg-navy-900 transition-opacity duration-500 ${
                  photo ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                }`}
              />

              {/* layer 2: macro photo */}
              {photo && (
                <>
                  <Image
                    src={photo}
                    alt=""
                    fill
                    aria-hidden="true"
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="-z-20 object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-20 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-navy-900/10"
                  />
                </>
              )}

              {/* layer 3: vector art on hover */}
              <Image
                src={artBySlug[c.slug] ?? defaultArt}
                alt=""
                fill
                aria-hidden="true"
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="pointer-events-none -z-10 scale-110 object-cover opacity-0 mix-blend-screen transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-40 group-focus-visible:scale-100 group-focus-visible:opacity-40"
              />

              {/* layer 4: copper glow that follows the cursor */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(380px circle at var(--mx,50%) var(--my,50%), rgb(212 154 98 / 0.32), transparent 62%)",
                }}
              />

              {!photo && (
                <CategoryIcon
                  slug={c.slug}
                  className="h-12 w-12 text-bronze-500 transition-colors group-hover:text-bronze-300 group-focus-visible:text-bronze-300 sm:h-14 sm:w-14"
                />
              )}
              <div className={`flex items-end justify-between gap-4 ${photo ? "mt-24" : "mt-10"}`}>
                <h3
                  className={`text-lg font-extrabold transition-colors sm:text-xl ${
                    photo
                      ? "text-ivory"
                      : "text-navy-900 group-hover:text-ivory group-focus-visible:text-ivory"
                  }`}
                >
                  {c.title}
                </h3>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 transition-all group-hover:-translate-x-1 group-hover:text-bronze-300 group-focus-visible:-translate-x-1 group-focus-visible:text-bronze-300 ${
                    photo ? "text-ivory" : "text-navy-700"
                  }`}
                >
                  <path d="M13 4l-7 7 7 7" />
                </svg>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}