import { NextComponentType, NextContext } from "next";
import React from "react";
import { LocaleContext } from "../../contexts/locale-context";

export interface LocaleProps {
  translate(key: string): string;
  setLanguage(languageCode: string): void;
  currentLanguageCode: string;
}

export function localizeComponent<P extends LocaleProps, T = {}>(
  WrappedComponent: NextComponentType<P, T>
): any {
  return class extends React.Component<P, T> {
    static async getInitialProps(context?: NextContext): Promise<any> {
      if (WrappedComponent.getInitialProps != null) {
        return await WrappedComponent.getInitialProps(context);
      }
      return {};
    }

    render() {
      return (
        <LocaleContext.Consumer>
          {context => (
            <WrappedComponent
              {...this.props}
              translate={key => context.getTranslation(key)}
              setLanguage={languageCode => context.setLanguage(languageCode)}
              currentLanguageCode={context.currentLanguageCode}
            />
          )}
        </LocaleContext.Consumer>
      );
    }
  };
}
