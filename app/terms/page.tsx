import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Sladjan Jeremic",
  description: "Terms of service for sladjanjeremic.com portfolio website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-primary-bg px-6 py-16 text-text-primary sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-wide text-text-muted transition-opacity hover:opacity-80"
        >
          ← Back to home
        </Link>

        <h1 className="mt-8 text-3xl font-bold sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
          This is a placeholder terms of service page for the SLADJANDEV portfolio website.
          By using this site and submitting inquiries, you agree to the terms outlined below.
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-text-muted sm:text-base">
          <h2 className="text-xl font-semibold text-text-primary">Use of the website</h2>
          <p>
            This website is provided for informational purposes and to facilitate project
            inquiries. Content may be updated without prior notice.
          </p>

          <h2 className="text-xl font-semibold text-text-primary">Project inquiries</h2>
          <p>
            Submitting a form or email does not create a binding contract. Project scope,
            pricing, and timelines are agreed separately before work begins.
          </p>

          <h2 className="text-xl font-semibold text-text-primary">Limitation of liability</h2>
          <p>
            The site is provided as-is. I am not liable for any indirect damages arising from
            use of this website or reliance on its content.
          </p>

          <h2 className="text-xl font-semibold text-text-primary">Contact</h2>
          <p>
            For questions about these terms, email{" "}
            <a
              href="mailto:sladjanjeremi123@gmail.com"
              className="text-primary-btn underline transition-opacity hover:opacity-80"
            >
              sladjanjeremi123@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
