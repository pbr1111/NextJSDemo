import React, { ChangeEvent } from "react";
import Router from "next/router";
import BaseComponent from "../shared/app/base-component";

interface Props {}

interface State {
  user: string;
  password: string;
}

export default class Login extends BaseComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = { user: null, password: null };
  }

  onUserChanged(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ user: e.target.value });
  }

  onPasswordChanged(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ password: e.target.value });
  }

  onLogin() {
    document.cookie = `token=${this.state.user}`;
    Router.push("/");
  }

  render() {
    return (
      <div>
        <label>
          User: <input type="text" onChange={e => this.onUserChanged(e)} />
        </label>
        <label>
          Password:{" "}
          <input type="password" onChange={e => this.onPasswordChanged(e)} />
        </label>
        <button onClick={() => this.onLogin()}>Login</button>
      </div>
    );
  }
}
