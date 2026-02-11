const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          © 2026 Createdby<span className="text-primary">Johnny</span>
        </p>
        <div className="flex gap-6">
          {[
            { name: "Dribbble", url: "#" },
            { name: "Behance", url: "#" },
            { name: "Instagram", url: "https://www.instagram.com/johnny.zrm/" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/jonathan-zimmermann/" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
