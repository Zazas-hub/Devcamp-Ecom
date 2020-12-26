import React, { Component } from "react";
import SignUpForm from "./signupForm";
export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-up">
        <SignUpForm className='sign-up-form'/>
      </div>
    );
  }
}
