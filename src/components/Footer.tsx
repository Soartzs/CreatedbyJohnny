const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          © 2026 <span className="text-primary">PIXEL</span>.studio
        </p>
        <div className="flex gap-6">
          {["Dribbble", "Behance", "Instagram", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
