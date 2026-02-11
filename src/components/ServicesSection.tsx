import { motion } from "framer-motion";
import { Palette, Monitor, PenTool, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Logos, color systems, and visual language that define your brand's DNA.",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Responsive, modern websites built for performance and visual impact.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Intuitive interfaces that delight users and drive conversions.",
  },
  {
    icon: Layers,
    title: "Print & Editorial",
    description: "Posters, packaging, and editorial layouts with meticulous attention to detail.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="border-y border-border/50 bg-card py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-[0.3em] text-primary">Services</p>
          <h2 className="mb-16 text-4xl font-bold tracking-tight md:text-5xl">
            What I <span className="text-primary neon-text">do.</span>
          </h2>
        </motion.div>

        <div className="grid gap-px bg-border/30 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card p-8 transition-colors hover:bg-secondary"
            >
              <service.icon
                className="mb-6 text-primary transition-all group-hover:neon-text"
                size={32}
                strokeWidth={1.5}
              />
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
