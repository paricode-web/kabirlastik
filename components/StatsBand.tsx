import CountUp from "./CountUp";
import { categories, certificates, yearsActive } from "@/lib/site";

export default function StatsBand() {
  const stats = [
    { value: yearsActive(), label: "سال سابقه‌ی تولید" },
    { value: certificates.length, label: "گواهینامه‌ی ISO" },
    { value: categories.length, label: "دسته محصول" },
  ];
  return (
    <section className="bg-stone">
      <dl className="container-x grid grid-cols-3 divide-x divide-x-reverse divide-navy-900/15 py-10 md:py-14">
        {stats.map((s) => (
          <div key={s.label} className="px-2 text-center md:px-8">
            <dd className="text-3xl font-extrabold text-navy-900 sm:text-4xl md:text-6xl">
              <CountUp to={s.value} />
            </dd>
            <dt className="mt-2 text-xs text-navy-700 sm:text-sm md:text-lg">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
