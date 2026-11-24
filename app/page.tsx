import Button from "@/components/Button";
import CategoryBento from "@/components/CategoryBento";
import StatsBand from "@/components/StatsBand";
import Features from "@/components/Features";
import InfrastructureSection from "@/components/InfrastructureSection";
import ProductionTimeline from "@/components/ProductionTimeline";
import QualityDocuments from "@/components/QualityDocuments";
import NewsBanner from "@/components/NewsBanner";
import QuoteForm from "@/components/QuoteForm";
import CountUp from "@/components/CountUp";
import HeroArt from "@/components/HeroArt";
import HeroStats from "@/components/HeroStats";
import { certificates, site } from "@/lib/site";
import Image from "next/image";
const link = "transition-colors hover:text-bronze-300";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (+ stats cards on its bottom edge) */}
      <div className="relative mb-[4.5rem] sm:mb-20">
        <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-[#0f2238]">
          {/* عکس کارخانه */}
          <Image
            src="/brand/hero1.webp"
            alt="کارخانه‌ی کبیر لاستیک وارنا"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />

          {/* OPTIONAL: looping silent video (6s webm). Put the file in /public/videos/
              and un-comment. The photo above stays as the poster/fallback.
          <video
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero.webp"
          >
            <source src="/videos/hero-loop.webm" type="video/webm" />
          </video>
          */}

          {/* گرادیانت سرمه‌ای برای خوانایی متن */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#0f2238] via-[#0f2238]/70 to-transparent" />

          {/* آرت فنی (خطوط کشیده می‌شن) */}
          <HeroArt className="pointer-events-none absolute -left-40 top-1/2 -z-10 w-[40rem] -translate-y-1/2 opacity-30 sm:-left-24 sm:opacity-50 lg:-left-10" />

          {/* نویز ریز فیلم */}
          <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 -z-10" />

          {/* متن هیرو */}
          <div className="container-x relative z-10 w-full pb-28 pt-28 sm:pb-32 sm:pt-32 lg:pb-36 lg:pt-36">
            <div className="max-w-2xl">
              <h1 className="text-ivory">
                تولید قطعات لاستیکی <span className="copper-text">صنعتی</span> از سال{" "}
                <span className="copper-text">
                  <CountUp to={site.sinceYear} from={1300} duration={2400} />
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base text-navy-100 md:text-lg">
                {site.tagline}.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button href="/products" variant="bronze" className="w-full sm:w-auto">
                  مشاهده‌ی محصولات
                </Button>
                <Button href="/contact" variant="ghost" className="w-full sm:w-auto">
                  درخواست مشاوره
                </Button>
              </div>

              <ul className="mt-10 flex flex-wrap gap-3">
                {certificates.map((c) => (
                  <li
                    key={c.code}
                    dir="ltr"
                    className="rounded-full border border-ivory/25 px-3 py-1 text-sm text-navy-100"
                  >
                    {c.code}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <HeroStats />
      </div>

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
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <h2 className="lg:pe-8">چرا کبیر لاستیک وارنا</h2>
          <div className="lg:col-span-2">
            <Features />
          </div>
        </div>
      </section>

      {/* 5b. Production timeline */}
      <ProductionTimeline />

      {/* 7. Quality documents */}
      <QualityDocuments />

      {/* 8. News */}
      <section className="container-x pb-16 md:pb-24">
        <h2 className="mb-8">اخبار</h2>
        <NewsBanner />
      </section>

      {/* 9. Quote request + contact */}
      <section id="quote" className="bg-navy-900 py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
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
          <div className="lg:col-span-3">
            <QuoteForm tone="dark" />
          </div>
        </div>
      </section>
    </>
  );
}