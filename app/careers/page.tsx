import { Mail } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { business, photos } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Careers",
  description:
    "Jobs at Bisley Removal Services: LGV drivers, porters and packers for a long-established removals firm in Bisley, near Woking. Send us your CV.",
  path: "/careers",
});

// CONFIRM: current vacancies, if any, and whether applications should go to info@.
export default function CareersPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Careers", path: "/careers" }]}
        title="Careers at Bisley Removal Services"
        lead="We are always looking for reliable, motivated people: experienced LGV drivers, skilled porters and packers, or anyone with a strong work ethic and a positive attitude."
        photo={photos.crew}
      />

      <section aria-labelledby="work-title" className="wrap pb-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <h2 id="work-title" className="text-h2 font-bold">
              Working here
            </h2>
            <div className="mt-5 space-y-4 text-fg-muted">
              <p>
                We are a long-established, family-run business that takes pride in professionalism, teamwork and looking after
                customers. Every member of the crew plays a part in giving people a smooth move, and that effort is recognised.
              </p>
              <p>Our porters are full-time employees, trained at our yard in Bisley. People join us, stay and grow.</p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="text-h2 font-bold">How to apply</h2>
            <p className="mt-5 text-fg-muted">
              Email your CV and a short introduction about your skills and experience, or call the office for a chat.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a href={`${business.emailHref}?subject=Job%20application`} className="btn btn-primary">
                <Mail className="h-5 w-5" aria-hidden="true" />
                Email your CV
              </a>
              <p>
                <span className="text-fg-muted">or call </span>
                <a href={business.phoneHref} className="link link-standalone">{business.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
