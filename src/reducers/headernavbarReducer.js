import { SET_NAVBAR_LINKS, SET_HEADER_LINKS } from "../actions/types";
const INITIAL_STATE = {
  headerLinks: [
    {
      title: "Sign In",
      id: 0,
    },
    {
      title: "Login",
      id: 1,
    },
  ],
  navbarLinks: [
    {
      title: "Account",
      id: 0,
      active:true,
    },
    {
      title: "Purchases",
      id: 1,
      active:false,
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
