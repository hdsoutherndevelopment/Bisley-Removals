import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Bisley Removals & Storage Services, home">
      <span
        aria-hidden="true"
        className={`relative grid h-11 w-11 place-items-center overflow-hidden rounded-md ${light ? "bg-white text-navy" : "bg-navy text-white"}`}
      >
        <span className="display text-[1.35rem] leading-none">B</span>
        <span className="absolute inset-x-0 bottom-[7px] h-[3px] bg-livery" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`display text-[1.4rem] ${light ? "text-white" : "text-navy"}`}>Bisley</span>
        <span className={`mt-1 text-[0.78rem] font-medium ${light ? "text-white/75" : "text-steel"}`}>
          Removals &amp; Storage, est. 1985
        </span>
      </span>
    </Link>
  );
}
