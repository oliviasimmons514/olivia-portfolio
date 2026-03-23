import { FadeIn } from "@/components/fade-in";
import { experience, skills, tools } from "@/lib/content";

export function ResumeSection() {
  return (
    <section id="resume" className="section-space">
      <div className="page-shell">
        <FadeIn className="panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-label">Resume</p>
              <h2 className="section-title mt-4">A clean snapshot of what I bring to a project.</h2>
              <div className="mt-8 space-y-8">
                <div>
                  <p className="section-label">Skills</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[rgba(5,5,5,0.1)] bg-[rgba(255,255,255,0.8)] px-4 py-2 text-sm font-medium text-[rgba(5,5,5,0.76)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="section-label">Tools</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[rgba(5,5,5,0.1)] bg-ink px-4 py-2 text-sm font-medium text-[rgba(255,255,255,0.76)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="section-label">Experience</p>
              <div className="mt-5 space-y-4">
                {experience.map((item, index) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-[rgba(5,5,5,0.08)] bg-[rgba(255,255,255,0.82)] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl leading-tight tracking-[-0.05em] text-ink">{item.title}</h3>
                      <span className="text-sm font-semibold text-accent">0{index + 1}</span>
                    </div>
                    <p className="mt-3">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
