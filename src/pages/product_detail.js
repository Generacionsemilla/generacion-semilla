import React from 'react';
import {useParams} from "react-router-dom";
import {PRODUCTS} from "../model/product";

const ProductDetail = () => {

    let { productName } = useParams();
    const product = PRODUCTS.find(prod => prod.name === productName);

    return (
        <div>
            <h2>{product.name}</h2>
            <div>{product.upper_text}</div>
            <div>{product.lower_text}</div>
        </div>
    );

};

export default ProductDetail;