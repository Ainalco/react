/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product'


  const Products=({products})=>{
    return (
        <div className="products">
         {
            products.map((product,id) => (
               <Product key={id} product={product} className="product-card" />
            ))
         }
          </div>
    ); 
                       
   
}

export default Products