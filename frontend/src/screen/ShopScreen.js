import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from "../actions/productActions";



function ShopScreen (props) {
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
        <li key={product._id}>
      <div className="product">
      <Link to={'/product/' + product._id}>
        <img  className="product-image" src={product.image} alt="wine"/>
        </Link>
      <div className="product-name">
          <Link to={'/product/' + product._id}>{product.name}</Link></div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-price">ksh{product.price}</div>
        <div className="product-rating">{product.rating} Stars (10 Reviews)</div>
        </div>
        </li>
        )
      }
      </ul>
}
export default ShopScreen; 