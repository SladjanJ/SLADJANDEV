import { Button } from "@/components/ui/Button";
import { DecorativeCircles } from "@/components/ui/DecorativeCircles";
import { CONTACT_COPY } from "@/lib/constants";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-primary-bg py-16 sm:py-20 lg:py-24 xl:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1440]/95 px-5 py-12 text-center sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <DecorativeCircles position="top-right" />
          <DecorativeCircles position="bottom-left" />

          <h2
            id="contact-heading"
            className="relative text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-tight tracking-tight text-text-primary"
          >
            {CONTACT_COPY.heading}
          </h2>

          <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:mt-5 sm:text-base">
            {CONTACT_COPY.subtext}
          </p>

          <div className="relative mt-8 flex justify-center sm:mt-10">
            <Button
              href={CONTACT_COPY.ctaHref}
              variant="primary"
              className="h-[52px] min-w-[min(100%,280px)] px-8 text-sm sm:h-[56px] sm:min-w-[320px] sm:text-base lg:min-w-[360px]"
            >
              {CONTACT_COPY.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
