import { Linkedin, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t, language } = useI18n();

  const labels = {
    titulo: t.contacto?.titulo || "Contact",
    subtitulo: t.contacto?.subtitulo || "Let's discuss your next project",
    descripcion: t.contacto?.descripcion || "Need a clear B2B strategy? Tell me what you're working on.",
    linkedin: t.contacto?.linkedin || "LinkedIn",
    email: t.contacto?.email || "Email",
    calendly: language === "es" ? "Agendar llamada" : "Book a call",
  };

  const calendlyUrl = "https://calendly.com/flo-araya";

  return (
    <section id="contacto" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {labels.titulo}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {labels.subtitulo}
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto">
          {labels.descripcion}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/floraaraya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
          >
            <div
              className="grid h-10 w-10 place-items-center rounded-lg text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Linkedin className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-card-foreground">{labels.linkedin}</p>
              <p className="text-xs text-muted-foreground">in/floraaraya</p>
            </div>
          </a>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
          >
            <div
              className="grid h-10 w-10 place-items-center rounded-lg text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Calendar className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-card-foreground">{labels.calendly}</p>
              <p className="text-xs text-muted-foreground">calendly.com/flo-araya</p>
            </div>
          </a>

          <a
            href="mailto:floah.marketing@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
          >
            <div
              className="grid h-10 w-10 place-items-center rounded-lg text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Mail className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-card-foreground">{labels.email}</p>
              <p className="text-xs text-muted-foreground">floah.marketing@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}