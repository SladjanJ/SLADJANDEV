import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { GITHUB_PROFILE_URL, PROJECTS, PROJECTS_COPY } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="bg-primary-bg py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-text-muted">
            {PROJECTS_COPY.label}
          </p>

          <h2
            id="work-heading"
            className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase leading-tight tracking-tight text-text-primary"
          >
            {PROJECTS_COPY.headingLead}{" "}
            <span className="text-primary-btn">{PROJECTS_COPY.headingAccent}</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            {PROJECTS_COPY.description}
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button
            href={GITHUB_PROFILE_URL}
            variant="secondary-outline"
            iconSrc="/images/hero/eye-in-button.png"
            iconAlt=""
            target="_blank"
            rel="noopener noreferrer"
          >
            My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
