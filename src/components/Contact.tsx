import Section from "@/components/Section";
import type { LinkItem } from "@/data/portfolio";

interface ContactProps {
  message: string;
  links: LinkItem[];
  resumeAvailable: boolean;
}

function isResumeLink(link: LinkItem): boolean {
  return link.href === "/resume.pdf";
}

export default function Contact({ message, links, resumeAvailable }: ContactProps) {
  return (
    <Section id="contact" label="Contact" title="Contact" description="Open to collaborations, internships, and software engineering opportunities.">
      <p>{message}</p>
      <ul className="mt-4 flex flex-wrap gap-2" role="list">
        {links.map((link) => {
          if (isResumeLink(link) && !resumeAvailable) {
            return (
              <li key={link.label}>
                <span className="muted-link" aria-disabled="true">
                  Resume (upload pending)
                </span>
              </li>
            );
          }

          return (
            <li key={link.label}>
              <a
                href={link.href}
                className="accent-link"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.external ? `${link.label} (opens in new tab)` : link.label}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-slate-500">Update `public/profile.jpg` and `public/resume.pdf` with your final files.</p>
    </Section>
  );
}
