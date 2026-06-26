import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HERO_COPY, OFFER_ANCHOR } from "@/lib/constants";

export function HeroSection() {
  return (
    <section id="hero" className="hero-section relative overflow-hidden">
      <div className="relative mx-auto flex max-w-7xl flex-col px-5 pt-10 pb-0 sm:px-6 sm:pt-12 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-8 lg:px-10 lg:pt-16 lg:pb-0">
        <div className="relative z-10 flex flex-col items-center self-center text-center lg:self-start lg:items-start lg:text-left">
          <h1 className="max-w-xl text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.08] tracking-tight text-text-primary">
            <span className="block">{HERO_COPY.headlineLine1}</span>
            <span className="block">
              {HERO_COPY.headlineLine2Prefix}
              <span className="text-primary-btn">{HERO_COPY.headlineAccent}</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            {HERO_COPY.subheadline}
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:gap-4 md:flex-row md:justify-center lg:justify-start">
            <Button href={OFFER_ANCHOR} variant="primary" className="w-full md:w-auto">
              Contact Me
            </Button>
            <Button
              href="#work"
              variant="secondary-outline"
              iconSrc="/images/hero/eye-in-button.png"
              iconAlt=""
              className="w-full md:w-auto"
            >
              My Work
            </Button>
          </div>
        </div>

        <div className="relative z-0 mx-auto mt-8 w-full max-w-[260px] self-end sm:mt-10 sm:max-w-[320px] md:max-w-[360px] lg:mx-0 lg:mt-0 lg:max-w-[520px] lg:justify-self-end">
          <div className="relative aspect-[557/608] w-full">
            <Image
              src="/images/hero/hero-image.png"
              alt="Sladjan Jeremic, Web Developer"
              width={557}
              height={608}
              priority
              className="h-full w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
