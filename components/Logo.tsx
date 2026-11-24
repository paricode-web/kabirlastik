import Link from "next/link";

type Props = {
  /** "dark" = logo sits on a dark/navy background (ivory text).
      "light" = logo sits on a light background (navy text). */
  tone?: "dark" | "light";
  /** old prop name, still accepted: <Logo variant="dark" /> */
  variant?: "dark" | "light";
  /** "md" for the header, "lg" for the footer */
  size?: "md" | "lg";
  className?: string;
};

const sizes = {
  md: {
    gap: "gap-3",
    mark: "h-10 w-10 sm:h-11 sm:w-11",
    name: "text-base sm:text-lg",
    latin: "hidden text-[11px] sm:block",
  },
  lg: {
    gap: "gap-4",
    mark: "h-14 w-14 md:h-16 md:w-16",
    name: "text-xl md:text-2xl",
    latin: "block text-xs md:text-[13px]",
  },
};

/* The mark (C + chevron) comes from the brand SVG; the name is live text,
   so it stays sharp at any size and uses the site's own font. */
export default function Logo({ tone, variant, size = "md", className = "" }: Props) {
  const onDark = (tone ?? variant ?? "light") === "dark";
  const s = sizes[size];

  return (
    <Link
      href="/"
      aria-label="کبیر لاستیک وارنا - صفحه‌ی اصلی"
      className={`flex shrink-0 items-center ${s.gap} ${className}`}
    >
      {/* mark only (no text paths) */}
      <svg
        viewBox="84 104 212 212"
        fill="none"
        aria-hidden="true"
        className={`shrink-0 ${s.mark} ${onDark ? "text-ivory" : "text-[#0F2438]"}`}
      >
        <path
          d="M242.8 285.4C229.011 295.04 212.842 300.715 196.053 301.806C179.263 302.898 162.496 299.364 147.575 291.59C132.654 283.815 120.151 272.098 111.425 257.713C102.699 243.328 98.0853 226.825 98.0853 210C98.0853 193.175 102.699 176.672 111.425 162.287C120.151 147.902 132.654 136.185 147.575 128.41C162.496 120.636 179.263 117.102 196.053 118.194C212.842 119.285 229.011 124.96 242.8 134.6"
          stroke="currentColor"
          strokeWidth="26"
        />
        <path
          d="M232.4 252.4C224.012 260.799 213.321 266.521 201.68 268.842C190.039 271.163 177.971 269.979 167.004 265.44C156.036 260.901 146.66 253.211 140.064 243.342C133.468 233.473 129.947 221.87 129.947 210C129.947 198.13 133.468 186.527 140.064 176.658C146.66 166.789 156.036 159.099 167.004 154.56C177.971 150.021 190.039 148.837 201.68 151.158C213.321 153.48 224.012 159.201 232.4 167.6"
          stroke="#C99A6B"
          strokeWidth="5"
        />
        <path d="M276 136L184 212L276 288" stroke="#C99A6B" strokeWidth="24" strokeMiterlimit="10" />
      </svg>

      {/* name: live text */}
      <span className="flex flex-col leading-tight">
        <span className={`font-extrabold ${s.name} ${onDark ? "text-ivory" : "text-navy-900"}`}>
          کبیر لاستیک وارنا
        </span>
        <span
          dir="ltr"
          className={`mt-1 font-semibold uppercase tracking-[0.22em] ${s.latin}`}
          style={{ color: onDark ? "#D9B48A" : "#A87B4F" }}
        >
          Kabir Lastik Varna
        </span>
      </span>
    </Link>
  );
}