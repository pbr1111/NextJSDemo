import React from "react";
import { NextComponentType, NextContext } from "next";
import "../../../styles/modal.scss";

export interface ModalProps<T> {
  isFullFrame?: boolean;
  dismissOnBackdropClick?: boolean;
  dismissOnEscape?: boolean;
  onClose?(result?: T): void;
  onCancel?(): void;
}

const BODY_MODAL_CLASSES = {
  modalOpen: "modal-open"
};

const KEYBOARD_KEY_CODES = {
  escape: 27
};

export function modal<P extends ModalProps<T>, T = {}>(
  WrappedComponent: NextComponentType<P>
): any {
  return class extends React.Component<P> {
    static async getInitialProps(context?: NextContext): Promise<any> {
      if (WrappedComponent.getInitialProps != null) {
        return await WrappedComponent.getInitialProps(context);
      }
      return {};
    }

    componentWillMount() {
      document.body.classList.add(BODY_MODAL_CLASSES.modalOpen);
      document.addEventListener("keydown", e => this.onKeyDown(e), false);
    }

    componentWillUnmount() {
      document.body.classList.remove(BODY_MODAL_CLASSES.modalOpen);
      document.removeEventListener("keydown", e => this.onKeyDown(e), false);
    }

    dismiss() {
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }

    onClickBackdrop() {
      if (this.props.dismissOnBackdropClick) {
        this.dismiss();
      }
    }

    onKeyDown(e: KeyboardEvent) {
      if (
        e.keyCode == KEYBOARD_KEY_CODES.escape &&
        this.props.dismissOnEscape
      ) {
        this.dismiss();
      }
    }

    render() {
      return (
        <div
          className={
            "modal-container " + (this.props.isFullFrame ? "full-frame" : "")
          }
        >
          <div
            className="modal-backdrop"
            onClick={() => this.onClickBackdrop()}
          />
          <div className="modal-content">
            <button
              onClick={() => this.dismiss()}
              className="modal-dismiss-button"
            >
              X
            </button>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
}
