export const CONTACT_EMAIL = "sladjanjeremi123@gmail.com";
export const OFFER_ANCHOR = "#offer";

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
  headlineLine1: "WEB DEVELOPER FOR MODERN",
  headlineLine2Prefix: "BUSINESS ",
  headlineAccent: "WEBSITES",
  subheadline:
    "I build fast, modern websites that look professional, load quickly, and help your business turn visitors into paying clients.",
} as const;

export const CAROUSEL_LOGOS = [
  { src: "/images/carousel/python-img.png", alt: "Python", width: 41, height: 37 },
  { src: "/images/carousel/github-img.png", alt: "GitHub", width: 41, height: 36 },
  { src: "/images/carousel/webflow-img.png", alt: "Webflow", width: 37, height: 37 },
  { src: "/images/carousel/figma-img.png", alt: "Figma", width: 41, height: 37 },
  { src: "/images/carousel/jupyter-img.png", alt: "Jupyter", width: 60, height: 45 },
] as const;

export const GITHUB_PROFILE_URL = "https://github.com/SladjanJ/SladjanJ";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sladjan-jeremic";
export const CV_URL = "/Europass%20CV%20template.pdf";

export const ABOUT_COPY = {
  nameBadge: "Jeremic Sladjan",
  headingLead: "About",
  headingAccent: "me",
  subheadline:
    "Hi, I'm Slađan – Web Developer specializing in Webflow & AI-assisted builds",
  paragraphs: [
    "ITAcademy certified Python/AI specialist (98.6% accuracy product classifier)",
    "Delivered 5★ Upwork projects:",
  ],
  bullets: [
    "Conversion-focused Webflow sites",
    "Data analysis & ML model deployment",
    "WordPress → Webflow migrations",
  ],
  outro: [
    "100% client satisfaction | 3x average sales increase",
    "Let's build high-performing websites for your business.",
  ],
  stats: [
    { value: "5", accent: "★", label: "Upwork reviews" },
    { value: "100", accent: "%", label: "Client satisfaction" },
    { value: "3", accent: "x", label: "Faster Webflow sites" },
  ],
  locationCard: {
    title: "Located in",
    rows: [
      { icon: "📍", label: "LOCATED IN", value: "Podgorica, Montenegro (CET)" },
      { icon: "🌐", label: "SERVING", value: "EU Remote Clients via Upwork" },
      { icon: "🎓", label: "SPECIALTIES", value: "Python ML (98.6%) | Webflow Dev" },
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
    "A selection of projects that show how I design, build, and deliver websites and web solutions for real business goals.",
} as const;

export const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    description:
      "Custom-coded portfolio built with Next.js, TypeScript, and Tailwind — designed in Figma and optimized for conversions.",
    href: "#hero",
    external: false,
    image: {
      src: "/images/projects/first-project-img.png",
      alt: "Personal Portfolio Website screenshot",
    },
    tags: [{ label: "Next.js" }, { label: "Figma", icon: "/images/projects/figma-tag-icon.png" }],
  },
  {
    title: "Product Classifier",
    description:
      "ML model with 98.6% accuracy — Python, pandas, scikit-learn, and TF-IDF for intelligent product categorization.",
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
  badge: "Limited-time offer",
  headlineLead: "Get",
  headlineAccent: "50% OFF",
  headlineTrail: "Your Website Project",
  subtext:
    "Conversion-focused websites built to grow your business. 50% off for the first 10 clients — final price based on project scope.",
  scarcityLead: "First",
  scarcityAccent: "10",
  scarcityTrail: "clients only",
  namePlaceholder: "Enter your name",
  emailPlaceholder: "Enter your email address",
  messagePlaceholder: "What do you need?",
  submitLabel: "Get My 50% Discount →",
  submitLoadingLabel: "Sending…",
  footnote: "By submitting, you agree to our Terms and Conditions",
  successTitle: "Thanks! I'll get back to you within 24 hours.",
  successFallbackLead: "Need a faster response? Email me directly at",
  errorMessage:
    "Something went wrong. Please try again or email me directly at",
} as const;

export const CONTACT_COPY = {
  heading: "Start your web project today",
  subtext:
    "Free 15-minute consultation. Get a site that sells — plus guidance on performance and analytics.",
  ctaLabel: "Book Free Consultation →",
  ctaHref: OFFER_ANCHOR,
} as const;

export const SERVICES_COPY = {
  eyebrow: "Complete digital solutions for growing your business",
  heading: "Web Development & Digital Solutions",
  ctaLabel: "Contact Me",
  ctaHref: OFFER_ANCHOR,
} as const;

export const SERVICES = [
  {
    number: "1",
    iconSrc: "/images/services/first-cookie-icon.svg",
    title: "Landing page design",
    description:
      "Modern, conversion-focused landing page designs that capture attention, communicate value, and guide users toward action.",
  },
  {
    number: "2",
    iconSrc: "/images/services/second-code-icon.svg",
    title: "Landing page development",
    description:
      "Fast, responsive websites and Webflow pages built with clean structure, optimized performance, and scalable components.",
  },
  {
    number: "3",
    iconSrc: "/images/services/third-database-icon.svg",
    title: "CRM optimization",
    description:
      "Streamlined CRM setups and workflows to manage leads, automate processes, and improve customer relationships.",
  },
  {
    number: "4",
    iconSrc: "/images/services/fourth-analytic-icon.svg",
    title: "Analytics analysis",
    description:
      "In-depth analysis of user behavior and site performance to optimize conversions and support data-driven decisions.",
  },
] as const;
