import { fleet } from "@/lib/content";

const H = 140;
const GROUND = 128;
const NAVY = "#13294B";
const RED = "#C8102E";
const GLASS = "#BFD0E6";

function Wheel({ x, r = 11 }: { x: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={GROUND - r} r={r + 3} fill="#fff" />
      <circle cx={x} cy={GROUND - r} r={r} fill="#0C1B33" />
      <circle cx={x} cy={GROUND - r} r={r * 0.4} fill="#8C99AC" />
    </g>
  );
}

function Cab({ x, top, w }: { x: number; top: number; w: number }) {
  const bottom = GROUND - 8;
  return (
    <g>
      <path d={`M${x},${bottom} V${top} H${x + w * 0.55} L${x + w - 4},${top + (bottom - top) * 0.45} Q${x + w},${top + (bottom - top) * 0.5} ${x + w},${top + (bottom - top) * 0.6} V${bottom} Z`} fill={NAVY} />
      <path d={`M${x + w * 0.5},${top + 6} H${x + w * 0.58} L${x + w - 9},${top + (bottom - top) * 0.42} H${x + w * 0.5} Z`} fill={GLASS} />
    </g>
  );
}

function Lettering({ x, y, size }: { x: number; y: number; size: number }) {
  return (
    <text x={x} y={y} fill="#fff" fontSize={size} fontWeight={800} style={{ fontStretch: "125%" }} fontFamily="Archivo Variable, Arial, sans-serif">
      Bisley
    </text>
  );
}

function Vehicle({ kind }: { kind: (typeof fleet)[number]["key"] }) {
  switch (kind) {
    case "crew":
      return (
        <>
          <path d="M6,120 V66 Q6,52 20,52 H92 L124,80 Q144,84 144,98 V120 Z" fill={NAVY} />
          <path d="M96,58 L120,80 H96 Z" fill={GLASS} />
          <rect x="8" y="100" width="134" height="4" fill={RED} />
          <Lettering x={18} y={88} size={18} />
          <Wheel x={34} />
          <Wheel x={118} />
        </>
      );
    case "luton":
      return (
        <>
          <rect x="6" y="26" width="168" height="94" rx="3" fill={NAVY} />
          <rect x="166" y="26" width="34" height="30" rx="3" fill={NAVY} />
          <Cab x={170} top={60} w={56} />
          <rect x="8" y="100" width="216" height="4" fill={RED} />
          <Lettering x={22} y={76} size={30} />
          <Wheel x={46} />
          <Wheel x={196} />
        </>
      );
    case "lowloader":
      return (
        <>
          <rect x="6" y="42" width="178" height="80" rx="3" fill={NAVY} />
          <Cab x={182} top={56} w={58} />
          <rect x="8" y="104" width="230" height="4" fill={RED} />
          <Lettering x={22} y={86} size={30} />
          <Wheel x={40} r={8} />
          <Wheel x={66} r={8} />
          <Wheel x={212} r={9} />
        </>
      );
    case "hgv":
      return (
        <>
          <rect x="6" y="6" width="272" height="110" rx="3" fill={NAVY} />
          <Cab x={280} top={34} w={74} />
          <rect x="8" y="98" width="344" height="5" fill={RED} />
          <Lettering x={26} y={70} size={46} />
          <Wheel x={48} r={12} />
          <Wheel x={80} r={12} />
          <Wheel x={316} r={12} />
        </>
      );
  }
}

/** Fleet drawn to a shared scale: each vehicle's width grows in proportion to its length. */
export function FleetLineup() {
  return (
    <>
      {/* Mobile: stacked, still drawn to a shared scale (HGV = full width). */}
      <ul className="space-y-8 sm:hidden">
        {fleet.map((v) => (
          <li key={`${v.key}-m`}>
            <svg
              viewBox={`0 0 ${v.length} ${H}`}
              style={{ width: `${(v.length / 360) * 100}%` }}
              className="block h-auto"
              role="img"
              aria-label={`${v.name} illustration`}
            >
              <line x1="0" y1={GROUND} x2={v.length} y2={GROUND} stroke="#DCE2EA" strokeWidth="2" />
              <Vehicle kind={v.key} />
            </svg>
            <p className="heading mt-3 text-lg">{v.name}</p>
            <p className="mt-1 text-[0.95rem] leading-snug text-steel">{v.use}</p>
          </li>
        ))}
      </ul>
      <div
        className="hidden gap-x-6 sm:grid"
        style={{ gridTemplateColumns: fleet.map((v) => `minmax(0, ${v.length}fr)`).join(" ") }}
      >
        {fleet.map((v) => (
          <svg
            key={v.key}
            viewBox={`0 0 ${v.length} ${H}`}
            className="block h-auto w-full self-end"
            aria-hidden="true"
          >
            <line x1="0" y1={GROUND} x2={v.length} y2={GROUND} stroke="#DCE2EA" strokeWidth="2" />
            <Vehicle kind={v.key} />
          </svg>
        ))}
        {fleet.map((v) => (
          <div key={`${v.key}-label`} className="pt-4">
            <p className="heading text-lg">{v.name}</p>
            <p className="mt-1 text-[0.95rem] leading-snug text-steel">{v.use}</p>
          </div>
        ))}
      </div>
    </>
  );
}
