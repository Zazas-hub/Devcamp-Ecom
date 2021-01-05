import { SET_NAVBAR_LINKS, SET_HEADER_LINKS } from "../actions/types";
const INITIAL_STATE = {
  headerLinks: [
    {
      title: "Opps",
      id:0
    },
    {
      title: "Opps",
      id:1
    },
  ],
  navbarLinks: [
    {
      title: "account",
      id:0
    },
    {
      title: "purchases",
      id:1
    },
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