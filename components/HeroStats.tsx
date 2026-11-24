import CountUp from "@/components/CountUp";
import { categories, certificates, site } from "@/lib/site";

/* current Persian (Jalali) year, e.g. 1405 */
function persianYear() {
  const y = new Intl.DateTimeFormat("en-u-ca-persian", { year: "numeric" }).format(new Date());
  return parseInt(y.replace(/\D/g, ""), 10);
}

/* Three glass cards that sit on the bottom edge of the hero:
   half over the photo, half over the cream section below. */
export default function HeroStats() {
  const stats = [
    { value: Math.max(persianYear() - site.sinceYear, 0), label: "سال سابقه" },
    { value: certificates.length, label: "گواهینامه ISO" },
    { value: categories.length, label: "دسته محصول" },
  ];

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-1/2">
      <ul className="container-x pointer-events-auto mx-auto grid max-w-3xl grid-cols-3 gap-2 sm:gap-4">
        {stats.map((s) => (
          <li
            key={s.label}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-navy-900/60 px-2 py-4 text-center shadow-[0_24px_50px_-22px_rgb(0_0_0/0.55),inset_0_1px_0_0_rgb(255_255_255/0.12)] backdrop-blur-xl backdrop-saturate-150 transition-transform duration-300 hover:-translate-y-1 sm:px-6 sm:py-6"
          >
            {/* copper accent line */}
            <span
              aria-hidden="true"
              className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#D49A62] to-transparent"
            />
            <p className="text-3xl font-extrabold text-ivory sm:text-4xl">
              <CountUp to={s.value} from={0} duration={1800} />
            </p>
            <p className="mt-1 text-xs text-navy-100 sm:text-sm">{s.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
