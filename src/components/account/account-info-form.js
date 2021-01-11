import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton, LongGrayButton } from "../formFields";

class AccountInfoForm extends Component {
  constructor() {
    super();
    this.state = {
      showPasswords: false,
    };
  }
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
        {this.state.showPasswords ? (
          [
            <Field
              key={0}
              className="account-info-form-current"
              type="password"
              title=" Current Password"
              placeholder="Current Password"
              name="current"
              component={FormInput}
            />,
            <Field
              key={1}
              className="account-info-form-new"
              type="password"
              title=" New Password"
              placeholder="New Password"
              name="new"
              component={FormInput}
            />,
            <Field
              key={2}
              className="account-info-form-confirm"
              type="password"
              title=" Confirm Password"
              placeholder="Confirm Password"
              name="confirm"
              component={FormInput}
            />,

            <Field
              key={4}
              className="account-info-form-update"
              onClick={() => this.setState({ showPasswords: false })}
              type="submit"
              title="Update Information"
              name="update information"
              component={FormButton}
            />,
            <Field
              key={5}
              className="account-info-form-cancel"
              onClick={() => this.setState({ showPasswords: false })}
              type="button"
              title="Cancel"
              name="cancel"
              short={true}
              component={FormButton}
            />,
          ]
        ) : (
          <Field
            className="account-info-form-change-password"
            onClick={() => this.setState({ showPasswords: true })}
            labelTitle="Password"
            type="button"
            title="Change Password"
            name="change-password"
            component={LongGrayButton}
          />
        )}
        <div className="account-info-form-line"></div>,
      </form>
    );
  }
}
AccountInfoForm = reduxForm({
  form: "SignIn",
})(AccountInfoForm);
export default AccountInfoForm;
