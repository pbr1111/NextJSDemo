import React from "react";

export interface Locale {
  languageCode: string;
  contentLoader: () => Promise<{ default: { [key: string]: string } }>;
}

export interface LocaleContext {
  getTranslation(key: string): string;
  setLanguage(languageCode: string): Promise<void>;
  locales: Locale[];
  currentLanguageCode: string;
}

export const LocaleContext = React.createContext<LocaleContext>({
  getTranslation: () => {
    throw new Error();
  },
  setLanguage: () => {
    throw new Error();
  },
  currentLanguageCode: null,
  locales: null
});
