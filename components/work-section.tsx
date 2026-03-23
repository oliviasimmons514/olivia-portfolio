"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { FadeIn } from "@/components/fade-in";
import { type PortfolioItem, portfolioItems } from "@/lib/content";

function WorkModal({
  item,
  onClose
}: {
  item: PortfolioItem | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-[rgba(5,5,5,0.7)] p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="panel w-full max-w-3xl overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.1)] bg-[#faf8f3]"
          >
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className={`relative bg-gradient-to-br ${item.accent} p-5 sm:p-6`}>
                <div className="absolute inset-5 rounded-[1.6rem] border border-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.4)] backdrop-blur-sm" />
                <div className="relative aspect-[9/16] overflow-hidden rounded-[1.6rem] border border-[rgba(5,5,5,0.06)] bg-ink shadow-soft">
                  <video src={item.mediaSrc} controls className="h-full w-full object-cover" playsInline />
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="section-label">{item.category}</p>
                  <h3 className="mt-3 text-3xl leading-tight tracking-[-0.05em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-5">{item.description}</p>
                </div>
                <div className="mt-8 space-y-5">
                  <div className="rounded-[1.5rem] border border-[rgba(5,5,5,0.08)] bg-[rgba(255,255,255,0.8)] p-5">
                    <p className="section-label">Goal</p>
                    <p className="mt-2 text-[rgba(5,5,5,0.72)]">{item.goal}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-[rgba(5,5,5,0.08)] bg-[rgba(255,255,255,0.8)] p-5">
                    <p className="section-label">Focus</p>
                    <p className="mt-2 text-[rgba(5,5,5,0.72)]">{item.stats}</p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-[rgba(5,5,5,0.1)] px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function WorkSection() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="work" className="section-space">
      <div className="page-shell">
        <FadeIn className="flex flex-col gap-4">
          <p className="section-label">Work</p>
          <h2 className="section-title max-w-3xl">Content across brands, weddings, church, and ads.</h2>
          <p className="max-w-md">
            A look at the kind of short-form work I create and the stories I like to tell.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.07}>
              <div className="group panel flex w-full flex-col overflow-hidden rounded-[2rem] text-left">
                <div className={`relative aspect-[9/16] overflow-hidden bg-gradient-to-br ${item.accent} p-4`}>
                  <div className="absolute inset-4 rounded-[1.5rem] border border-[rgba(255,255,255,0.62)] bg-[rgba(255,255,255,0.22)] backdrop-blur-sm transition duration-500 group-hover:scale-[1.02]" />
                  <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-[rgba(5,5,5,0.06)] bg-ink shadow-soft transition duration-500 group-hover:-translate-y-1">
                    <video src={item.mediaSrc} controls className="h-full w-full object-cover" playsInline />
                  </div>
                </div>
                <div className="p-5">
                  <p className="section-label">{item.category}</p>
                  <h3 className="mt-2 text-2xl leading-tight tracking-[-0.05em] text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-[rgba(5,5,5,0.62)]">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveItem(item)}
                      className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <WorkModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
