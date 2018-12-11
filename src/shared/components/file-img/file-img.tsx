import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  file: File;
}

interface State {
  fileSrc: string;
}

export default class FileImg extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { fileSrc: null };
  }

  componentDidMount() {
    if (this.props.file != null) {
      this.setState({ fileSrc: URL.createObjectURL(this.props.file) });
    }
  }

  componentWillUnmount() {
    if (this.state.fileSrc != null) {
      URL.revokeObjectURL(this.state.fileSrc);
    }
  }

  render() {
    return <img {...this.props} src={this.state.fileSrc} />;
  }
}
