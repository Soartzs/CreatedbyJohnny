import { motion } from "framer-motion";

const clients = [
  "EXAMPLE1", "EXAMPLE2", "EXAMPLE3", "EXAMPLE4", "EXAMPLE5", "EXAMPLE6", "EXAMPLE7", "EXAMPLE8",
  "EXAMPLE1", "EXAMPLE2", "EXAMPLE3", "EXAMPLE4", "EXAMPLE5", "EXAMPLE6", "EXAMPLE7", "EXAMPLE8",
];

const LogoSlider = () => {
  return (
    <section className="border-y border-border/50 bg-card/50 py-16 overflow-hidden">
      <div className="container px-6 mb-10">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground text-center">
          Trusted by <span className="text-primary">industry leaders</span>
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-16 items-center"
        >
          {clients.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-mono text-2xl font-bold tracking-[0.15em] text-muted-foreground/40 transition-colors hover:text-primary whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSlider;
