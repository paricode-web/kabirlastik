import Link from "next/link";
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

export default function CategoryBento() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6">
      {categories.map((c, i) => (
        <li key={c.slug} className={spans[i]}>
          <Link
            href={`/products#${c.slug}`}
            className="group flex h-full min-h-44 flex-col justify-between rounded-lg border border-navy-900/15 p-5 sm:min-h-52 sm:p-7 transition-colors duration-300 hover:border-navy-900 hover:bg-navy-900"
          >
            <CategoryIcon slug={c.slug} className="h-12 w-12 text-bronze-500 sm:h-14 sm:w-14 transition-colors group-hover:text-bronze-300" />
            <div className="mt-10 flex items-end justify-between gap-4">
              <h3 className="text-lg font-extrabold sm:text-xl text-navy-900 transition-colors group-hover:text-ivory">{c.title}</h3>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-navy-700 transition-all group-hover:-translate-x-1 group-hover:text-bronze-300">
                <path d="M13 4l-7 7 7 7" />
              </svg>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
