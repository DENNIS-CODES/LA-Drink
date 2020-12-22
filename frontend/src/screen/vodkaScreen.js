import React from 'react';
import datavodka from '../datavodka';
import { Link } from 'react-router-dom';

function vodkaScreen (props) {
    console.log(props.match.params.id);
    const product = datavodka.products.find(x =>  x._id === props.match.params.id);
    return <div className="details">
        <div className="back-to-result">
            <Link to="/">Back to Result</Link>
            </div>
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
                         Qty: <select>
                             <option>1</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             </select>  
                        </li>
                        <li>
                            <button className="button">Add to cart</button>
                        </li>
                    </ul>
                </div>

            </div>

        
    </div>
}
export default vodkaScreen;