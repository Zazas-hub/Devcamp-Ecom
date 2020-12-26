import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

export default class SignInForm extends Component {
  render() {
      const {className}=this.props;
    return <form className={`${className}'sign-in_form'`}>
        sign in for returning usres.
    </form>;
  }
  SignInForm = reduxForm({
    form: "SignIn",
  })(SignInForm);
}
