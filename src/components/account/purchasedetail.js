import React, { Component } from "react";
import { connect } from "react-redux";

function PurchaseDetailLabel({ className, title, value }) {
  return (
    <div className={`${className} purchase-detail-label`}>
      <div className="purchase-detail-label-title">{title}</div>
      <div className="purchase-detail-label-value">{value}</div>
    </div>
  );
}
class PurchaseDetail extends Component {
  render() {
    const { className, orderDate, orderNumber, user,total,creditCard } = this.props;
    const { name, shippingAddress } = user;
    return (
      <div className={`${className} purchase-detail`}>
        <PurchaseDetailLabel
          className="purchase-detail-order-number"
          title="Order Number"
          value={orderNumber}
        />
        <PurchaseDetailLabel
          className="purchase-detail-order-date"
          title="Order Date"
          value={orderDate}
        />
        <PurchaseDetailLabel
          className="purchase-detail-order-shipping"
          title="Shipping Address"
          value={`${name}\n ${shippingAddress}`}
        />
         <PurchaseDetailLabel
          className="purchase-detail-order-total"
          title="Total"
          value={total}
        />
         <PurchaseDetailLabel
        className="purchase-detail-order-credit-card"
        title="Credit Card"
        value={creditCard}
      />
      <div className='purchase-detail-track-shipment'>Track-shipment</div>
      <div className='purchase-detail-print-reciept'>Print-reciept</div>

      </div>
    );
  }
}
function mapStateToProps(state) {
  const {purchaseDetail} = state.user;
  return {
   ...purchaseDetail,
  };
}
PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);
export default PurchaseDetail;
 