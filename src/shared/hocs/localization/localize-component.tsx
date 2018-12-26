import { NextComponentType, NextContext } from "next";
import React from "react";
import { LocaleContext } from "../../contexts/locale-context";
import { createComponentWithHoistedStatics } from "../../helpers/hocs";

export interface LocaleProps {
  translate?: (key: string) => string;
  setLanguage?: (languageCode: string) => void;
  currentLanguageCode?: string;
}

export const localizeComponent = <P extends LocaleProps, T = {}>(
  WrappedComponent: NextComponentType<P, T>
) =>
  createComponentWithHoistedStatics(
    class extends React.Component<P, T> {
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
    },
    WrappedComponent
  );
