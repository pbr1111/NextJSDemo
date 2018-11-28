import Link from "next/link";
import React from "react";

const linkStyle = {
  marginRight: 15
};

interface Props {

}

export default class Header extends React.Component<Props> {
  render() {
    return (
      <div>
        <Link href="/" prefetch>
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about" prefetch>
          <a style={linkStyle}>About</a>
        </Link>
      </div>
    );
  }
}
