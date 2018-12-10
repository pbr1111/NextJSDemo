import React from "react";
import Link from "next/link";
import "./header.scss"

interface Props {}

export default class Header extends React.Component<Props> {
  render() {
    return (
      <div>
        <Link href="/" prefetch>
          <a>Home</a>
        </Link>
        <Link href="/upload" prefetch>
          <a>Upload</a>
        </Link>
        <Link href="/modal" prefetch>
          <a>Modal</a>
        </Link>
      </div>
    );
  }
}
