import Section from "@/components/Section";
import type { ProjectItem } from "@/data/portfolio";

interface ProjectsProps {
  items: ProjectItem[];
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Selected Projects"
      description="Research and engineering work presented with concise technical scope."
    >
      <ul className="grid gap-3 sm:grid-cols-2" role="list">
        {items.map((item, index) => (
          <li key={item.title}>
            <article className="entry-card h-full">
              <header className="flex items-start justify-between gap-2">
                <h3 className="entry-title">{item.title}</h3>
                <span className="pill">P{String(index + 1).padStart(2, "0")}</span>
              </header>

              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-sky-700">{item.type}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.summary}</p>

              <ul className="mt-3 space-y-1.5" role="list">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="bullet-row">
                    <span className="bullet-dot" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
