import { GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Education() {
  const { t } = useI18n();
  const items = t.formacion?.items || [
    { title: "Marketing Degree", org: "Universitat Oberta de Catalunya (UOC)" },
    { title: "Postgraduate in Emotional Marketing", org: "INESEM Business School" },
  ];

  return (
    <section id="formacion" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.formacion?.titulo || "Education"}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.formacion?.subtitulo || "Continuous learning to stay current"}
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div
                className="grid h-11 w-11 flex-none place-items-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}