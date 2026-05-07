import Image from "next/image";

import type { HeroContent } from "@/data/portfolio";

interface HeroProps {
  data: HeroContent;
  profileImageAvailable: boolean;
}

function linkTone(index: number): string {
  if (index % 3 === 0) return "text-foreground";
  if (index % 3 === 1) return "text-cyan";
  return "text-green";
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
    <div>
      <h1 className="text-[44px] leading-[0.95] font-bold text-foreground mb-1 tracking-[-0.02em]">{data.name}</h1>
      <p className="text-[13px] text-muted mb-3">{data.headline}</p>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5">
        {data.links.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={`text-xs underline hover:text-muted ${linkTone(index)}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {profileImageAvailable ? (
        <Image
          src={data.profileImage.src}
          alt={data.profileImage.alt}
          width={1280}
          height={1280}
          className="rounded-lg mb-2 w-full max-h-[580px] object-cover"
          unoptimized
          priority
        />
      ) : (
        <div className="rounded-lg mb-2 w-full h-[420px] bg-surface border border-border flex items-center justify-center text-4xl font-semibold text-muted">
          {initials(data.name)}
        </div>
      )}

      <p className="text-[12px] text-muted leading-relaxed">
        Based in {data.location}. Open to research collaborations, software engineering roles, and internships.
      </p>
    </div>
  );
}
