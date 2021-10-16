import React from 'react';
import {Link} from "react-router-dom";

const ProductItem = ({product_name}) => {
    return (
        <div>
            <h3>{product_name}</h3>
            <Link to={'/products/'+product_name}>{product_name}</Link>
        </div>
    )
};

export default ProductItem;