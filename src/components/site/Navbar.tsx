import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { useI18n, type Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const defaultNavLabels: Record<string, Record<string, string>> = {
  es: {
    servicios: "Servicios",
    sobreMi: "Sobre mí",
    stack: "Stack",
    formacion: "Formación",
    contacto: "Contacto",
    hablemos: "Hablemos",
  },
  en: {
    servicios: "Services",
    sobreMi: "About",
    stack: "Stack",
    formacion: "Education",
    contacto: "Contact",
    hablemos: "Let's talk",
  },
};

const defaultLinks = [
  { href: "#servicios", key: "servicios" },
  { href: "#sobre-mi", key: "sobreMi" },
  { href: "#stack", key: "stack" },
  { href: "#formacion", key: "formacion" },
  { href: "#contacto", key: "contacto" },
];

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getNavLabel(nav: { nav?: Record<string, string> }, key: string, lang: string): string {
  const fallback = defaultNavLabels[lang]?.[key] || defaultNavLabels.en[key] || key;
  const label = nav?.nav?.[key] || fallback;
  return capitalize(label);
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, language, setLanguage } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = language === "es" ? "en" : "es";
    setLanguage(newLang);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
            FA
          </span>
          <span className="hidden sm:inline">Flora Araya</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {defaultLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {getNavLabel(t as unknown as { nav?: Record<string, string> }, link.key, language)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            className="rounded-full text-lg leading-none"
          >
            <span className="flex h-4 w-4 items-center justify-center">
              {language === "es" ? "🇪🇸" : "🇺🇸"}
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contacto">{getNavLabel(t as unknown as { nav?: Record<string, string> }, "hablemos", language)}</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col p-4">
            {defaultLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {getNavLabel(t as unknown as { nav?: Record<string, string> }, link.key, language)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}