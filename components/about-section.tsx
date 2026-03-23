import Image from "next/image";

import { FadeIn } from "@/components/fade-in";

export function AboutSection() {
  return (
    <section id="about" className="section-space">
      <div className="page-shell grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <FadeIn className="panel overflow-hidden rounded-[2rem] p-5 sm:p-7">
          <div className="overflow-hidden rounded-[1.6rem] border border-dashed border-[rgba(5,5,5,0.14)] bg-[linear-gradient(160deg,rgba(255,255,255,0.8),rgba(228,222,211,0.72))] p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-[rgba(255,255,255,0.68)]">
              <Image
                src="/images/IMG_1251.JPG"
                alt="Olivia Simmons"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <p className="section-label">About Me</p>
          <h2 className="section-title mt-4">About.</h2>
          <div className="mt-8 space-y-5">
            <p>
              I&apos;m Olivia Simmons, a 19-year-old content creator specializing in short-form video, iPhone videography, and clean, story-driven visuals.
            </p>
            <p>
              I&apos;ve created content for businesses like Oola Bowls Intercourse and work on the main social media account for Freedom Life Church, where I also help lead the young adults creative team.
            </p>
            <p>
              I also create wedding content for couples who want their moments captured in a way that feels authentic, emotional, and easy to share.
            </p>
            <p>
              I focus on creating content that feels intentional, modern, and engaging. My work is rooted in strong visual storytelling and a desire to reflect excellence and purpose in everything I create, guided by my faith in Jesus.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
