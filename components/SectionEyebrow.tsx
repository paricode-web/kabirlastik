import type { ReactNode } from "react";

export default function SectionEyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p className={`flex items-center gap-3 text-sm font-bold ${tone === "dark" ? "text-bronze-300" : "text-bronze-600"}`}>
      <span aria-hidden="true" className="h-px w-10 bg-bronze-500" />
      {children}
    </p>
  );
}
