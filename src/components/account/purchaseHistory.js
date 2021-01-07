import React, { Component } from "react";
import PageTitle from "../pageTitle";
import Purchases from "./purchases";
import PurchaseDetail from "./purchasedetail";
class PaymentHistory extends Component {
  render() {
    return (
      <div className="purchase-history">
        <PageTitle
          className="purchase-history-page-title"
          title="Purchase History"
        />
        <Purchases className="purchase-history-purchases" />
        <PurchaseDetail className="purchase-history-detail" />
        <div className="purchase-history-border-bottom"></div>
      </div>
    );
  }
}
export default PaymentHistory;
