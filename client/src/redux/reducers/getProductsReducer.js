import { CardActionArea } from "@material-ui/core";
import * as actionType from '../constants/productConst.js'

export function getProductsReducer(state = { products: [] }, action) {
    switch (action.type) {
        case actionType.GET_PRODUCT_SUCCESS:
            return { products: action.payload }
        case actionType.GET_PRODUCT_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}
export function getProductsDetailsReducer(state = { product: {} }, action) {
    switch (action.type) {
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { products: action.payload }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}