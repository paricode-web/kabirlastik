import type { CSSProperties } from "react";

/* Technical drawing of a gasket + O-ring. Every line is drawn with
   stroke-dashoffset (see .draw in globals.css), one after another. */

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;
const COPPER = "#C98B55";

/* bolt holes: 6 holes on a circle of radius 215 around (300,300) */
const holes = [0, 60, 120, 180, 240, 300].map((deg) => {
  const a = (deg * Math.PI) / 180;
  return { x: 300 + 215 * Math.cos(a), y: 300 + 215 * Math.sin(a) };
});

export default function HeroArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      stroke={COPPER}
      strokeWidth={1.6}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      {/* gasket outline + bore */}
      <circle className="draw" pathLength={1} cx="300" cy="300" r="250" style={delay(0.2)} />
      <circle className="draw" pathLength={1} cx="300" cy="300" r="120" style={delay(0.7)} />

      {/* O-ring cross section */}
      <circle className="draw" pathLength={1} cx="300" cy="300" r="190" style={delay(1.1)} />
      <circle className="draw" pathLength={1} cx="300" cy="300" r="156" style={delay(1.4)} />

      {/* bolt holes */}
      {holes.map((h, i) => (
        <circle
          key={i}
          className="draw"
          pathLength={1}
          cx={h.x}
          cy={h.y}
          r="14"
          style={delay(1.8 + i * 0.18)}
        />
      ))}

      {/* centre lines (dash-dot) */}
      <g strokeDasharray="14 6 2 6" strokeWidth={1}>
        <path className="fade-in" d="M20 300H580" style={delay(2.6)} />
        <path className="fade-in" d="M300 20V580" style={delay(2.6)} />
      </g>

      {/* dimension line under the bore */}
      <g>
        <path className="draw" pathLength={1} d="M180 548H420" style={delay(3)} />
        <path className="draw" pathLength={1} d="M180 538V558M420 538V558" style={delay(3.3)} />
        <text
          className="fade-in"
          x="300"
          y="536"
          textAnchor="middle"
          fill={COPPER}
          stroke="none"
          fontSize="15"
          letterSpacing="2"
          style={delay(3.6)}
        >
          Ø 240
        </text>
      </g>
    </svg>
  );
}
