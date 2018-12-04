import { Head, Main, NextScript } from "next/document";
import BaseDocument from "../shared/app/base-document";

export default class MyDocument extends BaseDocument {
  static async validateAuthToken(token: string): Promise<boolean> {
    return token !== "";
  }

  static get loginPagePath(): string {
    return "/login";
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
