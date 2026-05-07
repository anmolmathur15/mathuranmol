import { access } from "node:fs/promises";
import path from "node:path";

import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import { portfolioData } from "@/data/portfolio";

async function publicFileExists(fileName: string): Promise<boolean> {
  try {
    await access(path.join(process.cwd(), "public", fileName));
    return true;
  } catch {
    return false;
  }
}

export default async function Home() {
  const profileImageAvailable = await publicFileExists("profile.jpg");

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main
        id="main-content"
        className="h-full flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 p-6 sm:p-8 lg:p-12 max-w-[1500px] mx-auto py-10 sm:py-14 lg:py-10 lg:min-h-screen"
      >
        <div className="lg:w-[420px] shrink-0 flex flex-col">
          <Hero
            data={portfolioData.hero}
            profileImageAvailable={profileImageAvailable}
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <Sidebar data={portfolioData} />
        </div>
      </main>
    </div>
  );
}
