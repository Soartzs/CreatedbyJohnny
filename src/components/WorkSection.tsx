import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const projects = [
  { image: work1, title: "Brand Identity System", category: "Branding", span: "lg:col-span-2 lg:row-span-2" },
  { image: work2, title: "SaaS Dashboard", category: "Web Design", span: "" },
  { image: work3, title: "Poster Series", category: "Print", span: "" },
  { image: work4, title: "Mobile App UI", category: "UI/UX", span: "" },
  { image: work5, title: "Product Packaging", category: "Print", span: "" },
  { image: work6, title: "Social Campaign", category: "Digital", span: "lg:col-span-2" },
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative cursor-pointer overflow-hidden ${project.span}`}
            >
              <div className="relative aspect-[4/3] h-full w-full overflow-hidden border border-border/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="font-mono text-xs uppercase tracking-widest text-primary">{project.category}</p>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">{project.title}</h3>
                  </div>
                </div>
                {/* Corner accent */}
                <div className="absolute left-0 top-0 h-0 w-0 border-l-2 border-t-2 border-primary/0 transition-all duration-300 group-hover:h-8 group-hover:w-8 group-hover:border-primary" />
                <div className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-r-2 border-primary/0 transition-all duration-300 group-hover:h-8 group-hover:w-8 group-hover:border-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
