import Image from "next/image";
import Link from "next/link";
import { brand, business } from "@/lib/config";

/**
 * The client's own logo: the BRS roundel and wordmark, in their burgundy on light surfaces and in
 * signwriter cream on charcoal. The link names the business, so the image itself is decorative.
 */
export function Logo({ inverse = false, priority = false }: { inverse?: boolean; priority?: boolean }) {
  return (
    <Link href="/" aria-label={`${business.name}, home`} className="inline-flex shrink-0 rounded-sm py-1">
      <Image
        src={inverse ? brand.logo.cream : brand.logo.ink}
        alt=""
        width={brand.logo.width}
        height={brand.logo.height}
        priority={priority}
        sizes="(min-width: 480px) 168px, 148px"
        className="h-auto w-[9.25rem] sm:w-[10.5rem]"
      />
    </Link>
  );
}
