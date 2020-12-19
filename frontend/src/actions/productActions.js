
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../constants/productConstants"
import axios from "axios";

const listProducts = () => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }
    catch(error){
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
   
}

const detailsProduct = (productId) => (dispatch) =>  {
    try {
        dispatch({type: PRODUCT_DETAILS_REQuesT,payload: productId});
        const {data} = await axios.get("/api/products/" + productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch
    }
}

export { listProducts };