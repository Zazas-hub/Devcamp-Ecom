import React,{component} from 'react'
import { SET_NAVBAR_LINKS, SET_HEADER_LINKS } from "../actions/types";
import PurchaseHistory from "../components/account/purchaseHistory";
import AccountInformation from "../components/account/accountInfo";

const INITIAL_STATE = {
  headerLinks: [
    // {
    //   _id: 0,
    //   title: "Shop",
    //   path: "/shop",
    // },
    // {
    //   _id: 1,
    //   title: "Logout",
    //   path: "/",
    // },
  ],
  navbarLinks: [
    // {
    //   _id: 0,
    //   title: "Purchase History",
    //   active: true,
    //   component: <PurchaseHistory />,
    // },
    // {
    //   _id: 1,
    //   title: "Account Information",
    //   active: false,
    //   component: <AccountInformation />,
    // },
  ],
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_HEADER_LINKS:
      return {
        ...state,
        headerLinks: action.payload,
      };
    case SET_NAVBAR_LINKS:
      return {
        ...state,
        navbarLinks: action.payload,
      };
    default:
      return state;
  }
}
