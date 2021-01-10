import React, { Component } from "react";
import PageTitle from "../pageTitle";
import AccountInfoForm from './account-info-form'
class AccountInfo extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  };
  render() {
    return (
      <div className="account-info">
        <PageTitle
          title="Account Information"
          className="account-info-page-title"
        />
        <AccountInfoForm
          onSubmit={this.onSubmit}
          className="account-info-form"
        />
      </div>
    );
  }
}
export default AccountInfo;
