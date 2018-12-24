import React from "react";
import Link from "next/link";
import "./header.scss"
import { localizeComponent, LocaleProps } from "../../shared/hocs/localization/localize-component";

interface Props extends LocaleProps {}

@localizeComponent
export default class Header extends React.Component<Props> {
  render() {
    return (
      <div>
        <Link href="/" prefetch>
          <a>{this.props.translate("home")}</a>
        </Link>
        <Link href="/upload" prefetch>
          <a>{this.props.translate("upload")}</a>
        </Link>
        <Link href="/modal" prefetch>
          <a>{this.props.translate("modal")}</a>
        </Link>
      </div>
    );
  }
}
