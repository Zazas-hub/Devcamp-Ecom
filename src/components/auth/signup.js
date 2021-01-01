import React, { Component } from "react";
import SignUpForm from "./signupForm";
import PageTitle from "../pageTitle";
export default class SignUp extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  };
  render() {
    return (
      <div className="sign-up">
        <PageTitle className="sign-in-page-title" title="Register" />
        <SignUpForm onSubmit={this.onSubmit} className="sign-up-form" />
      </div>
    );
  }
}
