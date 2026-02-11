import { motion } from "framer-motion";
import selfPortrait from "@/assets/self-portrait.jpeg";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-16 lg:grid-cols-5"
        >
          {/* Image */}
          <div className="relative lg:col-span-2">
            <div className="relative overflow-hidden border border-border/50">
              <img
                src={selfPortrait}
                alt="Johnny's Portrait"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Neon accent line */}
            <div className="absolute -bottom-3 -right-3 h-full w-full border-b-2 border-r-2 border-primary/30" />
          </div>

          {/* Text */}
          <div className="lg:col-span-3">
            <p className="mb-2 font-mono text-sm uppercase tracking-[0.3em] text-primary">About</p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Design is not just what it looks like —{" "}
              <span className="text-primary neon-text">it's how it works.</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              I’m a passionate graphic and web designer with over 8 years of experience creating strong visual identities and engaging digital experiences.
              What started in my childhood bedroom has grown into a professional freelance career, which I’ve been running successfully for over two years. 
              Today, I help brands, startups, and entrepreneurs turn ideas into impactful design.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              I combine creativity with strategy and technical precision — delivering modern, functional, and visually compelling solutions that drive results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-primary/30 pl-4">
                  <p className="font-mono text-3xl font-bold text-primary neon-text">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
