import Image from "next/image";
import Link from "next/link";
import type { PROJECTS } from "@/lib/constants";

type Project = (typeof PROJECTS)[number];

type ProjectCardProps = {
  project: Project;
};

function TagChip({ label, icon, href }: { label: string; icon?: string; href?: string }) {
  const className =
    "inline-flex items-center gap-1.5 rounded bg-white/10 px-2.5 py-1 text-xs font-medium text-text-primary transition-colors hover:bg-white/20";

  const content = (
    <>
      {icon ? (
        <Image src={icon} alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
      ) : null}
      {label}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`${label} website`}
      >
        {content}
      </Link>
    );
  }

  return <span className={className}>{content}</span>;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const linkProps = project.external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <article className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl bg-project-card transition-colors hover:bg-[#202d6b] sm:min-h-[480px] lg:min-h-[555px]">
      <div className="relative aspect-[16/10] shrink-0 sm:aspect-[5/3] lg:h-[280px] lg:aspect-auto">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-base font-bold uppercase leading-snug text-text-primary sm:text-lg">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-text-muted">{project.description}</p>

        <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between sm:pt-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagChip
                key={tag.label}
                label={tag.label}
                icon={"icon" in tag ? tag.icon : undefined}
                href={"href" in tag ? tag.href : undefined}
              />
            ))}
          </div>

          <Link
            href={project.href}
            className="shrink-0 text-sm font-semibold text-primary-btn transition-opacity hover:opacity-80"
            {...linkProps}
          >
            View project &gt;
          </Link>
        </div>
      </div>
    </article>
  );
}
