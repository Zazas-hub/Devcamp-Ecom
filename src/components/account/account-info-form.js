import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../formFields";


class AccountInfoForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        className={`${className}' account-info-form'`}
      >
        <Field
          className="account-info-form-name"
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="account-info-form-email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="account-info-form-street-address"
          type="address"
          title="Street Address"
          placeholder="Street Address"
          name="address"
          component={FormInput}
        />
        <Field
          className="account-info-form-city"
          type="city"
          title="City"
          placeholder="City"
          name="city"
          component={FormInput}
        />
        <Field
          className="account-info-form-state"
          type="state"
          title="State"
          placeholder="State"
          name="state"
          component={FormInput}
        />
        <Field
          className="account-info-form-zipcode"
          type="zipcode"
          title="Zipcode"
          placeholder="Zipcode"
          name="zipcode"
          component={FormInput}
        />
        {/* <Field
          className="sign-in-form-password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          component={FormInput}
        />
        <div className="sign-in-form-line"></div>
        <Field
          className="sign-in-form-login"
          onClick={() => history.push("/account")}
          type="submit"
          title="Login"
          placeholder="Password"
          name="login"
          component={FormButton}
        /> */}
      </form>
    );
  }
}
AccountInfoForm = reduxForm({
  form: "SignIn",
})(AccountInfoForm);
export default AccountInfoForm;
