import { NextComponentType, NextContext } from "next";
import React from "react";
import { parseCookies } from "nookies";
import { AuthComponentProps } from "../app/auth-component";
import { AppConfig } from "../../config/app";

export function authComponent(WrappedComponent: NextComponentType): any {
  return class extends React.Component<AuthComponentProps> {
    static async getInitialProps(
      context: NextContext
    ): Promise<{} & AuthComponentProps> {
      const token = this.getToken(context);
      const hasValidToken = await this.isValidToken(token);
      return {
        ...(await WrappedComponent.getInitialProps(context)),
        hasValidToken, 
        token
      };
    }

    private static getToken(context: NextContext): string {
      const { token } = parseCookies(context);
      return token;
    }

    private static async isValidToken(token: string): Promise<boolean> {
      let isValidToken = false;
      if (token) {
        isValidToken = await AppConfig.validateAuthToken(token);
      }
      return isValidToken;
    }

    render() {
      if (!this.props.hasValidToken) {
        return <AppConfig.loginPage />;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}
