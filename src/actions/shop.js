import {
  SET_SHOP_CATEGORIES,
  SET_SHOP_PRODUCTS,
  SET_NAVBAR_LINKS,
  FILTER_PRODUCTS_WITH_CATEGORY_ID,
  FILTER_PRODUCTS_WITH_QUERY
} from "./types";
export function filterProductsWithQuery(fields){
  return({
    type:FILTER_PRODUCTS_WITH_QUERY,
    payload:fields
  })
}
export function filterProductsWithCategoryId(_id) {
  console.log(_id,'something');
  return {
    type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
    payload: _id,
  };
}
export function fetchShopCategories() {
  return ({
    type: SET_SHOP_CATEGORIES,

    payload: [
      {
        _id: 0,
        title: "All",
      },
      {
        _id: 1,
        title: "JavaScript",
      },
      {
        _id: 2,
        title: "UI/UX",
      },
      {
        _id: 3,
        title: "Python",
      },
      {
        _id: 4,
        title: "UML",
      },
      {
        _id: 5,
        title: "Ruby",
      },
      {
        _id: 6,
        title: "Linux",
      },
    ],
  });
}

export function fetchShopProduts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: "JavaScript in the Browser",
        discription:
          "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry",
        price: 1.99,
        belongsTo: [0, 1],
      },
      {
        _id: 1,
        title: "Graph Database",
        discription:
          "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry",
        price: 1.99,
        belongsTo: [0, 1],
      },
      {
        _id: 2,
        title: "UI/UX",
        discription:
          "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry",
        price: 2.99,
        belongsTo: [0, 1],
      },
      {
        _id: 3,
        title: "Full Stack Development ",
        discription: "Wtry Lorem Ipsum has been the industry",
        price: 4.99,
        belongsTo: [0, 1],
      },
      {
        _id: 4,
        title: "User Interface Design",
        discription:
          "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry",
        price: 6.99,
        belongsTo: [0, 2],
      },
      {
        _id: 5,
        title: "Javascript Development ",
        discription:
          "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry",
        price: 1.69,
        belongsTo: [0, 1, 4],
      },
      {
        _id: 6,
        title: "Advance OOOp",
        discription:
          "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry",
        price: 1.99,
        belongsTo: [0, 6],
      },
    ],
  };
}
