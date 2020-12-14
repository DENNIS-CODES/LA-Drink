import React from 'react';
import data from '../data';
import { link } from 'react-router-dom';

function ProductScreen (props) {
    console.log(props.match.params.id);
    const product = data.products.find(x =>  x.id === props.match.params.id);
    return <div className="details">
        <div>
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
                            <b>{product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        
    </div>
}
export default ProductScreen;