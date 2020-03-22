import { BUY_ICECREAM } from "./iceCreamTypes";

const initialStore = {
  numberOfIceCreams: 20
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1
      };

    default:
      return state;
  }
};

export default reducer;
