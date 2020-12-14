import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ShopScreen (props) {
    return <ul className="products">
    {
      data.products.map(product =>
        <li>
      <div className="product">
      <Link to={'/product/' + product.id}>
        <img  className="product-image" src={product.image} alt="wine"/>
        </Link>
      <div className="product-name">
          <Link to={'/product/' + product.id}>{product.name}</Link></div>
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