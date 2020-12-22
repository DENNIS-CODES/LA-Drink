import Axios from "axios"
import { CART_ADD_ITEM } from '../constants/cartConstants';

const aaddToCart = {productId, qty} = (dispatch) =>{
    try {
        const { data } = await Axios.get("/api/products" + productId);
        dispatch({
            type : CART_ADD_ITEM, Payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    });
    } catch (error) {
        
    }
}