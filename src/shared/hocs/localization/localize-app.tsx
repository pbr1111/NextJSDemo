import React from "react";
import { Locale, LocaleContext } from "../../contexts/locale-context";
import {
  AppComponentType,
  AppProps,
  NextAppContext,
  DefaultAppIProps
} from "next/app";
import { NextContext } from "next";
import { setCookie, getCookies } from "../../helpers/cookies";

const COOKIE_NAMES = {
  language: "language"
};

interface Props extends DefaultAppIProps, AppProps {
  initialLanguageCode: string;
  defaultLanguageContent: { [key: string]: string };
}

interface State {
  languageCode: string;
  content: { [key: string]: string };
}

export function localizeApp(defaultLanguageCode: string, locales: Locale[]) {
  return (WrappedApp: AppComponentType): any =>
    class LocalizeApp extends React.Component<Props, State> {
      constructor(props: Props) {
        super(props);

        this.state = {
          languageCode: this.props.initialLanguageCode,
          content: this.props.defaultLanguageContent
        };
      }

      static async getInitialProps(context?: NextAppContext): Promise<any> {
        let pageProps = {};
        if (context.Component.getInitialProps != null) {
          pageProps = await context.Component.getInitialProps(context.ctx);
        }

        const languageCode = this.getInitialLanguageCode(context.ctx);
        return {
          pageProps,
          initialLanguageCode: languageCode,
          defaultLanguageContent: await this.getLocaleContent(languageCode)
        };
      }

      static getInitialLanguageCode(ctx: NextContext): string {
        const { language } = getCookies(ctx);
        return language ? language : defaultLanguageCode;
      }

      static async getLocaleContent(
        languageCode: string
      ): Promise<{ [key: string]: string }> {
        const locale = locales.find(
          locale => locale.languageCode == languageCode
        );
        const localeContent = locale.contentLoader;
        return (await localeContent()).default;
      }

      getTranslation(key: string): string {
        const localeContent = this.state.content;
        if (!(key in localeContent)) {
          console.warn(
            `[getTranslation]: Key "${key}" does not exist in "${
              this.state.languageCode
            }" language`
          );
        }
        return localeContent[key];
      }

      async setLanguage(languageCode: string): Promise<void> {
        this.setState({
          languageCode: languageCode,
          content: await LocalizeApp.getLocaleContent(languageCode)
        });
        setCookie(COOKIE_NAMES.language, languageCode);
      }

      render() {
        return (
          <LocaleContext.Provider
            value={{
              getTranslation: key => this.getTranslation(key),
              setLanguage: languageCode => this.setLanguage(languageCode),
              locales: locales,
              currentLanguageCode: this.state.languageCode
            }}
          >
            <WrappedApp {...this.props} />
          </LocaleContext.Provider>
        );
      }
    };
}
