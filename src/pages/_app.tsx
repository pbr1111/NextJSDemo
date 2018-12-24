import React from "react";
import App, { Container } from "next/app";
import { localizeApp } from "../shared/hocs/localization/localize-app";
import localeEn from "../locales/en.json";
import "../styles/global.scss";

@localizeApp("en", [
  {
    languageCode: "en",
    content: localeEn
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
