import React from 'react';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {STYLES_COMMON} from "../assets/styles_common";

const ProductItem = ({product}) => {

    const styles = {
        desktop:{
            icons:{
                maxWidth: '100px',
                maxHeight: '100px'
            },
            product_name:{
                fontFamily: 'sketchnote-square,sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
                color: STYLES_COMMON.colors.verdeAzulado
            },
            more:{
                fontFamily: 'filson-pro,sans-serif',
                fontWeight: '700',
                fontStyle: 'normal',
                textDecoration: 'none',
                color: STYLES_COMMON.colors.tusaturado

            },
            description:{
                fontFamily: 'filson-pro,sans-serif',
                fontWeight: '400',
                fontStyle: 'normal'
            },
            link: {
                textDecoration: 'none'
            }
        }

    }

    return (
        <Col xs={12} md={3}>
            <Link style={styles.desktop.link} to={'/products/'+product.name}>
                <img style={styles.desktop.icons} src={require('../assets/products/icons/'+product.name+'.png').default}></img>
                <p style={styles.desktop.product_name}>{product.title.toUpperCase()}</p>
            </Link>
            <p style={styles.desktop.description}>{product.description}</p>
            <Link style={styles.desktop.more} to={'/products/'+product.name}>Ver más</Link>
        </Col>
    )
};

export default ProductItem;