import { motion } from "framer-motion";

const Datenschutz = () => {
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
              Datenschutzerklärung
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Einleitung */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">1. Allgemeine Information</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Der Schutz Ihrer Daten ist uns wichtig. Diese Datenschutzerklärung erläutert, wie wir Ihre Daten verarbeiten und schützen.
                </p>
              </div>
            </div>

            {/* Verantwortlicher */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">2. Verantwortlicher</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="font-semibold">Jonathan Zimmermann</p>
                <p>Fritz-Kirsch-Zeile 17<br />12459 Berlin<br />Deutschland</p>
                <p>E-Mail: zimmermannjonathan@icloud.com<br />Telefon: +49 157 38306266</p>
              </div>
            </div>

            {/* Erhobene Daten */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">3. Informationen, die wir erheben</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wir erheben folgende Informationen über Sie:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Kontaktinformationen:</strong> Name, E-Mail-Adresse und andere Informationen, die Sie uns voluntär mitteilen</li>
                  <li><strong>Browserinformationen:</strong> IP-Adresse, Browsertyp, Betriebssystem und Zugriffszeiten</li>
                  <li><strong>Nutzungsdaten:</strong> Informationen über Ihre Interaktion mit dieser Website</li>
                </ul>
              </div>
            </div>

            {/* Verarbeitung */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">4. Wie wir Ihre Daten verwenden</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wir verwenden Ihre Daten für folgende Zwecke:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Beantwortung Ihrer Anfragen und Kommunikation</li>
                  <li>Verbesserung und Optimierung dieser Website</li>
                  <li>Einhaltung gesetzlicher Verpflichtungen</li>
                  <li>Schutz vor Missbrauch und Betrug</li>
                </ul>
              </div>
            </div>

            {/* Rechtsgrundlage */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">5. Rechtsgrundlage der Verarbeitung</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ihrer Einwilligung (Art. 6 Abs. 1 a DSGVO)</li>
                  <li>Erfüllung eines Vertrags (Art. 6 Abs. 1 b DSGVO)</li>
                  <li>Erfüllung einer rechtlichen Verpflichtung (Art. 6 Abs. 1 c DSGVO)</li>
                  <li>Berechtigten Interesse (Art. 6 Abs. 1 f DSGVO)</li>
                </ul>
              </div>
            </div>

            {/* Speicherdauer */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">6. Speicherdauer</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wir speichern Ihre Daten nur solange, wie dies für die Erfüllung der benannten Zwecke erforderlich ist. Danach werden Ihre Daten gelöscht oder anonymisiert, sofern keine gesetzliche Aufbewahrungspflicht besteht.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">7. Cookies</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Diese Website verwendet derzeit keine Cookies. Sollte dies in Zukunft geändert werden, werden wir Sie hierüber informieren und Ihre Zustimmung vor dem Speichern von Cookies einholen.
                </p>
              </div>
            </div>

            {/* Externe Dienste */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">8. Externe Dienste</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Diese Website wird auf GitHub Pages gehostet. GitHub kann unter Umständen Daten erhalten. Bitte beachten Sie die <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline">Datenschutzerklärung von GitHub</a>.
                </p>
              </div>
            </div>

            {/* Ihre Rechte */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">9. Ihre Rechte</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sie haben das Recht zu:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Auskunft:</strong> Auskunft über die Verarbeitung Ihrer Daten erhalten</li>
                  <li><strong>Berichtigung:</strong> Ihre Daten berichtigen lassen</li>
                  <li><strong>Löschung:</strong> "Recht auf Vergessenwerden" - Ihre Daten löschen lassen</li>
                  <li><strong>Einschränkung:</strong> Die Verarbeitung Ihrer Daten einschränken</li>
                  <li><strong>Datenportabilität:</strong> Ihre Daten in einem strukturierten Format erhalten</li>
                  <li><strong>Widerspruch:</strong> Der Verarbeitung widersprechen</li>
                </ul>
                <p className="mt-4">
                  Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter zimmermannjonathan@icloud.com.
                </p>
              </div>
            </div>

            {/* Beschwerde */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">10. Recht auf Beschwerde</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sie haben das Recht, eine Beschwerde bei einer Datenschutzbehörde einzureichen, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
                </p>
              </div>
            </div>

            {/* Sicherheit */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">11. Datensicherheit</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten vor Missbrauch, Verlust und Zerstörung zu schützen. Dies umfasst SSL/TLS-Verschlüsselung für alle Übertragungen.
                </p>
              </div>
            </div>

            {/* Änderungen */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">12. Änderungen dieser Datenschutzerklärung</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern. Wesentliche Änderungen werden Ihnen mitgeteilt.
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="border-t border-border/50 pt-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">13. Kontakt zum Datenschutz</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Für Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns bitte:
                </p>
                <p className="font-semibold">Jonathan Zimmermann</p>
                <p>E-Mail: zimmermannjonathan@icloud.com<br />Telefon: +49 157 38306266</p>
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

export default Datenschutz;
