import { NextComponentType } from "next";
import hoistNonReactStatic from "hoist-non-react-statics";
import { AppComponentType } from "next/app";

export function createComponentWithHoistedStatics(
  componentClass: React.ComponentClass,
  wrappedComponent: NextComponentType
): any {
  hoistNonReactStatic(componentClass, wrappedComponent);
  return componentClass;
}
