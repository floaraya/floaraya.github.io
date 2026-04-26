import { useState, type FormEvent } from "react";
import { Linkedin, Mail, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t, language } = useI18n();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const greeting = language === "es" ? "Hola Flora" : "Hi Flora";
    const body = encodeURIComponent(`${greeting},\n\n${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:floah.marketing@gmail.com?subject=${encodeURIComponent(
      `Nuevo proyecto · ${name}`,
    )}&body=${body}`;
    setSent(true);
  };

  const labels = {
    titulo: t.contacto?.titulo || "Contact",
    subtitulo: t.contacto?.subtitulo || "Let's discuss your next project",
    descripcion: t.contacto?.descripcion || "Need a clear B2B strategy? Tell me what you're working on.",
    linkedin: t.contacto?.linkedin || "LinkedIn",
    email: t.contacto?.email || "Email",
    nombre: t.contacto?.nombre || "Name",
    emailLabel: t.contacto?.emailLabel || "Email",
    mensaje: t.contacto?.mensaje || "Message",
    enviar: t.contacto?.enviar || "Send message",
    listo: t.contacto?.listo || "Done! Opening your email",
    placeholder: {
      nombre: t.contacto?.placeholder?.nombre || "Your name",
      email: t.contacto?.placeholder?.email || "your@company.com",
      mensaje: t.contacto?.placeholder?.mensaje || "Tell me briefly about your project...",
    },
  };

  return (
    <section id="contacto" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {labels.titulo}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {labels.subtitulo}
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {labels.descripcion}
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="https://www.linkedin.com/in/floraaraya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
              >
                <div
                  className="grid h-10 w-10 place-items-center rounded-lg text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">{labels.linkedin}</p>
                  <p className="text-xs text-muted-foreground">in/floraaraya</p>
                </div>
              </a>

              <a
                href="mailto:floah.marketing@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
              >
                <div
                  className="grid h-10 w-10 place-items-center rounded-lg text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">{labels.email}</p>
                  <p className="text-xs text-muted-foreground">floah.marketing@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">{labels.nombre}</Label>
                <Input id="name" name="name" required placeholder={labels.placeholder.nombre} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{labels.emailLabel}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={labels.placeholder.email}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{labels.mensaje}</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={labels.placeholder.mensaje}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                {sent ? (
                  <>
                    <Check className="mr-1 h-4 w-4" />
                    {labels.listo}
                  </>
                ) : (
                  <>
                    {labels.enviar}
                    <Send className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}