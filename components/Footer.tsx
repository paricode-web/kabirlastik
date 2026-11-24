import Link from "next/link";
import Logo from "./Logo";
import { categories, nav, site } from "@/lib/site";

const heading = "mb-4 font-bold text-ivory";
const link = "text-navy-100 transition-colors hover:text-bronze-300";

export default function Footer() {
  const year = new Date().toLocaleDateString("fa-IR", { year: "numeric" });

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-x grid gap-10 py-12 sm:grid-cols-2 sm:gap-12 md:py-16 lg:grid-cols-4">
        <div className="lg:pe-6">
          <Logo variant="dark" className="h-14 md:h-20" />
          <p className="mt-5 text-sm leading-8">
            تولید و تأمین قطعات لاستیکی برای صنایع گوناگون، از سال {site.since}.
          </p>
        </div>

        <div>
          <h2 className={`${heading} text-base`}>لینک‌های سریع</h2>
          <ul className="space-y-2">
            <li><Link href="/" className={link}>خانه</Link></li>
            {nav.map((item) => (
              <li key={item.href}><Link href={item.href} className={link}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={`${heading} text-base`}>محصولات</h2>
          <ul className="space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products#${c.slug}`} className={link}>{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={`${heading} text-base`}>تماس با ما</h2>
          <address className="space-y-2 text-sm not-italic leading-8">
            <p>{site.address}</p>
            <p><a href={site.phones[0].href} className={link}>{site.phones[0].label}</a></p>
            <p><a href={site.mobiles[0].href} className={link}>{site.mobiles[0].label}</a></p>
            <p><a href={`mailto:${site.email}`} className={link} dir="ltr">{site.email}</a></p>
          </address>
        </div>
      </div>

      <div className="border-t border-bronze-500/30">
        <p className="container-x py-5 text-sm text-steel-500">
          © {year} {site.name}. تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
