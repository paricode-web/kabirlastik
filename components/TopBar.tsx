import { site } from "@/lib/site";

export default function TopBar() {
  const link = "transition-colors hover:text-bronze-300";
  return (
    <div className="hidden bg-navy-900 text-sm text-navy-100 md:block">
      <div className="container-x flex h-10 items-center justify-between">
        <p>تولید قطعات لاستیکی از سال {site.since}</p>
        <p className="flex items-center gap-6">
          <a href={site.phones[0].href} className={link}>{site.phones[0].label}</a>
          <a href={`mailto:${site.email}`} className={link} dir="ltr">{site.email}</a>
        </p>
      </div>
    </div>
  );
}
