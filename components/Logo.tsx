import Link from "next/link";
import { site } from "@/lib/site";

/* Export from Figma (02 Logo) into public/brand:
   logo-bilingual-light.svg  -> on ivory backgrounds
   logo-bilingual-dark.svg   -> on navy backgrounds */
export default function Logo({
  variant = "light",
  className = "h-16 md:h-20",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link href="/" aria-label={`${site.name} - صفحه اصلی`} className="inline-flex">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/brand/logo-bilingual-${variant}.svg`}
        alt={site.name}
        className={`${className} w-auto`}
      />
    </Link>
  );
}
