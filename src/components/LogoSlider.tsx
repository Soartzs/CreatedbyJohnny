import { motion } from "framer-motion";

const clients = [
  "DIONYSOS", "WLW", "ENTRACT", "1337", "FUTURAVISIO",
];

const LogoSlider = () => {
  return (
    <section className="border-y border-border/50 bg-card/50 py-16 overflow-hidden">
      <div className="container px-6 mb-10">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground text-center">
          Trusted by <span className="text-primary">industry leaders</span>
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex select-none">
          <motion.div
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 items-center gap-16 pr-16"
          >
            {clients.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-mono text-2xl font-bold tracking-[0.15em] text-muted-foreground/40 transition-colors hover:text-primary whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </motion.div>
          <motion.div
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 items-center gap-32 pr-32"
            aria-hidden="true"
          >
            {clients.map((name, i) => (
              <span
                key={`${name}-${i}-duplicate`}
                className="font-mono text-2xl font-bold tracking-[0.15em] text-muted-foreground/40 transition-colors hover:text-primary whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
