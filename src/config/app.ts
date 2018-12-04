import BaseComponent from "../shared/app/base-component";
import Login from "../pages/login";

export class AppConfig {
  static async validateAuthToken(token: string): Promise<boolean> {
    return token !== "";
  }

  static get loginPage(): typeof BaseComponent {
    return Login;
  }
}
