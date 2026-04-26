import { Search, FileText, Target, Workflow, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Service = {
  icon: LucideIcon;
  titleKey: "estrategia" | "googleAds" | "crm" | "contenido";
  descriptionKey: "estrategia" | "googleAds" | "crm" | "contenido";
};

const services: Service[] = [
  {
    icon: Search,
    titleKey: "estrategia",
    descriptionKey: "estrategia",
  },
  {
    icon: FileText,
    titleKey: "contenido",
    descriptionKey: "contenido",
  },
  {
    icon: Target,
    titleKey: "googleAds",
    descriptionKey: "googleAds",
  },
  {
    icon: Workflow,
    titleKey: "crm",
    descriptionKey: "crm",
  },
];

export function Services() {
  const { t } = useI18n();

  const serviceData = [
    { ...services[0], ...(t.servicios?.estrategia || { titulo: "Marketing Strategy", descripcion: "Custom plans designed around your business goals." }) },
    { ...services[1], ...(t.servicios?.contenido || { titulo: "B2B Content", descripcion: "Specialized content that positions your brand." }) },
    { ...services[2], ...(t.servicios?.googleAds || { titulo: "Google Ads", descripcion: "Optimized campaigns to maximize ROI." }) },
    { ...services[3], ...(t.servicios?.crm || { titulo: "CRM and Automation", descripcion: "Structuring and automating processes." }) },
  ] as const;

  return (
    <section id="servicios" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.servicios?.titulo || "Services"}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.servicios?.subtitulo || "Comprehensive solutions for your marketing strategy"}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {serviceData.map((service) => (
            <article
              key={service.titleKey}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                {service.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}