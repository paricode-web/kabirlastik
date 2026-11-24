import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "تماس با ما" };

const link = "text-navy-900 underline-offset-4 hover:text-bronze-600 hover:underline";

export default function ContactPage() {
  return (
    <div className="container-x py-16 md:py-24">
      <h1>تماس با ما</h1>
      <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        <div className="md:col-span-2">
          <dt className="font-bold text-navy-900">آدرس</dt>
          <dd className="mt-2 max-w-2xl">{site.address}</dd>
        </div>
        <div>
          <dt className="font-bold text-navy-900">تلفن دفتر</dt>
          <dd className="mt-2 space-y-1">
            {site.phones.map((p) => (
              <p key={p.href}><a href={p.href} className={link}>{p.label}</a></p>
            ))}
          </dd>
        </div>
        <div>
          <dt className="font-bold text-navy-900">موبایل</dt>
          <dd className="mt-2 space-y-1">
            {site.mobiles.map((p) => (
              <p key={p.href}><a href={p.href} className={link}>{p.label}</a></p>
            ))}
          </dd>
        </div>
        <div>
          <dt className="font-bold text-navy-900">واتس‌اپ و تلگرام</dt>
          <dd className="mt-2"><a href={site.whatsapp.href} className={link}>{site.whatsapp.label}</a></dd>
        </div>
        <div>
          <dt className="font-bold text-navy-900">ایمیل</dt>
          <dd className="mt-2"><a href={`mailto:${site.email}`} className={link} dir="ltr">{site.email}</a></dd>
        </div>
      </dl>

      <h2 className="mt-20">درخواست استعلام</h2>
      <div className="mt-8 max-w-3xl">
        <QuoteForm />
      </div>
    </div>
  );
}
