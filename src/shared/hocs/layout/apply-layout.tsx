import React from "react";
import { NextContext, NextComponentType } from "next";

export function applyLayout(LayoutComponent: React.ComponentType) {
  return (WrappedComponent: NextComponentType): any =>
    class extends React.Component {
      static async getInitialProps(context?: NextContext): Promise<any> {
        if (WrappedComponent.getInitialProps != null) {
          return await WrappedComponent.getInitialProps(context);
        }
        return {};
      }

      render() {
        return (
          <LayoutComponent>
            <WrappedComponent {...this.props} />
          </LayoutComponent>
        );
      }
    };
}
