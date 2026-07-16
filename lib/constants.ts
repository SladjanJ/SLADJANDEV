export const CONTACT_EMAIL = "sladjanjeremi123@gmail.com";
export const OFFER_ANCHOR = "#offer";

export const HEADER_CTA = "Start Your Project";

export const HEADER_NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT ME", href: "#about" },
  { label: "SERVICES", href: "#services" },
] as const;

export const FOOTER_NAV_LINKS = [
  { label: "HOME", href: "#hero" },
  ...HEADER_NAV_LINKS,
] as const;

export const HERO_COPY = {
  headlineLine1: "WEBSITES THAT TURN",
  headlineLine2Prefix: "VISITORS INTO ",
  headlineAccent: "CLIENTS",
  subheadline:
    "Full-stack web developer building fast websites and web apps with Next.js, React, and Supabase — plus Webflow when it fits your project best.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "View My Work",
} as const;

export const CAROUSEL_LOGOS = [
  {
    src: "/images/carousel/python-img.png",
    alt: "Python",
    width: 41,
    height: 37,
    href: "https://www.python.org/",
  },
  {
    src: "/images/carousel/github-img.png",
    alt: "GitHub",
    width: 41,
    height: 36,
    href: "https://github.com/SladjanJ/SladjanJ",
  },
  {
    src: "/images/carousel/webflow-img.png",
    alt: "Webflow",
    width: 37,
    height: 37,
    href: "https://webflow.com/",
  },
  {
    src: "/images/carousel/figma-img.png",
    alt: "Figma",
    width: 41,
    height: 37,
    href: "https://www.figma.com/",
  },
  {
    src: "/images/carousel/jupyter-img.png",
    alt: "Jupyter",
    width: 60,
    height: 45,
    href: "https://jupyter.org/",
  },
] as const;

export const GITHUB_PROFILE_URL = "https://github.com/SladjanJ/SladjanJ";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sladjan-jeremic";
export const CV_URL = "/Europass%20CV%20template.pdf";

export const ABOUT_COPY = {
  nameBadge: "Sladjan Jeremic",
  headingLead: "About",
  headingAccent: "me",
  subheadline:
    "Hi, I'm Slađan – Full-Stack Web Developer (Next.js, React & Supabase)",
  paragraphs: [
    "ITAcademy certified Python/AI specialist (92.6% accuracy product classifier)",
    "What clients get:",
  ],
  bullets: [
    "Custom web apps & landing pages with modern stacks",
    "Webflow development when no-code is the right fit",
    "WordPress → Webflow migrations",
  ],
  outro: [
    "I work with EU businesses remotely — clear communication, fast delivery, and websites built to convert.",
  ],
  stats: [
    { value: "92.6", accent: "%", label: "ML model accuracy" },
    { value: "24", accent: "h", label: "Average response time" },
    { value: "3", accent: "+", label: "Live projects shipped" },
  ],
  ctaPrimary: "Get Free Consultation",
  ctaCv: "Download CV",
  locationCard: {
    title: "Located in",
    rows: [
      { icon: "📍", label: "LOCATED IN", value: "Podgorica, Montenegro (CET)" },
      { icon: "🌐", label: "SERVING", value: "EU Remote Clients via Upwork" },
      { icon: "🎓", label: "SPECIALTIES", value: "Full-Stack Web Dev | Webflow" },
    ],
    connectLabel: "LET'S CONNECT",
    connectLinks: [
      { label: "GitHub", href: GITHUB_PROFILE_URL, external: true },
      { label: "LinkedIn", href: LINKEDIN_URL, external: true },
      { label: "Email", href: `mailto:${CONTACT_EMAIL}`, external: false },
    ],
  },
} as const;

export const PROJECTS_COPY = {
  label: "WORK",
  headingLead: "Featured",
  headingAccent: "work",
  description:
    "Real projects — from booking apps to ML tools — built with modern stacks and a focus on usability and business results.",
  ctaLabel: "View on GitHub",
} as const;

export const PROJECTS = [
  {
    title: "PlaySlot",
    description:
      "Web app for booking football pitch time slots — built for the Balkan market with real-time availability, responsive UI, and deployed on Vercel.",
    href: "https://play-slot-web-app.vercel.app/",
    external: true,
    image: {
      src: "/images/projects/first-project-img.png",
      alt: "PlaySlot football booking web app screenshot",
    },
    tags: [
      {
        label: "Next.js",
        icon: "/images/projects/nextjs-tag-icon.svg",
        href: "https://nextjs.org",
      },
      {
        label: "Supabase",
        icon: "/images/projects/supabase-tag-icon.svg",
        href: "https://supabase.com",
      },
    ],
  },
  {
    title: "Product Classifier",
    description:
      "ML model with 92.6% accuracy — Python, pandas, scikit-learn, and TF-IDF for intelligent product categorization.",
    href: GITHUB_PROFILE_URL,
    external: true,
    image: {
      src: "/images/projects/second-project-img.png",
      alt: "Product Classifier project",
    },
    tags: [
      { label: "Python", icon: "/images/projects/python-tag-icon.png" },
      { label: "Machine Learning", icon: "/images/projects/machine-learning-tag-icon.png" },
    ],
  },
  {
    title: "Figma Prototypes",
    description:
      "UI/UX design for web apps — responsive layouts focused on clarity, usability, and conversion.",
    href: "https://www.figma.com/design/1Rgq5wYbcwAyvudZZZxXnX/Portfolio?node-id=0-1&t=E9MIP1vKsUzDnazt-1",
    external: true,
    image: {
      src: "/images/projects/third-project-img.png",
      alt: "Figma prototypes",
    },
    tags: [{ label: "Figma", icon: "/images/projects/figma-tag-icon.png" }],
  },
] as const;

export const FOOTER_COPY = {
  copyright: "© 2026 Sladjan Jeremic. All rights reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Settings", href: "/privacy#cookies" },
  ],
} as const;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    external: true,
    icon: "linkedin" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/s.jeremic_05/?hl=en",
    external: true,
    icon: "instagram" as const,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
    icon: "email" as const,
  },
  {
    label: "GitHub",
    href: GITHUB_PROFILE_URL,
    external: true,
    icon: "github" as const,
  },
] as const;

export const LEAD_MAGNET_COPY = {
  badge: "Free Consultation",
  headlineLead: "Start Your",
  headlineAccent: "Web Project",
  headlineTrail: "Today",
  subtext:
    "Tell me about your business and goals. I'll reply within 24 hours with a clear plan and the best solution for your website or web application.",
  scarcityLead: "Fast response • Clear communication •",
  scarcityAccent: "Modern development",
  scarcityTrail: "",
  namePlaceholder: "Enter your name",
  emailPlaceholder: "Enter your email address",
  messagePlaceholder: "Describe your project…",
  submitLabel: "Send My Inquiry →",
  submitLoadingLabel: "Sending…",
  footnote: "By submitting, you agree to our Terms and Conditions",
  successTitle: "Thanks! I'll get back to you within 24 hours.",
  successFallbackLead: "Need a faster response? Email me directly at",
  errorMessage:
    "Something went wrong. Please try again or email me directly at",
} as const;

export const CONTACT_COPY = {
  heading: "Ready to grow online?",
  subtext:
    "Whether you need a custom web app, landing page, or Webflow site — let's talk about your goals and find the right approach.",
  ctaLabel: "Send My Inquiry →",
  ctaHref: OFFER_ANCHOR,
} as const;

export const SERVICES_COPY = {
  eyebrow: "From landing page to full web app — built for results",
  heading: "What I Build For Clients",
  ctaLabel: "Start Your Project →",
  ctaHref: OFFER_ANCHOR,
} as const;

export const SERVICES = [
  {
    number: "1",
    iconSrc: "/images/services/second-code-icon.svg",
    title: "Full-stack web development",
    description:
      "Next.js, React, and Supabase — from landing pages to full web apps with clean code, fast load times, and SEO-ready structure.",
  },
  {
    number: "2",
    iconSrc: "/images/services/first-cookie-icon.svg",
    title: "Landing pages & responsive UI",
    description:
      "Conversion-focused pages that guide visitors toward action — built with modern frameworks or Webflow when it fits best.",
  },
  {
    number: "3",
    iconSrc: "/images/services/third-database-icon.svg",
    title: "Webflow development & migration",
    description:
      "Custom Webflow sites and WordPress → Webflow migrations — faster, easier to manage, without losing content or design quality.",
  },
  {
    number: "4",
    iconSrc: "/images/services/fourth-analytic-icon.svg",
    title: "Performance & analytics",
    description:
      "Core Web Vitals, analytics setup, and clear metrics so you know what's working and what to improve.",
  },
] as const;
