import Link from "next/link";
import { HEADER_NAV_LINKS, HEADER_CTA, OFFER_ANCHOR } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navbar-footer">
      <div className="relative mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="#hero"
          className="text-lg font-bold uppercase tracking-wide text-text-primary transition-opacity hover:opacity-80 sm:text-xl"
        >
          SLADJAN<span className="text-primary-btn">DEV</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {HEADER_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-text-primary transition-opacity hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={OFFER_ANCHOR} variant="secondary-filled">
            {HEADER_CTA}
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
