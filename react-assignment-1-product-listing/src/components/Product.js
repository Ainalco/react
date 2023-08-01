/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';

const Product = (product) => {
  console.log(product);
   return (
      <article className="product">
      <img src={product.product.image} alt="image" />
      <div className="product__details">
        <h4 className="product__title">{product.product.title}</h4>
        <p>Price: $ {product.product.price}</p>
        <p>Rating: {product.product.rating.rate}</p>
        <p className="product__desc">{product.product.description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
