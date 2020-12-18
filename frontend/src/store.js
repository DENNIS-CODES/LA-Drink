import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducer/productReducers';


const initialState= {};
const reducer = combineReducers({
    productList: productListReducer,
})

const composeEnhance = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhance(applyMiddleware(thunk)));
export default store;