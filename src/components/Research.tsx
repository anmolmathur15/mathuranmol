import Section from "@/components/Section";

interface ResearchProps {
  summary: string;
  points: string[];
}

export default function Research({ summary, points }: ResearchProps) {
  return (
    <Section id="research" label="Research" title="Research / Academic Work" description={summary}>
      <ul className="space-y-2" role="list">
        {points.map((point) => (
          <li key={point} className="bullet-row">
            <span className="bullet-dot" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
