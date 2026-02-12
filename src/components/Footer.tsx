const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container px-6">
        <div className="flex flex-col items-center justify-between gap-8 mb-8 sm:flex-row">
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
        <div className="border-t border-border/50 pt-6 flex justify-center">
          <a
            href="/#/impressum"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
