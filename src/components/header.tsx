import React from "react";
import Link from "next/link";
import translatedComponent from "../shared/hocs/translated-component";
import { BaseProps } from "src/shared/models/props/base-props";

const linkStyle = {
  marginRight: 15
};

interface Props extends BaseProps {}

@translatedComponent("header")
export default class Header extends React.Component<Props> {
  render() {
    return (
      <div>
        <Link href="/">
          <a style={linkStyle}>{this.props.t("home")}</a>
        </Link>
        <Link href="/upload">
          <a style={linkStyle}>Upload</a>
        </Link>
      </div>
    );
  }
}
