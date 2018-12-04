import React from "react";
import { Container } from "next/app";
import BaseApp from "../shared/app/base-app";

import "../styles/global.scss";

export default class MyApp extends BaseApp {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Component {...this.props.pageProps} />
      </Container>
    );
  }
}
