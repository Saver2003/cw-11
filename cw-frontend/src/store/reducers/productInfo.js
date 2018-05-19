import {FETCH_PRODUCT_INFO_SUCCESS} from "../actions/actionTypes";

const initialState = {
  productInfo: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCT_INFO_SUCCESS:
      return {...state, productInfo: action.product};
    default:
      return state;
  }
};

export default reducer;