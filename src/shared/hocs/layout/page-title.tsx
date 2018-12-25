import { NextComponentType } from "next";
import React from "react";
import Head from "next/head";
import { createComponentWithHoistedStatics } from "../../helpers/hocs";

export const pageTitle = <T extends Object = {}>(
  getTitle: (props?: T) => string
) => (WrappedComponent: NextComponentType) =>
  createComponentWithHoistedStatics(
    class extends React.Component<T> {
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
    },
    WrappedComponent
  );
