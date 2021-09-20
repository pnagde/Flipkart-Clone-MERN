import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer, getProductsDetailsReducer } from './getProductsReducer';


const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductsDetailsReducer
})

const middleware = [thunk];

const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;