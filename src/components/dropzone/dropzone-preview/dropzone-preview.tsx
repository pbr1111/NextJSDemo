import React from "react";
import FileImg from "../../../shared/components/file-img/file-img";

import "./dropzone-preview.scss";

interface Props {
  files: File[];
}

export default class DropzonePreview extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.files &&
          this.props.files.map(file => (
            <FileImg key={file.name} file={file} height={100} />
          ))}
      </div>
    );
  }
}
