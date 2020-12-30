import React, { Component } from "react";
import SignUpForm from "./signupForm";
export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-up">
        <h1>Sign Up form your new account</h1>
        <SignUpForm className="sign-up-form" />
      </div>
    );
  }
}
