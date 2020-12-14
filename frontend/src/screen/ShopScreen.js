import React from 'react';

function ShopScreen (props) {
    return <ul className="products">
    {
      data.products.map(product =>
        <li>
      <div className="product">
        <img  className="product-image" src={product.image} alt="wine"/>
      <div className="product-name"><a href="product.html">{product.name}</a></div>
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