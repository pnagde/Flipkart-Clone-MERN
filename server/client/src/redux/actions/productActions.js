import axios from "axios";
import * as action from '../constants/productConst.js'


const url = '';

export const productActions = () => async(dispatch) => {
    try {
        const { data } = await axios.get(`/products`);
        dispatch({ type: action.GET_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: action.GET_PRODUCT_FAIL, payload: error.response });
    }
}
export const getProductDetails = (id) => async(dispatch) => {
    try {
        const { data } = await axios.get(`/product/${id}`);
        dispatch({ type: action.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: action.GET_PRODUCT_DETAILS_FAIL, payload: error.response });
    }
}