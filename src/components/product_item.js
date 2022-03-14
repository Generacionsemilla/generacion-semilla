import React from 'react';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {STYLES_COMMON} from "../assets/styles_common";
import {useMediaQuery} from "react-responsive";

const ProductItem = ({product, index}) => {

    const mediumTop = useMediaQuery({query: '(max-width: ' + STYLES_COMMON.breakpoints.md + ')'});
    const largeTop = useMediaQuery({query: '(max-width: ' + STYLES_COMMON.breakpoints.lg + ')'});

    const styles = {
        icons: {
            maxWidth: mediumTop ? '150px' : largeTop ? '125px' : '150px',
            maxHeight: mediumTop ? '150px' : largeTop ? '125px' : '150px',
            float: mediumTop ? (index % 2 === 0 ? 'left' : 'right') : ''
        },
        product_name: {
            fontFamily: 'sketchnote-square,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.verdeAzulado,
            fontSize: largeTop ? '20px' : '25px'
        },
        more: {
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            textDecoration: 'none',
            color: STYLES_COMMON.colors.tusaturado

        },
        description: {
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal'
        },
        link: {
            textDecoration: 'none'
        },
        cols: {
            marginTop: mediumTop && index !== 0 ? '40px' : ''
        }
    }

    return (
        <Col xs={12} md={3} style={styles.cols}>
            <Link style={styles.link} to={'/products/' + product.name}>
                <img style={styles.icons} src={require('../assets/products/icons/' + product.name + '.png').default}></img>
                <p style={styles.product_name}>{product.title.toUpperCase()}</p>
            </Link>
            <p style={styles.description}>{product.description}</p>
            <Link style={styles.more} to={'/products/' + product.name}>Ver más</Link>
        </Col>
    )
};

export default ProductItem;