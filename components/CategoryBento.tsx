import Link from "next/link";
import CategoryIcon from "./CategoryIcon";
import { categories } from "@/lib/site";

/* Six-column grid: 3+3 / 2+2+2, so the two main oil/diesel lines lead */
const spans = ["md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-2", "md:col-span-2"];

export default function CategoryBento() {
  return (
    <ul className="grid gap-4 md:grid-cols-6">
      {categories.map((c, i) => (
        <li key={c.slug} className={spans[i]}>
          <Link
            href={`/products#${c.slug}`}
            className="group flex h-full min-h-52 flex-col justify-between rounded-lg border border-navy-900/15 p-7 transition-colors duration-300 hover:border-navy-900 hover:bg-navy-900"
          >
            <CategoryIcon slug={c.slug} className="h-14 w-14 text-bronze-500 transition-colors group-hover:text-bronze-300" />
            <div className="mt-10 flex items-end justify-between gap-4">
              <h3 className="text-xl font-extrabold text-navy-900 transition-colors group-hover:text-ivory">{c.title}</h3>
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
