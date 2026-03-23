import { FadeIn } from "@/components/fade-in";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="services" className="section-space">
      <div className="page-shell">
        <FadeIn>
          <p className="section-label">Services</p>
          <h2 className="section-title mt-4">What I do.</h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={index * 0.06}
              className="panel rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(202,92,59,0.3)]"
            >
              <p className="section-label">0{index + 1}</p>
              <h3 className="mt-4 text-2xl leading-tight tracking-[-0.05em]">{service.title}</h3>
              <p className="mt-4">{service.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
