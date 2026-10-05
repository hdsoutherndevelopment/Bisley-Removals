import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/config";

type Props = {
  photo: PhotoData;
  /** CSS aspect ratio of the frame, e.g. "4 / 3". The frame reserves its space, so nothing shifts. */
  aspect?: string;
  sizes: string;
  priority?: boolean;
  /** Compression quality. The photos that load first use a little less, so the page paints sooner. */
  quality?: number;
  position?: string;
  className?: string;
  caption?: string;
};

/** A photograph in a fixed-ratio frame. Photos never get rounded corners or overlays. */
export function Photo({ photo, aspect = "4 / 3", sizes, priority = false, quality = 65, position = "50% 50%", className = "", caption }: Props) {
  const frame = (
    <div className="relative overflow-hidden bg-alt" style={{ aspectRatio: aspect }}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
  if (!caption) return <div className={className}>{frame}</div>;
  return (
    <figure className={className}>
      {frame}
      <figcaption className="mt-3 text-small text-fg-muted">{caption}</figcaption>
    </figure>
  );
}
