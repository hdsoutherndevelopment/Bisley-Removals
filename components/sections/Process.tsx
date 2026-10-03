const steps = [
  {
    title: "Request a quote",
    text: "Tell us about your move online or over the phone. An estimator assesses what’s moving and spots any access issues early.",
  },
  {
    title: "Plan your move",
    text: "We match the vehicle, team and equipment to your home, and deliver boxes and packing materials free of charge.",
  },
  {
    title: "Packing and collection",
    text: "Packing is usually done the day before. On the day, the team arrives around 8:30am and loads room by room.",
  },
  {
    title: "Delivery and unpacking",
    text: "We place everything where you want it, rebuild furniture and, if you’ve chosen unpacking, clear away the materials.",
  },
];

export function Process() {
  return (
    <section className="bg-navy py-20 text-white sm:py-28" aria-labelledby="process-title">
      <div className="wrap">
        <h2 id="process-title" className="h2 max-w-xl">How your move works</h2>
        <p className="mt-4 max-w-xl text-lg text-white/80">Four clear stages, with one team looking after you throughout.</p>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-8">
          <span aria-hidden="true" className="absolute left-[23px] top-2 h-[calc(100%-1rem)] w-[2px] bg-white/20 lg:left-0 lg:top-[23px] lg:h-[2px] lg:w-full" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-6 lg:block">
              <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-livery text-lg font-extrabold ring-8 ring-navy">
                {i + 1}
              </span>
              <div className="lg:mt-6">
                <h3 className="heading text-xl">{s.title}</h3>
                <p className="mt-2 text-white/80">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
