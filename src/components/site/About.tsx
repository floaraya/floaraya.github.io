import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  const highlights = t.sobreMi?.highlights || [
    "Evolution from administrative roles to strategic marketing",
    "Organization and adaptation in technical environments",
    "Brand positioning in the tech sector",
  ];

  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface">
              <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-hero)" }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-[8rem] font-bold tracking-tighter bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                  FA
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.sobreMi?.titulo || "About me"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.sobreMi?.subtitulo || "From organization to strategic marketing"}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.sobreMi?.descripcion || "My career started in administrative roles and has naturally evolved toward strategic marketing."}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.sobreMi?.descripcion2 || "In B2B tech projects I drive brand positioning by translating cutting-edge technology into clear market messages."}
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span className="text-sm text-foreground sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}