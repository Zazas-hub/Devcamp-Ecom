import { SET_USER_PURCHASES  } from "./types";

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES ,
    payload: [
      {
        _id: 0,
        title: "purchase 1",
        ammount: 8.5,
      },
      {
        _id: 1,
        title: "purchase 2",
        ammount:100000,
      },
    ],
  };
}
