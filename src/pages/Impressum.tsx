import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Impressum = () => {
  return (
    <section className="min-h-screen bg-background py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          {/* Header */}
          <div className="mb-16 border-b border-border/50 pb-8">
            <p className="mb-2 font-mono text-sm uppercase tracking-[0.3em] text-primary">Legal</p>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Impressum
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Verantwortlicher */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">Verantwortlicher</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="text-lg">Jonathan Zimmermann</p>
                
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
                  <p>Fritz-Kirsch-Zeile 17<br />12459 Berlin<br />Deutschland</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0 text-primary" />
                  <a href="tel:+491573830626" className="hover:text-primary transition-colors">
                    +49 157 38306266
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="flex-shrink-0 text-primary" />
                  <a href="mailto:zimmermannjonathan@icloud.com" className="hover:text-primary transition-colors">
                    zimmermannjonathan@icloud.com
                  </a>
                </div>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">Haftungsausschluss</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Dennoch können für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte keine Gewähr übernommen werden.
                </p>
                <p>
                  Für Schaden, die durch Nutzung dieser Website entstehen, wird keine Haftung übernommen. Dies gilt besonders für Schäden durch Fehler oder Ausfallzeiten.
                </p>
                <p>
                  Der Betreiber behält sich das Recht vor, Inhalte jederzeit und ohne vorherige Ankündigung zu ändern oder zu entfernen.
                </p>
              </div>
            </div>

            {/* Externe Links */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">Externe Links</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Diese Website enthält Links zu externen Websites. Der Betreiber hat keinen Einfluss auf den Inhalt verknüpfter Websites und macht sich deren Inhalte nicht zu eigen. Die Verantwortung für externe Inhalte liegt ausschließlich bei den Betreibern dieser Websites.
                </p>
                <p>
                  Sollten Sie feststellen, dass externe Inhalte auf dieser Website illegal oder beleidigend sind, bitten wir Sie, dies dem Betreiber mitzuteilen.
                </p>
              </div>
            </div>

            {/* Urheberrecht */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">Urheberrecht</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des Autors oder Urhebers.
                </p>
                <p>
                  Downloads und Kopien dieser Website sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </div>
            </div>

            {/* Datenschutz */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">Datenschutz</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bitte beachten Sie unsere <a href="/#/datenschutz" className="text-primary hover:text-primary/80 transition-colors underline">Datenschutzerklärung</a>, in der wir Sie ausführlich über den Umgang mit Ihren persönlichen Daten informieren.
                </p>
              </div>
            </div>

            {/* Rechtliche Hinweise */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">Rechtliche Hinweise</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Die Nutzung dieser Website erfolgt auf eigenes Risiko. Der Betreiber lehnt jegliche Haftung für Schäden ab, die durch die Nutzung dieser Website entstehen, es sei denn, diese wurden vorsätzlich oder grob fahrlässig verursacht.
                </p>
                <p>
                  Diese Website unterliegt deutschem Recht. Gerichtsstand ist Berlin.
                </p>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-16 border-t border-border/50 pt-8">
            <a
              href="/#/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm uppercase tracking-widest"
            >
              ← Zurück zur Website
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impressum;
