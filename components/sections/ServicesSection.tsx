import { Button } from "@/components/ui/Button";
import { DecorativeCircles } from "@/components/ui/DecorativeCircles";
import { ServiceItem } from "@/components/ui/ServiceItem";
import { SERVICES, SERVICES_COPY } from "@/lib/constants";

const DESKTOP_CTA_CLASS =
  "h-[70px] w-[240px] shrink-0 !px-3 !py-0 text-center text-xs leading-tight sm:text-sm";
const MOBILE_CTA_CLASS =
  "h-[52px] min-w-[min(100%,280px)] px-8 text-sm sm:h-[56px] sm:min-w-[320px] sm:text-base";

function ServicesHeader({ centered = false }: { centered?: boolean }) {
  const alignClass = centered ? "items-center text-center" : "items-start text-left";

  return (
    <header className={`flex flex-col gap-5 sm:gap-6 ${alignClass}`}>
      <p className="max-w-md text-sm leading-relaxed text-text-muted sm:text-base">
        {SERVICES_COPY.eyebrow}
      </p>

      <h2
        id="services-heading"
        className="max-w-xl text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-tight tracking-tight text-text-primary"
      >
        {SERVICES_COPY.heading}
      </h2>
    </header>
  );
}

function ServicesTimeline() {
  return (
    <ol className="relative mt-10 list-none space-y-10 sm:mt-12 sm:space-y-12 lg:mt-0">
      {SERVICES.map((service, index) => (
        <ServiceItem
          key={service.number}
          {...service}
          isLast={index === SERVICES.length - 1}
        />
      ))}
    </ol>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-primary-bg py-16 sm:py-20 lg:py-24 xl:py-28"
    >
      <div className="px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Mobile + tablet: centered header, wide CTA, full-width timeline */}
        <div className="lg:hidden">
          <ServicesHeader centered />

          <div className="mt-8 flex justify-center sm:mt-10">
            <Button
              href={SERVICES_COPY.ctaHref}
              variant="primary"
              className={MOBILE_CTA_CLASS}
            >
              {SERVICES_COPY.ctaLabel}
            </Button>
          </div>

          <div className="mx-auto mt-10 max-w-xl sm:mt-12 lg:mt-0">
            <ServicesTimeline />
          </div>
        </div>

        {/* Desktop: two columns */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-14 xl:gap-x-20">
          <div className="flex flex-col">
            <ServicesHeader />

            <Button
              href={SERVICES_COPY.ctaHref}
              variant="primary"
              className={`mt-10 ${DESKTOP_CTA_CLASS}`}
            >
              {SERVICES_COPY.ctaLabel}
            </Button>
          </div>

          <ServicesTimeline />
        </div>
      </div>

      <DecorativeCircles position="bottom-left-services" />
    </section>
  );
}
