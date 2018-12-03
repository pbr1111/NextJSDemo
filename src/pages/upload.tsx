import React from "react";
import Dropzone from "react-dropzone";

interface Props {}

interface State {
  files: File[];
}

export default class extends React.Component<Props, State> {
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
      return <img src={fileUrl} height={100} />
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
