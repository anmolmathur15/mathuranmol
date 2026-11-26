import { access } from "node:fs/promises";
import path from "node:path";

import Hero from "@/components/Hero";
import { portfolioData, type TimelineItem } from "@/data/portfolio";

async function publicFileExists(fileName: string): Promise<boolean> {
  try {
    await access(path.join(process.cwd(), "public", fileName));
    return true;
  } catch {
    return false;
  }
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="timeline" role="list">
      {items.map(({ title, organization, period }) => (
        <li key={title}>
          <span className="timeline-title">{title}</span>
          <span>{organization}</span>
          <span className="timeline-period">{period}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function Home() {
  const { hero, projects, experience, education, skills } = portfolioData;
  const profileImageAvailable = await publicFileExists(hero.profileImage.src);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main
        id="main-content"
        className="portfolio"
        tabIndex={-1}
      >
        <Hero data={hero} profileImageAvailable={profileImageAvailable} />

        <section className="portfolio-section" aria-labelledby="experience">
          <h2 id="experience">Experience</h2>
          <Timeline items={experience} />
        </section>

        <section className="portfolio-section" aria-labelledby="education">
          <h2 id="education">Education</h2>
          <Timeline items={education} />
        </section>

        <section className="portfolio-section" aria-labelledby="projects">
          <h2 id="projects">Projects</h2>
          <div className="project-grid">
            {projects.map(({ title, summary, href }) => (
              <article key={href} className="project">
                <h3><a href={href}>{title}</a></h3>
                <p>{summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section" aria-labelledby="skills">
          <h2 id="skills">Skills</h2>
          <dl className="skills-grid">
            {skills.map(({ label, items }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </>
  );
}
