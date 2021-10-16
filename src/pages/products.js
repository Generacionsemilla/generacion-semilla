import React from 'react';
import {PRODUCTS} from '../model/product'
import ProductItem from "../components/product_item";

const Products = () => {
    return (
        <div>Products page
            {PRODUCTS.map( (p,i) => {
                return <ProductItem product_name={p.name}/>
            })}
        </div>


    );
};

export default Products;