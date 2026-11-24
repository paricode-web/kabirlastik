import Button from "@/components/Button";
import GasketMark from "@/components/GasketMark";
import Marquee from "@/components/Marquee";
import CategoryBento from "@/components/CategoryBento";
import StatsBand from "@/components/StatsBand";
import Features from "@/components/Features";
import InfrastructureSection from "@/components/InfrastructureSection";
import QualityDocuments from "@/components/QualityDocuments";
import NewsBanner from "@/components/NewsBanner";
import QuoteForm from "@/components/QuoteForm";
import CountUp from "@/components/CountUp";
import { certificates, site } from "@/lib/site";

const link = "transition-colors hover:text-bronze-300";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: add public/images/hero.jpg to show a real photo behind the drawing */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <div className="absolute inset-0 -z-10 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-25" />
        <div className="container-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-ivory">
              تولید قطعات لاستیکی صنعتی از سال <CountUp to={site.sinceYear} from={1300} duration={2400} />
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy-100">{site.tagline}.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/products" variant="bronze">مشاهده‌ی محصولات</Button>
              <Button href="/contact" variant="ghost">درخواست مشاوره</Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {certificates.map((c) => (
                <li key={c.code} dir="ltr" className="rounded-full border border-ivory/25 px-3 py-1 text-sm text-navy-100">
                  {c.code}
                </li>
              ))}
            </ul>
          </div>
          <GasketMark className="mx-auto w-full max-w-md" />
        </div>
      </section>

      {/* 2. Product keywords strip */}
      <Marquee />

      {/* 3. Product categories */}
      <section id="categories" className="container-x py-16 md:py-24">
        <h2>محصولات ما</h2>
        <p className="mt-3 max-w-2xl text-navy-700">
          واشر، اورینگ و قطعات لاستیکی فیلتر روغن، گازوییل و هوای خودرو، و شیلنگ لاستیکی.
        </p>
        <div className="mt-10">
          <CategoryBento />
        </div>
      </section>

      {/* 3b. Industrial infrastructure */}
      <InfrastructureSection />

      {/* 4. Numbers */}
      <StatsBand />

      {/* 5. Why us */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <h2 className="md:pe-8">چرا کبیر لاستیک وارنا</h2>
          <div className="md:col-span-2">
            <Features />
          </div>
        </div>
      </section>

      {/* 6. Mission */}
      <section className="bg-bronze-100 py-16 md:py-24">
        <div className="container-x grid items-end gap-8 md:grid-cols-2">
          <p className="text-4xl font-extrabold leading-snug text-navy-900 md:text-6xl">ما کیفیت را می‌سازیم</p>
          <div>
            <p className="max-w-lg text-lg text-navy-900/80">
              با تخصص، علم و فن‌آوری به‌روز، خواسته‌های کارخانجات و شرکت‌ها را برآورده می‌کنیم تا مصرف‌کنندگان به کالاهای صنعتی با بالاترین کیفیت دست پیدا کنند.
            </p>
            <Button href="/about" className="mt-6">درباره‌ی ما</Button>
          </div>
        </div>
      </section>

      {/* 7. Quality documents (replaces the plain certificate list on the homepage only) */}
      <QualityDocuments />

      {/* 8. News */}
      <section className="container-x pb-16 md:pb-24">
        <h2 className="mb-8">اخبار</h2>
        <NewsBanner />
      </section>

      {/* 9. Quote request + contact */}
      <section id="quote" className="bg-navy-900 py-16 md:py-24">
        <div className="container-x grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-ivory">درخواست استعلام و مشاوره</h2>
            <p className="mt-4 text-navy-100">
              نام محصول یا خودرو و توضیح کوتاهی بنویسید. یا مستقیم تماس بگیرید:
            </p>
            <ul className="mt-6 space-y-2 text-lg text-ivory">
              <li><a href={site.phones[0].href} className={link}>{site.phones[0].label}</a></li>
              <li><a href={site.mobiles[0].href} className={link}>{site.mobiles[0].label}</a></li>
              <li><a href={`mailto:${site.email}`} className={link} dir="ltr">{site.email}</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <QuoteForm tone="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
