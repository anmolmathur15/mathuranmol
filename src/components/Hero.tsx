import Image from "next/image";

import type { HeroContent } from "@/data/portfolio";

interface HeroProps {
  data: HeroContent;
  profileImageAvailable: boolean;
}

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Hero({ data, profileImageAvailable }: HeroProps) {
  return (
    <header className="hero">
      <div>
        <h1>{data.name}</h1>
        <p className="hero-intro">{data.intro}</p>
        <p className="hero-location">{data.location}</p>
        <div className="contact-links">
          {data.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {profileImageAvailable ? (
        <Image
          src={data.profileImage.src}
          alt={data.profileImage.alt}
          width={280}
          height={280}
          className="hero-portrait"
          priority
        />
      ) : (
        <div className="hero-portrait portrait-fallback" aria-hidden="true">
          {initials(data.name)}
        </div>
      )}
    </header>
  );
}
