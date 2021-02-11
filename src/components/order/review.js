import React, { Component } from "react";
import PageTitle from "../pageTitle";
import ReviewForm from "./reviewForm";
import { connect } from "react-redux";
import * as actions from "../../actions";
class Review extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  onSubmit(fields) {
    console.log("fields");
  }
  render() {
    let subtotal =0;
    this.props.cartProducts.map(cartProduct => {
        subtotal += cartProduct.quantity * cartProduct.product.price;
    })
    return (
      <div className="review">
        <PageTitle className="review__page-title" title="Order Review" />
        <ReviewForm className="review__form" onSubmit={this.onSubmit} subtotal={subtotal}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return { cartProducts };
}
Review = connect(mapStateToProps, actions)(Review);
export default Review;
