import type { Metadata } from "next";
import CertificateList from "@/components/CertificateList";
import { site, values } from "@/lib/site";

export const metadata: Metadata = { title: "درباره ما" };

export default function AboutPage() {
  return (
    <>
      <section className="container-x py-16 md:py-24">
        <h1>درباره‌ی ما</h1>
        <p className="mt-6 max-w-2xl text-lg">
          شرکت {site.name} با هدف تولید و تأمین قطعات لاستیکی مصارف صنایع گوناگون، از سال {site.since} شروع به تولید و آغاز به کار نموده است.
        </p>
      </section>

      <section className="bg-navy-900 py-16 md:py-24">
        <div className="container-x max-w-4xl">
          <h2 className="text-ivory">ماموریت ما</h2>
          <p className="mt-6 text-4xl font-extrabold leading-snug text-bronze-300 md:text-6xl">
            ما کیفیت را می‌سازیم
          </p>
          <p className="mt-8 max-w-2xl text-lg text-navy-100">
            این مجموعه با بهره‌گیری از تخصص، علم و فن‌آوری به‌روز، تمامی خواسته‌های کارخانجات و شرکت‌ها را برآورده کرده و پاسخگوی نیازها و قطعات صنعتی کشور است. سعی ما در ایجاد بستری مناسب جهت دستیابی مصرف‌کنندگان و فروشندگان محترم به کالاهای صنعتی با بالاترین کیفیت است.
          </p>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl space-y-6 text-lg">
          <p>
            مدیریت و کارکنان شرکت با تکیه بر دانش فنی و آزمایشگاه مجهز صنعت لاستیک، پیوسته تلاش می‌کنند کالاهای تولیدشده را مطابق با استاندارد و الزامات مشتری و با کیفیت مطلوب تولید کنند.
          </p>
          <p>
            همه‌ی کارکنان شرکت همواره از آموزش‌های لازم برای ارتقای مهارت‌ها در قالب کار گروهی برخوردار می‌شوند. شرکت به امید آنکه بتواند بیش از پیش منشأ خدمات نوین صنعتی برای پیشبرد و رشد صنعت لاستیک کشور باشد، اهداف بلندمدت خود را برای حضور استوار و پیشرو برنامه‌ریزی کرده است.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 divide-navy-900/15 border-y border-navy-900/15 md:grid-cols-4 md:divide-x md:divide-x-reverse">
          {values.map((v) => (
            <li key={v} className="py-8 text-center text-2xl font-extrabold text-navy-900">
              {v}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-stone py-16 md:py-24">
        <div className="container-x">
          <h2>گواهینامه‌های کیفیت</h2>
          <div className="mt-8">
            <CertificateList />
          </div>
        </div>
      </section>
    </>
  );
}
