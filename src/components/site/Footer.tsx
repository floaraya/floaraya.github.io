import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const derechos = t.footer?.derechos || "All rights reserved.";

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Flora Araya · Marketing B2B & Research</p>
        <p className="text-xs">{derechos}</p>
      </div>
    </footer>
  );
}