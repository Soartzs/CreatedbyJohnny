import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MouseEvent } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create a trail of springs with decreasing stiffness to create a "comet" tail effect
  // The first ones are faster, the last ones are slower (more drag)
  const springs = Array.from({ length: 5 }).map((_, i) => {
    // Determine stiffness/damping based on index
    // Head (low index) = High stiffness (follows closely)
    // Tail (high index) = Low stiffness (drags behind)
    const stiffness = 200 - i * 30; // 200, 170, 140, 110, 80
    const damping = 25 + i * 2;      // 25, 27, 29, 31, 33

    return {
      x: useSpring(mouseX, { stiffness, damping }),
      y: useSpring(mouseY, { stiffness, damping }),
      scale: 1 - i * 0.15, // Shrink tail
      opacity: 0.8 - i * 0.15 // Fade tail
    };
  });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Main Cursor (Instant Glow) - The "Head" */}
      <motion.div
        className="pointer-events-none absolute h-[150px] w-[150px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, transparent 60%)",
          filter: "blur(20px)",
          mixBlendMode: "screen",
          zIndex: 20,
        }}
      />

      {/* Trail Segments - The "Schweif" */}
      {springs.map((spring, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute h-[100px] w-[100px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            x: spring.x,
            y: spring.y,
            translateX: "-50%",
            translateY: "-50%",
            scale: spring.scale,
            opacity: spring.opacity,
            background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
            filter: "blur(15px)",
            mixBlendMode: "screen",
            zIndex: 19 - index,
          }}
        />
      ))}

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary neon-text">
            Graphic & Web Designer
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Crafting{" "}
            <span className="text-primary neon-text">digital</span>
            <br />
            experiences that
            <br />
            <span className="text-primary neon-text">glow.</span>
          </h1>
          <p className="mb-10 max-w-lg text-lg text-muted-foreground">
            I design bold identities and build immersive websites that leave a lasting impression. Let's make something unforgettable.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("work")}
              className="inline-block rounded-none border border-primary bg-primary px-8 py-3 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-all hover:neon-glow-strong cursor-pointer"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="inline-block rounded-none border border-border px-8 py-3 font-mono text-sm uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary cursor-pointer"
            >
              About Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-primary" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
