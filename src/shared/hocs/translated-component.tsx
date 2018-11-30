import React from "react";
import { BaseProps } from "../models/props/base-props";
import { withNamespaces } from "../../../i18n";

const defaultNamespace = 'common';

export default function translatedComponent<Props = {}>(
  namespace: string = defaultNamespace,
  options: any = {}
) {
  return (component: React.ComponentType<Props & BaseProps>) =>
    withNamespaces(namespace, options)(component);
}
