import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export default class SignUpForm extends Component {
  render() {
    return <form></form>;
  }
  SignUpForm = reduxForm({
    form: "SignUp",
  })(SignUpForm);
}
