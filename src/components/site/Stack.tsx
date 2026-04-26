import {
  BarChart3,
  Megaphone,
  Database,
  Palette,
  Film,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const toolIcons: Record<string, LucideIcon> = {
  "Google Analytics": BarChart3,
  "Google Ads": Megaphone,
  "Zoho CRM": Database,
  Canva: Palette,
  CapCut: Film,
  "IA Creativa": Sparkles,
  "Creative AI": Sparkles,
};

export function Stack() {
  const { t } = useI18n();
  const tools = t.stack?.tools || [
    "Google Analytics",
    "Google Ads",
    "Zoho CRM",
    "Canva",
    "CapCut",
    "Creative AI",
  ];

  return (
    <section id="stack" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.stack?.titulo || "Stack"}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.stack?.subtitulo || "Tools I use to execute effective strategies"}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {tools.map((toolName) => {
            const Icon = toolIcons[toolName] || Sparkles;
            return (
              <div
                key={toolName}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-card-foreground">
                  {toolName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}