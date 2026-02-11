import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const projects = [
  { image: work1, title: "Brand Identity System", category: "Branding" },
  { image: work2, title: "SaaS Dashboard", category: "Web Design" },
  { image: work3, title: "Poster Series", category: "Print" },
  { image: work4, title: "Mobile App UI", category: "UI/UX" },
  { image: work5, title: "Product Packaging", category: "Print" },
  { image: work6, title: "Social Campaign", category: "Digital" },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-[0.3em] text-primary">Portfolio</p>
          <h2 className="mb-16 text-4xl font-bold tracking-tight md:text-5xl">
            Selected <span className="text-primary neon-text">work.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative cursor-pointer overflow-hidden border border-border/50"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{project.category}</p>
                <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
