import React from 'react';
import {PRODUCTS} from '../model/product'
import ProductItem from "../components/product_item";

const Products = () => {
    return (
        <div>Products page
            {PRODUCTS.map( (p,i) => {
                return <ProductItem product={p}/>
            })}
        </div>


    );
};

export default Products;