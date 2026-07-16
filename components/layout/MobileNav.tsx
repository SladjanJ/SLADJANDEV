"use client";

import { useState } from "react";
import Link from "next/link";
import { HEADER_NAV_LINKS, HEADER_CTA, OFFER_ANCHOR } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center text-text-primary transition-opacity hover:opacity-80"
      >
        <span className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </span>
      </button>

      {isOpen ? (
        <div className="absolute inset-x-0 top-full z-50 border-t border-white/10 bg-navbar-footer shadow-lg">
          <div className="relative px-6 py-6">
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-xl text-text-primary transition-opacity hover:opacity-80"
            >
              ×
            </button>

            <nav className="flex flex-col gap-5 pt-2">
              {HEADER_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-sm font-semibold uppercase tracking-wide text-text-primary transition-opacity hover:opacity-80"
                >
                  {link.label}
                </Link>
              ))}

              <Button
                href={OFFER_ANCHOR}
                variant="secondary-filled"
                className="mt-2 w-full"
                onClick={closeMenu}
              >
                {HEADER_CTA}
              </Button>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
