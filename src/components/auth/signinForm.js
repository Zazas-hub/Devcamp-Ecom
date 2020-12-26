import React, { Component } from "react";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../formFields";

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className}'sign-in_form'`}>
        <Field
          className="sign-in-form-email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="sign-in-form-password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          component={FormInput}
        />
        <Field
          className="sign-in-form-login"
          onClick={() => console.log("submit conrent ")}
          type="submit"
          title="Login"
          placeholder="Password"
          name="login"
          component={FormButton}
        />
      </form>
    );
  }
}
SignInForm = reduxForm({
  form: "SignIn",
})(SignInForm);
export default SignInForm;
