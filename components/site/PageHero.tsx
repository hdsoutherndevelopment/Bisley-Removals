import Image from "next/image";

type Props = {
  title: string;
  intro: string;
  image?: { src: string; alt: string };
  children?: React.ReactNode;
};

export function PageHero({ title, intro, image, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {image && (
        <>
          <Image src={image.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/50" />
        </>
      )}
      <div className="wrap py-16 sm:py-24">
        <h1 className="display max-w-3xl text-[clamp(2.2rem,5vw,3.75rem)]">{title}</h1>
        <p className="mt-5 max-w-prose text-lg text-white/85 sm:text-xl">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
      <div className="coachline" aria-hidden="true" />
    </section>
  );
}
