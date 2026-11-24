import { marqueeWords } from "@/lib/site";

function Ring() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-bronze-500">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-8 pe-8">
      {marqueeWords.map((w) => (
        <span key={w} className="flex items-center gap-8 whitespace-nowrap text-base font-bold md:text-lg text-ivory/90">
          {w}
          <Ring />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-bronze-500/30 bg-navy-700 py-3 md:py-4" aria-hidden="true">
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
