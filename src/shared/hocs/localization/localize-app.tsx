import React from "react";
import { Locale, LocaleContext } from "../../contexts/locale-context";
import {
  AppComponentType,
  AppProps,
  NextAppContext,
  DefaultAppIProps
} from "next/app";

interface Props extends DefaultAppIProps, AppProps {
  defaultLanguageContent: { [key: string]: string };
}

interface State {
  languageCode: string;
  content: { [key: string]: string };
}

export function localizeApp(defaultLanguageCode: string, locales: Locale[]) {
  return (WrappedApp: AppComponentType): any =>
    class extends React.Component<Props, State> {
      constructor(props: Props) {
        super(props);

        this.state = {
          languageCode: defaultLanguageCode,
          content: this.props.defaultLanguageContent
        };
      }

      static async getInitialProps(context?: NextAppContext): Promise<any> {
        let pageProps = {};
        if (context.Component.getInitialProps != null) {
          pageProps = await context.Component.getInitialProps(context.ctx);
        }

        return {
          pageProps,
          defaultLanguageContent: await this.getLocaleContent(
            defaultLanguageCode
          )
        };
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

      render() {
        return (
          <LocaleContext.Provider
            value={{
              getTranslation: key => this.getTranslation(key),
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
