import React from "react";
import Dropzone from "react-dropzone";
import { applyLayout } from "../shared/hoc/apply-layout";
import Layout from "../components/layout/layout";
import BaseComponent from "../shared/app/base-component";

interface Props {}

interface State {
  files: File[];
}

@applyLayout(Layout)
export default class Upload extends BaseComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { files: [] };
  }

  private onDrop(files: File[]) {
    this.setState({ files: files });
  }

  private getFiles(): JSX.Element[] {
    return this.state.files.map(file => {
      const fileUrl = URL.createObjectURL(file);
      return <img src={fileUrl} height={100} />;
    });
  }

  render() {
    return (
      <div>
        <h1>Drag and drop</h1>
        <Dropzone onDrop={files => this.onDrop(files)} accept="image/*">
          {this.getFiles()}
        </Dropzone>
        <div>
          Files
          <span>{this.state.files.length}</span>
        </div>
      </div>
    );
  }
}
