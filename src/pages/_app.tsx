import React from "react";
import App, { Container } from "next/app";
import { localizeApp } from "../shared/hocs/localization/localize-app";
import "../styles/global.scss";

@localizeApp("en", [
  {
    languageCode: "en",
    contentLoader: async () => await import("../locales/en.json")
  },
  {
    languageCode: "es",
    contentLoader: async () => await import("../locales/es.json")
  }
])
export default class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Component {...this.props.pageProps} />
      </Container>
    );
  }
}
