import React from "react";
import { modal, ModalProps } from "../../shared/hocs/modal";

interface Props extends ModalProps<string> {}

@modal
export default class FullFrameModal extends React.Component<Props> {
  onSubmit() {
    this.props.onClose("hello");
  }

  render() {
    return (
      <div>
        Modal
        <button onClick={() => this.onSubmit()}>Ok</button>
      </div>
    );
  }
}
