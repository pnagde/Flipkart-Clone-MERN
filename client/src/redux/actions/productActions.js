import axios from "axios";
import * as action from '../constants/productConst.js'


const url = 'http://localhost:8000';

export const productActions = () => async(dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products`);
        dispatch({ type: action.GET_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: action.GET_PRODUCT_FAIL, payload: error.response });
    }
}
export const getProductDetails = (id) => async(dispatch) => {
    try {
        console.log("Start product fetching");
        const { data } = await axios.get(`${url}/product/${id}`);
        console.log(data);
        console.log("Done");
        dispatch({ type: action.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: action.GET_PRODUCT_DETAILS_FAIL, payload: error.response });
    }
}