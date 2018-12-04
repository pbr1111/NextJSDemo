import App, { AppComponentType, NextAppContext, DefaultAppIProps } from "next/app";

export interface AppContext {
  title: string;
}

export const authApp = (WrappedComponent: React.ComponentType) => {
  return class AuthApp extends App<AppContext> {

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
