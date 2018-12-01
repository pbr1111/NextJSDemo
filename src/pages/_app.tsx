import Layout from "../components/layout/layout";
import React from "react";
import App, { Container } from "next/app";
import translatedApp from "../shared/hocs/translated-app";
import "../styles/global.scss";

@translatedApp
export default class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...this.props.pageProps} />
        </Layout>
      </Container>
    );
  }
}
