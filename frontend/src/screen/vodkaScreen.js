import React, { useEffect } from 'react';
import datavodka from '../datavodka';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {listProducts } from "../actions/productActions";

function vodkaScreen (props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, [])

    return loading? <div>Loading...</div> :
    error? <div>{error}</div> :
    <ul className="products">
        {
            products.map(product =>
                <li key={product.id}>
                    <div className="product">
                        <Link to={'/product/' + product.id}>
                            <img className="product-image" src={product.image} alt="ciroc"/>
                        </Link>
                        <div className="product-name">
                            <Link to={'/product/' + product._id}>{product.name}</Link>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">ksh{product.price}</div>
                    </div>
                </li>)
        }
    </ul>
}

export default vodkaScreen;