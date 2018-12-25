import React from "react";
import { NextComponentType, NextContext } from "next";
import "../../../styles/modal.scss";
import { createComponentWithHoistedStatics } from "../../helpers/hocs";

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

export const modal = <P extends ModalProps<T>, T = {}>(
  WrappedComponent: NextComponentType<P>
) =>
  createComponentWithHoistedStatics(
    class extends React.Component<P> {
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
    },
    WrappedComponent
  );
