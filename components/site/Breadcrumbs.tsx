import Link from "next/link";
import { JsonLd, breadcrumbJsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

/** Visible breadcrumbs plus BreadcrumbList markup. Every page below the home page has them. */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const full = [{ name: "Home", path: "/" }, ...trail];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-small text-fg-muted">
        <ol className="flex flex-wrap items-center gap-x-2">
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="inline-flex min-h-11 items-center">{c.name}</span>
                ) : (
                  <>
                    <Link href={c.path} className="-mx-1 inline-flex min-h-11 items-center px-1 underline underline-offset-[0.2em] hover:text-fg">
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(full)} />
    </>
  );
}
