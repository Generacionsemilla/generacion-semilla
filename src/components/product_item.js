import React from 'react';
import {Link} from "react-router-dom";

const ProductItem = ({product}) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <Link to={'/products/'+product.name}>{product.name}</Link>
            <p >{product.description}</p>
        </div>
    )
};

export default ProductItem;