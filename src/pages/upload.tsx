import React from "react";
import Dropzone, { DropzoneRenderArgs } from "react-dropzone";
import { applyLayout } from "../shared/hocs/apply-layout";
import Layout from "../components/layout/layout";
import { pageTitle } from "../shared/hocs/page-title";
import DropzonePreview from "../components/dropzone/dropzone-preview/dropzone-preview";
import DropzoneInput from "../components/dropzone/dropzone-input/dropzone-input";

interface Props {}

interface State {
  files: File[];
}

@applyLayout(Layout)
@pageTitle(() => "Upload")
export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { files: [] };
  }

  private onDrop(files: File[]) {
    this.setState({ files: files });
  }

  render() {
    return (
      <div>
        <h1>Drag and drop</h1>
        <Dropzone onDrop={files => this.onDrop(files)} accept="image/*">
          {(args: DropzoneRenderArgs) => (
            <div {...args.getRootProps()}>
              <DropzoneInput {...args}>
                <DropzonePreview files={this.state.files} />
              </DropzoneInput>
            </div>
          )}
        </Dropzone>
        <div>Files {this.state.files.length}</div>
      </div>
    );
  }
}
