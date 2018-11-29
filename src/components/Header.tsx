import React from "react";
import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

interface Props {}

export default class Header extends React.Component<Props> {
  render() {
    return (
      <div>
        <Link href="/" shallow={true} prefetch>
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/upload" shallow={true} prefetch>
          <a style={linkStyle}>Upload</a>
        </Link>
      </div>
    );
  }
}
