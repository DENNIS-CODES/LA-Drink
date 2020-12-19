
import { PRODUCT_LIST_REQUEST } from "../constants/productConstants"
import axios from "axios";
const listProduct = () => async (dispatch) => {
    try{
        dispatch(PRODUCT_LIST_REQUEST);
    const { data } = await axios.get("api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }
    catch(error){
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
   
}

export { listProduct }