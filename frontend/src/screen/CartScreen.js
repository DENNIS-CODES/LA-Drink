import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
  ? Number(props.loaction.search.split('=')[1])
  :1;
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  },[dispatch, productId, qty]);
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0?<MessageBox>
          Cart is empty. <Link to="/">Go Shopping</Link>
        </MessageBox>
        :
        (
          <ul>
            {
              cartItems.maps((item) => {
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img 
                         src={item.image}
                         alt={item.name}
                         className="email">
                         </img>
                    </div>
                    <div className="min-30">
                      <Link to={`/${item.product}`}>{item.name}</Link>
                    </div>
                    <div>
                      <select value={item.qty} onChange={e => dispatch(
                        addToCart(item.product), 
                        Number(e.target.value)
                      )
                    }>
                      {[...Array(product.countInStock).keys()].map(
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      )}
                    </select>
                    </div>
                  </div>
                </li>
              })
            }
          </ul>
        )
      }
      </div>
    </div>
  )
};
export default CartScreen;