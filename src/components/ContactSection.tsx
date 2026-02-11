import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="border-t border-border/50 bg-card py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-[0.3em] text-primary">Contact</p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Let's create something{" "}
            <span className="text-primary neon-text">amazing.</span>
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Have a project in mind? I'd love to hear about it. Drop me a line and let's start the conversation.
          </p>

          <a
            href="mailto:hello@pixelstudio.com"
            className="group inline-flex items-center gap-3 rounded-none border border-primary bg-primary px-10 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-all hover:neon-glow-strong"
          >
            <Mail size={18} />
            Get In Touch
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={16} className="text-primary" />
              <span className="text-sm">hello@pixelstudio.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm">Available Worldwide</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
