import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import PageTitle from "../pageTitle";
class Shipping extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  onSubmit = (fields) => {
    console.log(fields);
  };
  render() {
    return (
      <div className="shipping">
        <PageTitle className="sign-in-page-title" title="Shipping Address" />
        {/* <SignInForm onSubmit={this.onSubmit} className="sign-in-form" /> */}
      </div>
    );
  }
}
Shipping = connect(null, actions)(Shipping);
export default Shipping;
