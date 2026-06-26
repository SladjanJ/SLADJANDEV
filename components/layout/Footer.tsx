import Link from "next/link";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { FOOTER_COPY, FOOTER_NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navbar-footer text-text-primary">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:px-8 lg:px-10 lg:py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <Link
            href="#hero"
            className="text-lg font-bold uppercase tracking-wide transition-opacity hover:opacity-80 sm:text-xl"
          >
            SLADJAN<span className="text-primary-btn">DEV</span>
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex max-w-full flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-6 md:gap-x-8"
          >
            {FOOTER_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-80 sm:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ul className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex transition-opacity hover:opacity-80"
                >
                  <SocialIcon name={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-white/10 md:my-8" />

        <div className="flex flex-col items-center gap-3 text-center text-xs text-text-muted sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2 sm:text-sm">
          <span>{FOOTER_COPY.copyright}</span>
          {FOOTER_COPY.legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline transition-opacity hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
