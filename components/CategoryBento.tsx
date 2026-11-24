import Link from "next/link";
import Image from "next/image";
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

/* Vector art shown on hover (files live in /public).
   Default art is used for every card; to give a category its own art,
   add its slug here, e.g.  "oil-filter": "/images/art-oil.svg"  */
const defaultArt = "/brand/hero2.svg";
const artBySlug: Record<string, string> = {};

export default function CategoryBento() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6">
      {categories.map((c, i) => (
        <li key={c.slug} className={spans[i]}>
          <Link
            href={`/products#${c.slug}`}
            className="group relative isolate flex h-full min-h-44 flex-col justify-between overflow-hidden rounded-lg border border-navy-900/15 p-5 transition-colors duration-300 hover:border-navy-900 focus-visible:border-navy-900 sm:min-h-52 sm:p-7"
          >
            {/* hover background: navy base + vector art */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-20 bg-navy-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
            />
            <Image
              src={artBySlug[c.slug] ?? defaultArt}
              alt=""
              fill
              aria-hidden="true"
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="pointer-events-none -z-10 scale-110 object-cover opacity-0 mix-blend-screen transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-50 group-focus-visible:scale-100 group-focus-visible:opacity-50"
            />

            <CategoryIcon
              slug={c.slug}
              className="h-12 w-12 text-bronze-500 transition-colors group-hover:text-bronze-300 group-focus-visible:text-bronze-300 sm:h-14 sm:w-14"
            />
            <div className="mt-10 flex items-end justify-between gap-4">
              <h3 className="text-lg font-extrabold text-navy-900 transition-colors group-hover:text-ivory group-focus-visible:text-ivory sm:text-xl">
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
                className="shrink-0 text-navy-700 transition-all group-hover:-translate-x-1 group-hover:text-bronze-300 group-focus-visible:-translate-x-1 group-focus-visible:text-bronze-300"
              >
                <path d="M13 4l-7 7 7 7" />
              </svg>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
