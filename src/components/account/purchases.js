import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

class Purchases extends Component {
  componentDidMount() {
    this.props.fetchUserPurchases();
  }
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} purchases`}>
        {this.props.purchases.map((purchase) => {
          return (
            <a onClick={()=>this.props.setPurchaseDetail(purchase._id)} key={purchase._id}>
              {purchase.title}
              <img src="http://via.placeholder.com/50x50" />
            </a>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { purchases } = state.user;
  return { purchases };
}
Purchases = connect(mapStateToProps, actions)(Purchases);
export default Purchases;
