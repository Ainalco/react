/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product'


  const Products=({products})=>{
    //console.log(products);
    return (
        <div className="products">
             {products.map((products) => <Product key={products.id} product={products} className="product-card"/>)};
          </div>
    ); 
                       
   
}

export default Products