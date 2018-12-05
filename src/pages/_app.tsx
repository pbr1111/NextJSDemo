import React from "react";
import App, { Container } from "next/app";
import "../styles/global.scss";

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
