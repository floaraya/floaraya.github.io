import { create } from "zustand";
import { persist } from "zustand/middleware";
import { es, type Translations } from "./es";
import { en } from "./en";

export type Language = "es" | "en";

const translations: Record<Language, Translations> = { es, en };

interface I18nState {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

export const useI18n = create<I18nState>()(
  persist(
    (set) => ({
      language: "en",
      t: en,
      setLanguage: (language) => set({ language, t: translations[language] }),
    }),
    { name: "language-storage" }
  )
);