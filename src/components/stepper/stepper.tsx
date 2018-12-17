import React, { ReactElement } from "react";
import { StepProps } from "./step";
import "./stepper.scss";

interface Props {}

interface State {
  currentStep: number;
  totalSteps: number;
}

export default class Stepper extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      totalSteps: React.Children.count(this.props.children) - 1
    };
  }
  private onNext() {
    this.setState({ currentStep: this.state.currentStep + 1 });
  }

  private onBack() {
    if (this.state.currentStep != 0) {
      this.setState({ currentStep: this.state.currentStep - 1 });
    }
  }

  private onSubmit() {}

  private goToStep(numberStep) {
    console.log(numberStep);
    this.setState({currentStep : numberStep})
  }


  render() {
    return (
      <div className="stepper-container">
        <div className="stepper-step-container">
          <div className="stepper-step-legend">
            {React.Children.map(
              this.props.children,
              (element: ReactElement<StepProps>, index: number) => {
                return (
                  <div className="stepper-step"  onClick={()=> this.goToStep(index)}>
                    <div className="stepper-step-icon">
                      <img src={element.props.icon}/>
                    </div>
                    <div className="stepper-step-label">
                      {element.props.title}
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="stepper-step-content">
            {this.props.children[this.state.currentStep]}
          </div>
        </div>
        <div className="stepper-button">
          {this.state.currentStep != 0 && (
            <button onClick={() => this.onBack()}>BACK</button>
          )}

          {this.state.currentStep == this.state.totalSteps ? (
            <button onClick={() => this.onSubmit()}>SUBMIT</button>
          ) : (
            <button onClick={() => this.onNext()}>NEXT</button>
          )}
        </div>
      </div>
    );
  }
}
