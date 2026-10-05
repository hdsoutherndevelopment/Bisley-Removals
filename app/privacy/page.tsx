import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { business, isDemo } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy policy",
  description:
    "How Bisley Removal Services Ltd collects, uses and protects your personal information, how long it is kept, and how to use your rights.",
  path: "/privacy",
});

/**
 * Sections 1 to 8, 10 and 11 are the client's own privacy notice (effective October 2025), lightly
 * edited and given real headings. Section 9, "This website", is new and describes what this build
 * actually does on each tier.
 * CONFIRM before launch with forms: section 5 says data is not transferred outside the UK or EEA.
 * Check the Supabase project region and Resend's processing locations, and update it if needed.
 * CONFIRM: the client should review the whole notice before launch.
 */
export default function PrivacyPage() {
  return (
    <section aria-labelledby="page-title" className="wrap pb-section pt-8">
      <Breadcrumbs trail={[{ name: "Privacy policy", path: "/privacy" }]} />
      <div className="prose-bisley mt-8">
        <h1 id="page-title" className="text-h1 font-bold">
          Privacy policy
        </h1>
        <p className="text-fg-muted">Effective date: October 2025. Section 9, about this website, updated October 2026.</p>
        <p>
          This is the privacy notice of {business.legalName} (&ldquo;Bisley Removals&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;,
          &ldquo;us&rdquo;). We respect your privacy and are committed to protecting your personal data. It explains how we
          collect, use and safeguard your information, and your rights under data protection law.
        </p>

        <h2>1. Who we are</h2>
        <ul>
          <li>Company name: {business.legalName}</li>
          <li>Registered address: Unit 7 Bullhousen Farm, Shaftesbury Road, Bisley, Woking, Surrey GU24 9EW</li>
          <li>
            Email: <a href={business.emailHref}>{business.email}</a>
          </li>
          <li>
            Telephone: <a href={business.phoneHref}>{business.phone}</a>
          </li>
        </ul>
        <p>
          {business.legalName} is the data controller for your personal data. If you have questions about this notice or want
          to use your rights, email <a href={business.emailHref}>{business.email}</a>.
        </p>
        <p>
          You can complain at any time to the Information Commissioner&apos;s Office (ICO), the UK regulator for data protection,
          at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk<span className="sr-only"> (opens in a new tab)</span></a>.
          We would appreciate the chance to deal with your concerns first, so please contact us directly.
        </p>

        <h2>2. The data we collect</h2>
        <p>We may collect, use and store personal information you give us when you contact us, ask for a quote or use our services. This may include:</p>
        <ul>
          <li>Identity data: name and title</li>
          <li>Contact data: address, email address and telephone numbers</li>
          <li>Financial data: bank details for payments and refunds</li>
          <li>Additional contact data: emergency or secondary contact details</li>
          <li>Communication data: correspondence and feedback you send us</li>
        </ul>
        <p>
          We do not collect special category data (such as information about health, race, religion or political beliefs) or
          data about criminal convictions.
        </p>

        <h2>3. How we collect your data</h2>
        <ul>
          <li>Directly from you, when you contact us by phone, email, through our website or in person.</li>
          <li>Through our services, when you ask for a quote, arrange a removal or store goods with us.</li>
          <li>From third parties, occasionally, such as estate agents, solicitors or insurance providers acting for you.</li>
        </ul>

        <h2>4. How we use your data</h2>
        <p>We only use your personal data where the law allows, typically to:</p>
        <ul>
          <li>provide quotes and deliver removal and storage services</li>
          <li>manage payments, fees and invoices</li>
          <li>communicate with you about your booking</li>
          <li>respond to enquiries or feedback</li>
          <li>meet legal, regulatory or insurance obligations</li>
        </ul>
        <p>We do not sell your data or share it with third parties for marketing.</p>
        <p>Our lawful bases for processing are:</p>
        <ul>
          <li>Performance of a contract: to provide the services you have asked for.</li>
          <li>Legal obligation: where we must comply with the law.</li>
          <li>Legitimate interests: to run the business efficiently and look after customers, where these do not override your rights.</li>
        </ul>

        <h2>5. Sharing your data</h2>
        <p>We may share limited information with trusted third parties who help deliver our services, such as:</p>
        <ul>
          <li>insurance brokers or storage providers helping with your booking</li>
          <li>IT or payment processors that support our systems</li>
          <li>professional advisers, such as accountants, solicitors and insurers</li>
        </ul>
        <p>
          All partners and suppliers must keep your data secure and only use it on our instructions. We do not transfer your data
          outside the United Kingdom or the European Economic Area.
        </p>

        <h2>6. Data security</h2>
        <p>
          We have put appropriate technical and organisational measures in place to stop your personal data being lost, accessed,
          altered or disclosed without authorisation. Access is limited to employees, contractors and partners who need it for
          their work and are bound by confidentiality.
        </p>

        <h2>7. How long we keep your data</h2>
        <p>
          We keep personal data only as long as we need it for the purposes it was collected for, including legal, accounting
          and reporting requirements. Customer records and invoices are kept for 6 years, in line with HMRC requirements. Basic
          contact details may be kept longer to keep a service history and help with repeat business. You can ask us to delete
          your data at any time, unless the law requires us to keep it.
        </p>

        <h2>8. Your rights</h2>
        <p>Under UK data protection law you have the right to:</p>
        <ul>
          <li>ask for a copy of the personal data we hold about you</li>
          <li>ask us to correct or update your information</li>
          <li>ask us to delete your personal data</li>
          <li>object to processing where we rely on legitimate interests</li>
          <li>ask us to restrict or transfer your personal data</li>
          <li>withdraw consent, where consent is the legal basis</li>
        </ul>
        <p>
          To use any of these rights, email <a href={business.emailHref}>{business.email}</a>. We aim to respond to all valid
          requests within one month.
        </p>

        <h2>9. This website</h2>
        {isDemo ? (
          <p>
            This website has no forms and does not collect personal information. If you phone or email us, or use our online
            quote form, we handle your details as described above.
          </p>
        ) : (
          <p>
            If you send a message or quote request through a form on this website, we store what you enter (your name, contact
            details and the details of your move) and email it to our office, so we can reply. Form submissions are stored with
            our database provider, Supabase, and the emails are sent through Resend. We keep them in line with section 7.
          </p>
        )}
        <p>
          Our online quote forms are provided by Removals Manager Ltd, the software we use to manage quotes. This website does
          not use cookies or analytics. Videos only load from Vimeo when you press play, with tracking turned off. See our{" "}
          <Link href="/cookies">cookie policy</Link>.
        </p>

        <h2>10. Changes to this notice</h2>
        <p>
          We may update this notice from time to time to reflect changes in the law or in how we work. The latest version is
          always on this website, with the effective date at the top.
        </p>

        <h2>11. Contact us</h2>
        <p>
          {business.legalName}, Unit 7 Bullhousen Farm, Shaftesbury Road, Bisley, Woking, Surrey GU24 9EW. Email{" "}
          <a href={business.emailHref}>{business.email}</a> or call <a href={business.phoneHref}>{business.phone}</a>.
        </p>
      </div>
    </section>
  );
}
