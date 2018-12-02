import React from "react";
import { BaseProps } from "../models/props/base-props";
import { withNamespaces, config } from "../../../i18n";

export default function translatedComponent<Props = {}>(
  namespace: string = config.defaultNS,
  options: any = {}
) {
  return (component: React.ComponentType<Props & BaseProps>) => {
    return withNamespaces(namespace, options)(component);
  }
}
