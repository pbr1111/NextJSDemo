import React from "react";

export interface Locale {
  languageCode: string;
  contentLoader: () => Promise<{ default: { [key: string]: string } }>;
}

export interface LocaleContext {
  getTranslation: (key: string) => string;
  locales: Locale[];
  currentLanguageCode: string;
}

export const LocaleContext = React.createContext<LocaleContext>({
  getTranslation: () => {
    throw new Error();
  },
  currentLanguageCode: null,
  locales: null
});
