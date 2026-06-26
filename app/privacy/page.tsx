import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Sladjan Jeremic",
  description: "Privacy policy for sladjanjeremic.com portfolio website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-primary-bg px-6 py-16 text-text-primary sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-wide text-text-muted transition-opacity hover:opacity-80"
        >
          ← Back to home
        </Link>

        <h1 className="mt-8 text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
          This is a placeholder privacy policy for the SLADJANDEV portfolio website. It
          explains how personal information may be collected and used when you contact me
          through the site or submit an inquiry form.
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-text-muted sm:text-base">
          <h2 className="text-xl font-semibold text-text-primary">Information we collect</h2>
          <p>
            When you submit a form or send an email, you may provide your name, email
            address, and project details. This information is used only to respond to your
            inquiry.
          </p>

          <h2 className="text-xl font-semibold text-text-primary">How we use your data</h2>
          <p>
            Your information is used to communicate about your project, provide quotes, and
            deliver requested services. I do not sell your personal data to third parties.
          </p>

          <h2 className="text-xl font-semibold text-text-primary">Contact</h2>
          <p>
            For privacy-related questions, email{" "}
            <a
              href="mailto:sladjanjeremi123@gmail.com"
              className="text-primary-btn underline transition-opacity hover:opacity-80"
            >
              sladjanjeremi123@gmail.com
            </a>
            .
          </p>
        </section>

        <section id="cookies" className="mt-12 scroll-mt-24 space-y-4">
          <h2 className="text-xl font-semibold text-text-primary">Cookies Settings</h2>
          <p className="text-sm leading-relaxed text-text-muted sm:text-base">
            This website uses minimal cookies required for basic functionality. In v1, no
            analytics or marketing cookies are enabled. You can manage browser cookie
            preferences through your browser settings.
          </p>
        </section>
      </div>
    </main>
  );
}
