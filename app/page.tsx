import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { WorkSection } from "@/components/work-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grain" aria-hidden="true" />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ServicesSection />
      <SiteFooter />
    </main>
  );
}
