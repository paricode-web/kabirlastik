"use client";

import { useState, type FormEvent } from "react";
import { categories, site } from "@/lib/site";

const field =
  "mt-2 w-full rounded border border-navy-900/20 bg-ivory px-4 py-3 text-graphite placeholder:text-steel-500 focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/40";

/* No backend yet: the form opens WhatsApp with the message filled in.
   Swap onSubmit for a server action / API route when one exists. */
export default function QuoteForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);
  const label = `block font-bold ${tone === "dark" ? "text-ivory" : "text-navy-900"}`;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      "درخواست استعلام از سایت",
      `نام: ${f.get("name")}`,
      `تلفن: ${f.get("phone")}`,
      `محصول: ${f.get("product")}`,
      `توضیحات: ${f.get("message") || "-"}`,
    ].join("\n");
    window.open(`${site.whatsapp.href}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className={label}>
        نام و نام خانوادگی
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className={label}>
        شماره تماس
        <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" dir="ltr" className={`${field} text-end`} />
      </label>
      <label className={`${label} sm:col-span-2`}>
        محصول مورد نیاز
        <select name="product" className={field} defaultValue={categories[0].title}>
          {categories.map((c) => (
            <option key={c.slug}>{c.title}</option>
          ))}
          <option>سایر</option>
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        توضیحات
        <textarea name="message" rows={4} placeholder="نام خودرو، ابعاد یا تعداد مورد نیاز" className={field} />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="inline-flex h-11 w-full items-center justify-center rounded bg-bronze-500 px-8 text-sm font-bold sm:h-12 sm:w-auto sm:text-base text-navy-900 transition-colors hover:bg-bronze-300 active:bg-bronze-600">
          ارسال در واتس‌اپ
        </button>
        <p className={`mt-3 text-sm ${tone === "dark" ? "text-navy-100" : "text-navy-700"}`} role="status">
          {sent ? "واتس‌اپ باز شد. پیام را ارسال کنید تا به دست ما برسد." : "پیام شما در واتس‌اپ برای ما ارسال می‌شود."}
        </p>
      </div>
    </form>
  );
}
