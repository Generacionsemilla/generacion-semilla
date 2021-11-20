import React from 'react';
import {Link} from "react-router-dom";

const ProductItem = ({product}) => {

    const styles = {
        icons:{
            width: '100px'
        },
        product_name:{
            fontFamily: 'sketchnote-square,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal'
        },
        more:{
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal'
        }
    }

    return (
        <div>
            <Link to={'/products/'+product.name}>
                <img style={styles.icons} src={require('../assets/products/icons/'+product.name+'.png').default}></img>
                <p style={styles.product_name}>{product.title}</p>
            </Link>
            <p>{product.description}</p>
            <Link style={styles.more} to={'/products/'+product.name}>Ver más</Link>
        </div>
    )
};

export default ProductItem;