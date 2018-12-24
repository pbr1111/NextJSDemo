import React from "react";
import { Locale, LocaleContext } from "../../contexts/locale-context";
import {
  AppComponentType,
  AppProps,
  NextAppContext,
  DefaultAppIProps
} from "next/app";

interface State {
  currentLanguageCode: string;
  currentLocale: Locale;
}

export function localizeApp(defaultLanguageCode: string, locales: Locale[]) {
  return (WrappedApp: AppComponentType): any =>
    class extends React.Component<DefaultAppIProps & AppProps, State> {
      constructor(props: DefaultAppIProps & AppProps) {
        super(props);

        this.state = {
          currentLanguageCode: defaultLanguageCode,
          currentLocale: this.getLocale(defaultLanguageCode)
        };
      }

      static async getInitialProps(context?: NextAppContext): Promise<any> {
        let pageProps = {};
        if (context.Component.getInitialProps != null) {
          pageProps = await context.Component.getInitialProps(context.ctx);
        }
        return {
          pageProps
        };
      }

      getLocale(languageCode: string): Locale {
        return locales.find(locale => locale.languageCode == languageCode);
      }

      setLanguage(languageCode: string): void {
        this.setState({
          currentLanguageCode: languageCode,
          currentLocale: this.getLocale(languageCode)
        });
      }

      getTranslation(key: string): string {
        const localeContent = this.state.currentLocale.content;
        if (!(key in localeContent)) {
          console.warn(
            `[getTranslation]: Key "${key}" does not exist in "${
              this.state.currentLanguageCode
            }" language`
          );
        }
        return this.state.currentLocale.content[key];
      }

      render() {
        return (
          <LocaleContext.Provider
            value={{
              setLanguage: languageCode => this.setLanguage(languageCode),
              getTranslation: key => this.getTranslation(key),
              locales: locales,
              currentLanguageCode: this.state.currentLanguageCode
            }}
          >
            <WrappedApp {...this.props} />
          </LocaleContext.Provider>
        );
      }
    };
}
