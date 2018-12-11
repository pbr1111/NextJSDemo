import React from "react";
import { DropzoneRenderArgs } from "react-dropzone";
import classNames from "classnames";

import "./dropzone-input.scss";

interface Props extends DropzoneRenderArgs {}

export default class DropzoneInput extends React.Component<Props> {
  render() {
    return (
      <div
        className={classNames("dropzone-input", {
          "accept-drag": this.props.isDragAccept,
          "reject-drag": this.props.isDragReject,
          "active-drag": this.props.isDragActive
        })}
      >
        <input {...this.props.getInputProps()} />
        <div>{this.props.isDragAccept ? "Drop" : "Drag"} files here...</div>
        {this.props.children}
      </div>
    );
  }
}
