import type { PortfolioData } from "@/data/portfolio";

interface SidebarProps {
  data: PortfolioData;
}

interface TimelineItem {
  title: string;
  period: string;
  body: string;
}

function toTimeline(title: string, summary: string, organization: string): TimelineItem {
  const match = title.match(/^(.*)\s\(([^)]+)\)$/);
  if (!match) {
    return {
      title,
      period: "",
      body: `${organization}. ${summary}`
    };
  }

  return {
    title: match[1],
    period: match[2],
    body: `${organization}. ${summary}`
  };
}

function firstHighlight(highlights: string[]): string {
  return highlights[0] ?? "";
}

export default function Sidebar({ data }: SidebarProps) {
  const workItems = data.experience.map((item) => toTimeline(item.title, item.summary, item.organization));

  return (
    <div className="flex flex-col">
      <div className="hidden lg:block mb-8 space-y-1">
        <p className="text-[13px] text-foreground leading-relaxed">
          <strong>ABOUT</strong> {data.about}
        </p>
        <p className="text-[13px] text-foreground leading-relaxed">
          <span className="font-bold text-muted">In progress:</span> {data.inProgress}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h2 className="section-heading">Education</h2>
          {data.education.map((item) => (
            <div key={`${item.degree}-${item.period}`} className="line-block">
              <div className="flex justify-between items-baseline gap-3 mb-0.5">
                <p className="text-[13px] font-bold text-foreground">{item.degree}</p>
                <p className="text-[11px] text-muted shrink-0">{item.period}</p>
              </div>
              <p className="text-[13px] text-foreground leading-relaxed">{item.institution}</p>
              <p className="text-[12px] text-muted mt-1">{item.notes[0]}</p>
            </div>
          ))}

          <h2 className="section-heading pt-1">Skills</h2>
          {data.skills.map((group) => (
            <div key={group.category} className="line-block">
              <p className="text-[13px] text-foreground leading-relaxed">
                <strong>{group.category}:</strong> {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h2 className="section-heading">Work</h2>
          {workItems.map((item) => (
            <div key={`${item.title}-${item.period}`} className="line-block">
              <div className="flex justify-between items-baseline gap-3 mb-0.5">
                <p className="text-[13px] font-bold text-foreground">{item.title}</p>
                {item.period ? <p className="text-[11px] text-muted shrink-0">{item.period}</p> : null}
              </div>
              <p className="text-[13px] text-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}

          <h2 className="section-heading pt-1">Projects</h2>
          {data.projects.map((project) => (
            <div key={project.title} className="line-block">
              <p className="text-[13px] text-foreground leading-relaxed">
                <strong>{project.title}</strong> - {project.summary}
              </p>
              <p className="text-[12px] text-muted mt-1">{firstHighlight(project.highlights)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden mt-8 space-y-1">
        <p className="text-[13px] text-foreground leading-relaxed">
          <strong>ABOUT</strong> {data.about}
        </p>
        <p className="text-[13px] text-foreground leading-relaxed">
          <span className="font-bold text-muted">In progress:</span> {data.inProgress}
        </p>
      </div>
    </div>
  );
}
