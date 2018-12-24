import { applyLayout } from "../shared/hocs/layout/apply-layout";
import { pageTitle } from "../shared/hocs/layout/page-title";
import React from "react";
import Layout from "../components/layout/layout";
import FullFrameModal from "../components/full-frame-modal/full-frame-modal";
import {
  localizeComponent,
  LocaleProps
} from "../shared/hocs/localization/localize-component";

interface Props extends LocaleProps {}

interface State {
  showModal: boolean;
  fullFrameModal: boolean;
}

@applyLayout(Layout)
@localizeComponent
@pageTitle<Props>(props => props.translate("modal"))
export default class Modal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { showModal: false, fullFrameModal: false };
  }

  onShowModalClick() {
    this.setState({ showModal: !this.state.showModal });
  }

  onFullFrameModalClick() {
    this.setState({ fullFrameModal: !this.state.fullFrameModal });
  }

  onModalClosed(result?: any) {
    console.log(result);
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <h1>Open modal</h1>
        <button onClick={() => this.onShowModalClick()}>
          {this.state.showModal ? "Hide" : "Show"} modal
        </button>
        <button onClick={() => this.onFullFrameModalClick()}>
          {this.state.fullFrameModal ? "No full frame" : "Full frame"}
        </button>
        {this.state.showModal && (
          <FullFrameModal
            isFullFrame={this.state.fullFrameModal}
            dismissOnBackdropClick={true}
            dismissOnEscape={true}
            onCancel={() => this.onModalClosed()}
            onClose={result => this.onModalClosed(result)}
          />
        )}
      </div>
    );
  }
}
