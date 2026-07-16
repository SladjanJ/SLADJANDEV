"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL, LEAD_MAGNET_COPY } from "@/lib/constants";
import { validateLeadForm } from "@/lib/lead-form";

type FormStatus = "idle" | "loading" | "success" | "error";

function MessageIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-navbar-footer/60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h8M8 14h5M6 4h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-4 3V6a2 2 0 0 1 2-2z"
      />
    </svg>
  );
}

function OfferBadge() {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/25" />
      <p className="shrink-0 text-xs font-medium text-text-primary sm:text-sm">
        <span aria-hidden="true">🚀 </span>
        {LEAD_MAGNET_COPY.badge}
      </p>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/25" />
    </div>
  );
}

function FieldError({ message, id }: { message?: string; id?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-1.5 text-left text-xs text-[#ffb4b4] sm:text-sm" role="alert">
      {message}
    </p>
  );
}

export function LeadMagnetSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<"name" | "email" | "message", string>>>(
    {},
  );
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  const inputClassName =
    "h-[52px] w-full rounded-md bg-secondary-btn pl-12 pr-4 text-sm text-navbar-footer placeholder:text-navbar-footer/55 outline-none ring-0 focus:ring-2 focus:ring-primary-btn/40 sm:h-[56px] sm:text-base";

  const textareaClassName =
    "min-h-[120px] w-full resize-y rounded-md bg-secondary-btn pl-12 pr-4 py-3.5 text-sm text-navbar-footer placeholder:text-navbar-footer/55 outline-none ring-0 focus:ring-2 focus:ring-primary-btn/40 sm:min-h-[132px] sm:text-base";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    setSubmitAttempted(true);

    const fields = { name, email, message };
    const errors = validateLeadForm(fields);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="offer" aria-label="Free consultation" className="bg-primary-bg py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="rounded-2xl border border-white/10 bg-[#0a1440]/95 px-5 py-12 text-center sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <OfferBadge />

            <p className="mt-8 text-lg font-semibold text-text-primary sm:text-xl">
              {LEAD_MAGNET_COPY.successTitle}
            </p>

            <p className="mt-4 text-sm text-text-muted sm:text-base">
              {LEAD_MAGNET_COPY.successFallbackLead}{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary-btn underline transition-opacity hover:opacity-80"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="offer" aria-label="Free consultation" className="bg-primary-bg py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="rounded-2xl border border-white/10 bg-[#0a1440]/95 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <OfferBadge />

          <header className="mt-8 text-center">
            <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-tight tracking-tight text-text-primary">
              {LEAD_MAGNET_COPY.headlineLead}{" "}
              <span className="text-primary-btn">{LEAD_MAGNET_COPY.headlineAccent}</span>{" "}
              {LEAD_MAGNET_COPY.headlineTrail}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
              {LEAD_MAGNET_COPY.subtext}
            </p>

            <p className="mt-3 text-sm text-text-muted sm:text-base">
              <span aria-hidden="true">⚡ </span>
              {LEAD_MAGNET_COPY.scarcityLead}{" "}
              <span className="font-semibold text-primary-btn">
                {LEAD_MAGNET_COPY.scarcityAccent}
              </span>{" "}
              {LEAD_MAGNET_COPY.scarcityTrail}
            </p>
          </header>

          <form className="mt-8 sm:mt-10" onSubmit={handleSubmit} noValidate>
            <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="lead-website">Website</label>
              <input
                id="lead-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
              <div>
                <div className="relative">
                  <Image
                    src="/images/lead-magnet/user-icon-img.png"
                    alt=""
                    width={20}
                    height={20}
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
                  />
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={LEAD_MAGNET_COPY.namePlaceholder}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={inputClassName}
                    aria-invalid={submitAttempted && Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "lead-name-error" : undefined}
                  />
                </div>
                {submitAttempted ? (
                  <FieldError message={fieldErrors.name} id="lead-name-error" />
                ) : null}
              </div>

              <div>
                <div className="relative">
                  <Image
                    src="/images/lead-magnet/email-icon-img.png"
                    alt=""
                    width={20}
                    height={20}
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
                  />
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={LEAD_MAGNET_COPY.emailPlaceholder}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={inputClassName}
                    aria-invalid={submitAttempted && Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "lead-email-error" : undefined}
                  />
                </div>
                {submitAttempted ? (
                  <FieldError message={fieldErrors.email} id="lead-email-error" />
                ) : null}
              </div>
            </div>

            <div className="mt-4 lg:mt-5">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-4">
                  <MessageIcon />
                </span>
                <textarea
                  id="lead-message"
                  name="message"
                  rows={5}
                  placeholder={LEAD_MAGNET_COPY.messagePlaceholder}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className={textareaClassName}
                  aria-invalid={submitAttempted && Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? "lead-message-error" : undefined}
                />
              </div>
              {submitAttempted ? (
                <FieldError message={fieldErrors.message} id="lead-message-error" />
              ) : null}
            </div>

            {status === "error" ? (
              <p className="mt-4 text-center text-sm text-[#ffb4b4] sm:text-base" role="alert">
                {LEAD_MAGNET_COPY.errorMessage}{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary-btn underline transition-opacity hover:opacity-80"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            ) : null}

            <div className="mt-6 flex justify-center sm:mt-8">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-[52px] min-w-[min(100%,280px)] items-center justify-center rounded-md bg-primary-btn px-8 text-sm font-bold uppercase tracking-wide text-text-primary transition-colors hover:bg-[#0018cc] disabled:cursor-not-allowed disabled:opacity-70 sm:h-[56px] sm:min-w-[320px] sm:text-base lg:min-w-[360px]"
              >
                {status === "loading"
                  ? LEAD_MAGNET_COPY.submitLoadingLabel
                  : LEAD_MAGNET_COPY.submitLabel}
              </button>
            </div>

            <p className="mt-5 text-center text-xs leading-relaxed text-text-muted sm:text-sm">
              By submitting, you agree to our{" "}
              <Link
                href="/terms"
                className="text-primary-btn underline transition-opacity hover:opacity-80"
              >
                Terms and Conditions
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
