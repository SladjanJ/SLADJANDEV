import Image from "next/image";
import { CAROUSEL_LOGOS } from "@/lib/constants";

function LogoItem({ logo }: { logo: (typeof CAROUSEL_LOGOS)[number] }) {
  return (
    <li className="flex shrink-0 items-center justify-center">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="h-[clamp(24px,4vw,44px)] w-auto opacity-90"
      />
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
