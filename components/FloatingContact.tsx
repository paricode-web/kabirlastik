import { site } from "@/lib/site";

/* Mobile-only bar: industrial buyers usually want to call or message right away */
export default function FloatingContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy-900 md:hidden">
      <a href={site.phones[0].href} className="flex h-14 items-center justify-center bg-navy-900 text-sm font-bold text-ivory">
        تماس
      </a>
      <a href={site.whatsapp.href} className="flex h-14 items-center justify-center bg-bronze-500 text-sm font-bold text-navy-900">
        واتس‌اپ
      </a>
    </div>
  );
}
