import nookies from "nookies";
import { NextContext } from "next";

export function getCookies(
  ctx: NextContext | Object = {}
): { [id: string]: string } {
  return nookies.get(ctx);
}

export function setCookie(
  name: string,
  value: string,
  ctx: NextContext | Object = {}
): void {
  nookies.set(ctx, name, value);
}
