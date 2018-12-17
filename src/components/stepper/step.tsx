import React from "react";

export interface StepProps {
    title: string;
    icon?: string;
    canExit?(): void;
}

export default class Step extends React.Component<StepProps>{
    render(){
        // const {
        //     title, 
        //     canExit
        // } = this.props;

        return <React.Fragment>{this.props.children}</React.Fragment>;
    }   
} 