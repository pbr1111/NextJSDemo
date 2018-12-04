import BaseComponent, { BaseComponentProps } from "./base-component";

export interface AuthComponentProps extends BaseComponentProps {
  token: string;
  hasValidToken: boolean;
}

export default class AuthComponent<
  P = {} & AuthComponentProps
> extends BaseComponent<P> {}
