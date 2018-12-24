import React from "react";

export interface Locale {
  languageCode: string;
  content: { [key: string]: string };
}

export interface LocaleContext {
  setLanguage: (languageCode: string) => void;
  getTranslation: (key: string) => string;

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
