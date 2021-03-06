import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT,
} from "./types";

export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product,
  };
}

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 1,
        product: {
          _id: 0,
          title: "JavaScript in the Browser",
          discription:
            "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry",
          price: 1.99,
          belongsTo: [0, 1],
          imageUrl:"https://picsum.photos/200/300",
        },
        quantity: 2,
      },
      {
        _id: 2,
        product: {
          _id: 1,
          title: "Graph Database",
          discription:
            "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry",
          price: 1.99,
          belongsTo: [0, 1],
          imageUrl:"https://picsum.photos/200/300",
        },
        quantity: 3,
      },
    ],
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.4,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Ronald Peter",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 1,
        total: 19.4,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 2,
        total: 20.4,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Peter Fred",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 3,
        total: 30.4,
        orderNumber: "A00535848248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: " Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 4,
        total: 40.4,
        orderNumber: "A0048242582843",
        orderDate: new Date().toDateString(),
        creditCard: "-0288000",
        user: {
          name: "big King",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 5,
        total: 40.4,
        orderNumber: "A0048244242343",
        orderDate: new Date().toDateString(),
        creditCard: "-002823800",
        user: {
          name: "brandon King",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 6,
        total: 40.4,
        orderNumber: "A0048244278343",
        orderDate: new Date().toDateString(),
        creditCard: "-08283000",
        user: {
          name: "zazas King",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 7,
        total: 40.4,
        orderNumber: "A0048272248343",
        orderDate: new Date().toDateString(),
        creditCard: "-005368200",
        user: {
          name: "Bran King",
          shippingAddress: "1234 West State Street",
        },
      },
    ],
  };
}
