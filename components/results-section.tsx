import { FadeIn } from "@/components/fade-in";
import { results } from "@/lib/content";

export function ResultsSection() {
  return (
    <section id="results" className="section-space">
      <div className="page-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn className="panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <p className="section-label">Results / Value</p>
          <h2 className="section-title mt-4">The content should look beautiful, but it also needs to do something.</h2>
          <p className="mt-6 max-w-xl">
            This section is framed around outcomes, so when you add your real metrics later the site will already
            position your work around engagement, story, reach, and growth.
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {results.map((result, index) => (
            <FadeIn key={result.value} delay={index * 0.07} className="panel rounded-[1.8rem] p-6">
              <p className="text-3xl font-semibold tracking-[-0.06em] text-accent sm:text-4xl">{result.value}</p>
              <p className="mt-3">{result.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
