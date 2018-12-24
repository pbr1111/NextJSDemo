import { NextComponentType, NextContext } from "next";
import React from "react";
import Head from "next/head";

export function pageTitle<T = {}>(getTitle: (props?: T) => string) {
  return (WrappedComponent: NextComponentType): any =>
    class extends React.Component<T> {
      static async getInitialProps(context?: NextContext): Promise<any> {
        if (WrappedComponent.getInitialProps != null) {
          return await WrappedComponent.getInitialProps(context);
        }
        return {};
      }

      render() {
        return (
          <React.Fragment>
            <Head>
              <title>{getTitle(this.props)}</title>
            </Head>
            <WrappedComponent {...this.props} />
          </React.Fragment>
        );
      }
    };
}