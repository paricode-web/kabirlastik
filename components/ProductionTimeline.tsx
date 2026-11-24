"use client";

import { useEffect, useRef, useState } from "react";
import SectionEyebrow from "./SectionEyebrow";

/* Edit the texts to match your real process. */
const steps = [
  { title: "مخلوط‌کاری", text: "آماده‌سازی و اختلاط مواد اولیه لاستیکی بر اساس فرمول هر محصول." },
  { title: "قالب‌گیری", text: "شکل‌دهی قطعه در قالب‌هایی با ابعاد مشخص و تکرارپذیر." },
  { title: "پخت", text: "پخت تحت دما و فشار کنترل‌شده تا قطعه به خواص نهایی خود برسد." },
  { title: "کنترل کیفیت", text: "بازرسی ابعادی و ظاهری قطعات پیش از بسته‌بندی و ارسال." },
];

export default function ProductionTimeline() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the section top is at 70% of the viewport, 1 when its bottom reaches 55%
      const p = (vh * 0.7 - r.top) / (r.height - vh * 0.15);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} aria-labelledby="timeline-heading" className="container-x py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
        <div>
          <SectionEyebrow tone="navy">فرایند تولید</SectionEyebrow>
          <h2 id="timeline-heading" className="mt-5 lg:pe-8">
            از ماده‌ی اولیه تا قطعه‌ی نهایی
          </h2>
        </div>

        <ol className="relative lg:col-span-2">
          {/* track + copper fill */}
          <span aria-hidden="true" className="absolute bottom-6 start-5 top-6 w-px bg-navy-900/15" />
          <span
            aria-hidden="true"
            className="absolute start-5 top-6 w-px origin-top bg-gradient-to-b from-[#D49A62] to-[#A8652F]"
            style={{ height: `calc((100% - 3rem) * ${progress})` }}
          />

          {steps.map((s, i) => {
            const active = progress >= i / steps.length + 0.02;
            return (
              <li key={s.title} className="relative ps-16 pb-12 last:pb-0">
                <span
                  className={`absolute start-0 top-0 grid h-10 w-10 place-items-center rounded-full border-2 text-sm font-extrabold transition-all duration-500 ${
                    active
                      ? "scale-100 border-[#D49A62] bg-navy-900 text-bronze-300 shadow-[0_0_24px_-4px_rgb(212_154_98/0.7)]"
                      : "scale-90 border-navy-900/20 bg-ivory text-navy-700"
                  }`}
                >
                  {(i + 1).toLocaleString("fa-IR")}
                </span>
                <h3
                  className={`text-xl font-extrabold transition-colors duration-500 ${
                    active ? "text-navy-900" : "text-navy-900/40"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2 max-w-xl leading-8 transition-colors duration-500 ${
                    active ? "text-navy-700" : "text-navy-700/40"
                  }`}
                >
                  {s.text}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
