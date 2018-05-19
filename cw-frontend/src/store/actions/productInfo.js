import axios from '../../axios-api';
import {FETCH_PRODUCT_INFO_SUCCESS} from "./actionTypes";

export const fetchProductInfoSuccess = product => {
  return {type: FETCH_PRODUCT_INFO_SUCCESS, product}
};

export const fetchProductInfo = (token) => {
  return dispatch => {
    axios.get('/products', {headers: {"Token": token}}).then(
      response => dispatch(fetchProductInfoSuccess(response.data))
    );
  }
};