
  
const outline =
  "M90 120C90 60 170 40 240 70C310 100 380 40 420 100C460 160 420 230 380 250C340 270 360 340 290 360C220 380 160 330 120 300C70 262 90 190 90 120Z";

const holes = [
  { cx: 150, cy: 120 },
  { cx: 372, cy: 128 },
  { cx: 262, cy: 318 },
];

export default function GasketMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 400" className={className} fill="none" aria-hidden="true">
      <path d={outline} pathLength={1} className="gasket-draw stroke-bronze-500" strokeWidth="30" strokeLinejoin="round" />
      <path d={outline} className="stroke-navy-900" strokeWidth="25" strokeLinejoin="round" />
      <path d={outline} className="stroke-navy-700" strokeWidth="1.5" strokeLinejoin="round" />
      {holes.map((h) => (
        <g key={`${h.cx}-${h.cy}`} className="gasket-fade">
          <circle cx={h.cx} cy={h.cy} r="16" className="stroke-bronze-500" strokeWidth="9" />
          <circle cx={h.cx} cy={h.cy} r="16" className="stroke-navy-900" strokeWidth="5" />
        </g>
      ))}
    </svg>
  );
}
