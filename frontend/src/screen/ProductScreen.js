import React, { useState, useEffect, useDispatch } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, [])
    
    return <div className="details">
        <div className="back-to-result">
            <Link to="/">Back to Result</Link>
            </div>
            {loading ? <div>Loading...</div>:
            error ? <div>{error} </div>:
            (
             <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                           <h4>{product.name}</h4> 
                        </li>
                        <li>
                            {product.rating} stars ({product.numReviews} Reviews)
                        </li>
                        <li>
                        Price: <b>Ksh {product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                         Price: {product.price}   
                        </li>
                        <li>
                         Status: {product.price}   
                        </li>
                        <li>
                         Qty: <select value={qty} onchange={(e) => { setQty(e.target.value)}}>
                             {[...Array(product.countInStock).keys()].map(x=>
                             <option value={x + 1}>{x + 1}</option>
                             )}
                             </select>  
                        </li>
                        <li>
                            <button className="button">Add to cart</button>
                        </li>
                    </ul>
                </div>

            </div>   
            )
            }
            

        
    </div>
}
export default ProductScreen;