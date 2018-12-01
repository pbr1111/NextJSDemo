import React from "react";
import Link from "next/link";
import translatedComponent from "../../shared/hocs/translated-component";
import { BaseProps } from "src/shared/models/props/base-props";
import "./header.scss"

interface Props extends BaseProps {}

@translatedComponent()
export default class Header extends React.Component<Props> {
  render() {
    return (
      <div>
        <Link href="/">
          <a>{this.props.t("home")}</a>
        </Link>
        <Link href="/upload">
          <a>Upload</a>
        </Link>
      </div>
    );
  }
}
