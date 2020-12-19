import Axios from "axios";
import { PRODUCT_LIST_REQUEST } from "../constants/productConstants"
const listProduct = () => async (dispatch) => {
    dispatch(PRODUCT_LIST_REQUEST);
    const { data } = await Axios.get("api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
}