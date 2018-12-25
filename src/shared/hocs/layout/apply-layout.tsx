import React from "react";
import { NextComponentType } from "next";
import { createComponentWithHoistedStatics } from "../../helpers/hocs";

export const applyLayout = (LayoutComponent: React.ComponentType) => (
  WrappedComponent: NextComponentType
) =>
  createComponentWithHoistedStatics(
    class extends React.Component {
      render() {
        return (
          <LayoutComponent>
            <WrappedComponent {...this.props} />
          </LayoutComponent>
        );
      }
    },
    WrappedComponent
  );