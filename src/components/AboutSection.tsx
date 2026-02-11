import { motion } from "framer-motion";
import selfPortrait from "@/assets/self-portrait.jpeg";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "8+", label: "Happy Clients" },
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
              I am a passionate graphic and web designer with over 8 years of experience creating strong visual identities, intuitive user interfaces, and impactful digital experiences.
              What started as a creative passion in my childhood bedroom eight years ago has grown into a professional freelance career, which I have been running successfully for more than two years. Today, I help businesses, startups, and entrepreneurs build authentic and memorable brands through thoughtful design.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              I combine aesthetics with strategy and technical precision. From brand development and UI/UX design to pixel-perfect websites and high-quality print materials, I approach every project holistically — from concept to final execution.
              My goal is not just to create beautiful designs, but to deliver solutions that perform, engage, and drive real results. I value clear communication, reliability, and customized concepts tailored to each client’s needs.
              Driven by creativity, attention to detail, and a passion for innovation, I strive to create designs that stand out and leave a lasting impression.
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
