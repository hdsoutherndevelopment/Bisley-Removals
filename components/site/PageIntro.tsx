import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Photo } from "./Photo";
import type { Photo as PhotoData } from "@/lib/config";

type Props = {
  trail: Crumb[];
  title: string;
  lead: string;
  photo?: PhotoData;
  photoPosition?: string;
  children?: React.ReactNode;
};

/** Inner-page opening: breadcrumbs, the page's one H1, a plain lead, and its photograph. */
export function PageIntro({ trail, title, lead, photo, photoPosition, children }: Props) {
  return (
    <section aria-labelledby="page-title" className="wrap pb-section pt-8">
      <Breadcrumbs trail={trail} />
      <div className="mt-8 grid items-end gap-10 lg:grid-cols-12 lg:gap-gutter">
        <div className={photo ? "lg:col-span-7" : "lg:col-span-9"}>
          <h1 id="page-title" className="text-h1 font-bold">
            {title}
          </h1>
          <p className="mt-6 max-w-[40rem] text-lead text-fg-muted">{lead}</p>
          {children && (
            <div data-primary-actions className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              {children}
            </div>
          )}
        </div>
        {photo && (
          <Photo
            photo={photo}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            position={photoPosition}
            className="lg:col-span-5"
          />
        )}
      </div>
    </section>
  );
}
