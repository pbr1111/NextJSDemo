import Document, {
  NextDocumentContext,
  DefaultDocumentIProps
} from "next/document";
import cookies from "next-cookies";
import Router from "next/router";

export default class BaseDocument<P = {}> extends Document<P> {
  static async getInitialProps(
    context: NextDocumentContext
  ): Promise<DefaultDocumentIProps> {
    await this.handleAuthStatus(context);
    return await super.getInitialProps(context);
  }

  static async validateAuthToken(token: string): Promise<boolean> {
    return true;
  }

  static get loginPagePath(): string {
    return null;
  }

  private static async handleAuthStatus(
    context: NextDocumentContext
  ): Promise<void> {
    if (!(await this.isValidToken(context))) {
      return this.redirectTo(this.loginPagePath, context);
    }
    return;
  }

  private static async isValidToken(
    context: NextDocumentContext
  ): Promise<boolean> {
    let isValidToken = true;
    const { token } = cookies(context);
    if (!token) {
      if (context.pathname.indexOf(this.loginPagePath) == -1) {
        isValidToken = false;
      }
    } else {
      isValidToken = await this.validateAuthToken(token);
    }

    if (!isValidToken) {
      this.redirectTo(this.loginPagePath, context);
    }
    return isValidToken;
  }

  protected static redirectTo(
    page: string,
    context?: NextDocumentContext
  ): void {
    if (page != null) {
      if (context.res) {
        context.res.writeHead(302, {
          Location: this.loginPagePath
        });
        context.res.end();
      } else {
        Router.push(this.loginPagePath);
      }
    }
  }
}
