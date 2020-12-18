import { createStore, combineReducers } from 'redux';
import { productListReducer } from './reducer/productReducers';


const initialState= {};
const reducer = combineReducers({
    productList: productListReducer,
})

const store = createStore(reducer, initialState);
export default store;