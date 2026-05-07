import Section from "@/components/Section";
import type { ExperienceItem } from "@/data/portfolio";

interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Experience"
      description="Roles across research and product engineering with emphasis on reliability and practical delivery."
    >
      <ul className="space-y-3" role="list">
        {items.map((item) => (
          <li key={`${item.title}-${item.organization}`}>
            <article className="entry-card">
              <header className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="entry-title">{item.title}</h3>
                  <p className="entry-org">{item.organization}</p>
                </div>
              </header>

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
