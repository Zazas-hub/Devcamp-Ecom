import React, { Component } from "react";
import {reduxForm,Field} from 'redux-form';

export default class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <h1>hi there ready to sign up !!!</h1>
      </div>
    );
  }
  SignIn=reduxForm({
      form:'SignIn'
  })(SignIn)
}
