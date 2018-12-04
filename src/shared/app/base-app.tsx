import App from "next/app";

export interface BaseAppProps {}

export default class BaseApp<P = {} & BaseAppProps> extends App<P> {}
