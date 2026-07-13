import Image from "next/image";
import Link from "next/link";
import { CAROUSEL_LOGOS } from "@/lib/constants";

function LogoItem({ logo }: { logo: (typeof CAROUSEL_LOGOS)[number] }) {
  return (
    <li className="flex shrink-0 items-center justify-center">
      <Link
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${logo.alt} website`}
        className="transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-btn"
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-[clamp(24px,4vw,44px)] w-auto opacity-90"
        />
      </Link>
    </li>
  );
}

export function CarouselSection() {
  return (
    <section aria-label="Tech stack" className="carousel-strip overflow-hidden">
      <ul className="mx-auto grid w-full max-w-7xl grid-cols-5 items-center gap-3 px-4 py-[clamp(14px,2.5vw,24px)] sm:gap-8 sm:px-6 md:gap-12 lg:gap-16 lg:px-10">
        {CAROUSEL_LOGOS.map((logo) => (
          <LogoItem key={logo.alt} logo={logo} />
        ))}
      </ul>
    </section>
  );
}
