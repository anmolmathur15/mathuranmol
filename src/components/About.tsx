import Section from "@/components/Section";

interface AboutProps {
  text: string;
}

export default function About({ text }: AboutProps) {
  return (
    <Section
      id="about"
      label="About"
      title="About"
      description="Computer Engineering graduate research and software development focus."
    >
      <p>{text}</p>
    </Section>
  );
}
