import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "bronze" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-navy-900 text-ivory hover:bg-navy-700 active:bg-navy-500",
  secondary: "bg-ivory text-navy-900 border border-navy-900/20 hover:bg-stone",
  bronze: "bg-bronze-500 text-navy-900 hover:bg-bronze-300 active:bg-bronze-600",
  ghost: "border border-ivory/40 text-ivory hover:bg-ivory/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-11 items-center whitespace-nowrap justify-center rounded px-5 text-sm font-bold transition-colors sm:h-12 sm:px-6 sm:text-base ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
