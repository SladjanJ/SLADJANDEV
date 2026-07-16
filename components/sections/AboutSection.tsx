import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ABOUT_COPY, CV_URL, LINKEDIN_URL, OFFER_ANCHOR } from "@/lib/constants";

function AboutHeading({ className = "" }: { className?: string }) {
  return (
    <h2
      id="about-heading"
      className={`text-[clamp(2.5rem,7vw,4.75rem)] font-bold leading-[1.05] tracking-tight text-text-primary ${className}`}
    >
      {ABOUT_COPY.headingLead}{" "}
      <span className="text-primary-btn">{ABOUT_COPY.headingAccent}</span>
    </h2>
  );
}

function LocationCard({ className = "" }: { className?: string }) {
  const { locationCard } = ABOUT_COPY;

  return (
    <aside
      className={`rounded-2xl border border-white/10 bg-[#0a1440]/95 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] ${className}`}
      aria-label="Location and contact details"
    >
      <h3 className="text-xl font-bold text-text-primary sm:text-2xl">
        {locationCard.title}
      </h3>

      <ul className="mt-4 space-y-4">
        {locationCard.rows.map((row) => (
          <li key={row.label} className="text-sm leading-relaxed text-text-muted">
            <span className="mr-1">{row.icon}</span>
            <span className="font-bold uppercase text-text-primary">{row.label}:</span>{" "}
            {row.value}
          </li>
        ))}
        <li className="text-sm leading-relaxed text-text-muted">
          <span className="mr-1">🔗</span>
          <span className="font-bold uppercase text-text-primary">
            {locationCard.connectLabel}:
          </span>{" "}
          {locationCard.connectLinks.map((link, index) => (
            <span key={link.label}>
              <Link
                href={link.href}
                className="text-primary-btn transition-opacity hover:opacity-80"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </Link>
              {index < locationCard.connectLinks.length - 1 ? " | " : null}
            </span>
          ))}
        </li>
      </ul>
    </aside>
  );
}

function ProfilePhoto({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto w-full ${className}`}>
      <div className="relative aspect-square w-full">
        <div className="h-full w-full overflow-hidden rounded-full border-[3px] border-white/30 sm:border-4">
          <Image
            src="/images/about/logo-img.png"
            alt="Slađan Jeremić, Web Developer"
            width={520}
            height={520}
            className="h-full w-full object-cover"
          />
        </div>

        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
          className="absolute left-[-6%] top-[6%] z-10 aspect-square w-[24%] transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/about/linkedin-img.png"
            alt=""
            width={120}
            height={120}
            className="h-full w-full object-contain"
          />
        </Link>
      </div>
    </div>
  );
}

function StatsList({ className = "" }: { className?: string }) {
  return (
    <ul className={`divide-y divide-white/10 border-y border-white/10 ${className}`}>
      {ABOUT_COPY.stats.map((stat) => (
        <li key={stat.label} className="flex items-center gap-5 py-5 sm:gap-6 sm:py-6">
          <div className="flex shrink-0 items-baseline gap-0.5 sm:gap-1">
            <span className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-2xl font-bold text-primary-btn sm:text-3xl">
              {stat.accent}
            </span>
          </div>
          <span className="text-base text-text-muted sm:text-lg">{stat.label}</span>
        </li>
      ))}
    </ul>
  );
}

function AboutBody({ className = "" }: { className?: string }) {
  return (
    <div
      className={`space-y-3 text-base leading-relaxed text-text-muted sm:space-y-4 sm:text-lg ${className}`}
    >
      <p className="text-text-primary">{ABOUT_COPY.subheadline}</p>

      {ABOUT_COPY.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <ul className="list-disc space-y-1 pl-5">
        {ABOUT_COPY.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      {ABOUT_COPY.outro.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}

const ABOUT_BUTTON_CLASS =
  "h-[70px] w-[195px] shrink-0 !px-3 !py-0 text-xs sm:text-sm";

const ABOUT_BUTTON_MOBILE_CLASS =
  "h-[70px] w-[min(85vw,20rem)] shrink-0 !px-3 !py-0 text-xs sm:text-sm";

function AboutButtons({ stacked = false, className = "" }: { stacked?: boolean; className?: string }) {
  const buttonClass = stacked ? ABOUT_BUTTON_MOBILE_CLASS : ABOUT_BUTTON_CLASS;

  return (
    <div
      className={`flex gap-3 ${stacked ? "flex-col items-center" : "flex-row items-center"} ${className}`}
    >
      <Button href={OFFER_ANCHOR} variant="primary" className={buttonClass}>
        {ABOUT_COPY.ctaPrimary}
      </Button>
      <Button
        href={CV_URL}
        variant="secondary-filled"
        iconSrc="/images/about/download-icon-in-button.png"
        iconAlt=""
        download
        className={buttonClass}
      >
        {ABOUT_COPY.ctaCv}
      </Button>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" aria-label="About me" className="bg-primary-bg py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Mobile: centered stack */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          <AboutHeading className="text-center" />
          <LocationCard className="w-[min(95vw,22rem)]" />
          <ProfilePhoto className="max-w-[min(80vw,18rem)]" />
          <StatsList className="w-full max-w-md" />
          <AboutBody className="mx-auto w-full max-w-prose text-left" />
          <AboutButtons stacked />
        </div>

        {/* Tablet: header row + stack */}
        <div className="hidden md:block lg:hidden">
          <div className="flex items-start justify-between gap-6">
            <AboutHeading />
            <LocationCard className="w-[min(100%,17.5rem)] shrink-0" />
          </div>

          <ProfilePhoto className="mt-8 max-w-[24rem]" />
          <StatsList className="mt-8" />
          <AboutBody className="mt-8" />
          <AboutButtons className="mt-10 justify-center" />
        </div>

        {/* Desktop: two columns */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-14 xl:gap-x-20">
          <div className="flex flex-col items-center">
            <ProfilePhoto className="max-w-[min(100%,32rem)]" />
            <AboutButtons className="mt-10" />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-end">
              <LocationCard className="w-[17.5rem] xl:w-[19rem]" />
            </div>

            <AboutHeading className="mt-10 xl:mt-12" />
            <AboutBody className="mt-8" />
            <StatsList className="mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
