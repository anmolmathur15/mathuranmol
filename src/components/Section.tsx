import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ id, label, title, description, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section-card">
      <header>
        <p className="section-label">{label}</p>
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
        {description ? <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p> : null}
      </header>
      <div className="mt-4 text-sm leading-6 text-slate-700">{children}</div>
    </section>
  );
}
