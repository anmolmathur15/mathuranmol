import Section from "@/components/Section";
import type { SkillGroup } from "@/data/portfolio";

interface SkillsProps {
  items: SkillGroup[];
}

export default function Skills({ items }: SkillsProps) {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Skills"
      description="Grouped by engineering domain for quick technical review."
    >
      <ul className="grid gap-3 md:grid-cols-2" role="list">
        {items.map((group) => (
          <li key={group.category}>
            <article className="entry-card h-full">
              <h3 className="entry-title">{group.category}</h3>
              <p className="mt-1 text-xs leading-5 text-slate-600">{group.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
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
