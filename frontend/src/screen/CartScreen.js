import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
function CartScreen(props){

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;



    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [])
    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
               <li>
                   <h3>
                       Shopping Cart
                       </h3>
                       <div>
                           Price
                       </div>
                   </li>
                   {
                       cartItems.length ===0 ?
                       <div>
                           Cart is empty
                           </div>
                           :
                           cartItems.map( item =>
                            <div>
                                <img src={item.image} alt="product" />
                                <div className="cart-name">
                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        Qty:
                                        <select>
                                           <option valu="1">1</option>
                                           <option valu="1">2</option>
                                           <option valu="1">3</option> 
                                        </select>
                                    </div>
                                </div>
                                <div>
                                   {item.price} 
                                </div>
                            </div>
                           )
                   } 
            </ul>
            <div className="cart-action">
                <h3>
                    Subtotal ( {cartItems.reduce((a, c) => a + c.qty), 0} items)
                </h3>
                <button className="button primary" disable={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </div>
}

export default CartScreen;