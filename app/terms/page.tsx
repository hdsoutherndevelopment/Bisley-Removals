import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { business } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Website terms of use",
  description:
    "The terms for using the Bisley Removal Services website: who runs it, how its information should be used, and links to other websites.",
  path: "/terms",
});

// CONFIRM: website terms only. The client's terms and conditions of carriage and storage are separate
// and should be supplied if they want them published here.
export default function TermsPage() {
  return (
    <section aria-labelledby="page-title" className="wrap pb-section pt-8">
      <Breadcrumbs trail={[{ name: "Terms of use", path: "/terms" }]} />
      <div className="prose-bisley mt-8">
        <h1 id="page-title" className="text-h1 font-bold">
          Website terms of use
        </h1>
        <p>
          These terms cover your use of this website. They do not cover our removal and storage services, which are agreed
          separately when you book.
        </p>

        <h2>Who we are</h2>
        <p>
          This website is run by {business.legalName}, registered in England and Wales, company number {business.companyNumber}.
          Registered office: {business.registeredOffice}. You can contact us on{" "}
          <a href={business.phoneHref}>{business.phone}</a> or at <a href={business.emailHref}>{business.email}</a>.
        </p>

        <h2>Using this website</h2>
        <p>
          You may use this website to find out about our services and to contact us. You must not misuse it, for example by
          trying to gain unauthorised access to it or by introducing anything harmful.
        </p>

        <h2>The information on this website</h2>
        <p>
          We keep the information here accurate and up to date, but it is general information, not a quote or an offer. The
          price and details of your move are confirmed in your quote.
        </p>

        <h2>Links to other websites</h2>
        <p>
          This website links to other services we use, including our online quote forms (provided by Removals Manager Ltd),
          Google and Instagram. We are not responsible for the content or privacy practices of other websites.
        </p>

        <h2>Our liability</h2>
        <p>
          Nothing in these terms limits our liability where it would be unlawful to do so. Otherwise, we are not liable for any
          loss arising from your use of this website or reliance on its content.
        </p>

        <h2>Law</h2>
        <p>These terms are governed by the law of England and Wales.</p>

        <p>
          See also our <Link href="/privacy">privacy policy</Link>, <Link href="/cookies">cookie policy</Link> and{" "}
          <Link href="/accessibility">accessibility statement</Link>.
        </p>
      </div>
    </section>
  );
}
