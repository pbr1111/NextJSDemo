import React from "react";
import Header from '../header/header';
import "./layout.scss"

export default class Layout extends React.Component {
  render() {
    return (
      <div id="layout">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
