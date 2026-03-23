"use client";

import Link from "next/link";

import { FadeIn } from "@/components/fade-in";

export function HeroSection() {
  return (
    <section id="top" className="section-space relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(202,92,59,0.18),transparent_62%)] blur-3xl"
      />

      <div className="page-shell relative z-10">
        <FadeIn className="max-w-fit rounded-full border border-[rgba(5,5,5,0.08)] bg-[rgba(255,255,255,0.7)] px-4 py-2">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(5,5,5,0.56)]">
            Olivia Simmons
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-8 max-w-4xl">
          <h1 className="font-display text-[3.1rem] font-semibold leading-[0.9] tracking-[-0.08em] text-ink sm:text-[4.5rem] lg:text-[6.25rem]">
            Intentional content. Powerful storytelling.
          </h1>
        </FadeIn>

        <FadeIn delay={0.16} className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-base text-[rgba(5,5,5,0.78)] sm:text-lg">
              iPhone Videographer | Content Creator | Social Media Storyteller
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="#work"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              View Work
            </Link>
            <a
              href="https://www.instagram.com/oliviasimmonscreative?igsh=MWN2cDlrNHY3ZW40cg=="
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[rgba(5,5,5,0.12)] bg-[rgba(255,255,255,0.72)] px-6 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02]"
            >
              View Wedding & Church Instagram
            </a>
            <a
              href="https://www.instagram.com/freedomlifeya?igsh=N2tiNHVtYTJmMmpt"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[rgba(5,5,5,0.12)] bg-[rgba(255,255,255,0.72)] px-6 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02]"
            >
              View Freedom Life YA Instagram
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.24} className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            "Social-first editing",
            "Brand, wedding, and church work",
            "Clean visuals with real energy"
          ].map((item) => (
            <div key={item} className="rounded-[1.6rem] border border-[rgba(5,5,5,0.08)] bg-[rgba(255,255,255,0.68)] p-5">
              <p className="text-sm text-[rgba(5,5,5,0.72)]">{item}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
