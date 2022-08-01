import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {STYLES_COMMON} from "../assets/styles_common";
import {useMediaQuery} from "react-responsive";

const ProductItem = ({product, index}) => {

    const smallTop = useMediaQuery({query: '(max-width: ' + STYLES_COMMON.breakpoints.sm + ')'});
    const mediumTop = useMediaQuery({query: '(max-width: ' + STYLES_COMMON.breakpoints.md + ')'});
    const largeTop = useMediaQuery({query: '(max-width: ' + STYLES_COMMON.breakpoints.lg + ')'});

    const styles = {
        icons: {
            maxWidth: mediumTop ? '100%' : largeTop ? '125px' : '150px',
            maxHeight: mediumTop ? '150px' : largeTop ? '125px' : '150px',
            float: mediumTop ? (index % 2 === 0 ? 'left' : 'right') : ''
        },
        product_name: {
            fontFamily: 'tomarik-brush,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.verdeAzulado,
            fontSize: smallTop ? '16px' : largeTop ? '20px' : '25px',
            minHeight: !mediumTop && '75px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: !mediumTop && '20px'
        },
        more: {
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            textDecoration: 'none',
            color: STYLES_COMMON.colors.tusaturado,
            fontSize: smallTop ? '14px' : largeTop ? '16px' : '18px',
        },
        link: {
            textDecoration: 'none'
        },
        rows: {
            marginTop: mediumTop && index !== 0 ? '80px' : ''
        },
        colsMobile:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    }

    if(!mediumTop){
        return(
            <Col xs={12} md={3} >
                <Link style={styles.link} to={'/products/' + product.name}>
                    <img style={styles.icons} src={require('../assets/products/icons/' + product.name + '.png').default}></img>
                    <p style={styles.product_name}>{product.title.toUpperCase()}</p>
                </Link>
                <Link style={styles.more} to={'/products/' + product.name}>Ver más</Link>
            </Col>
        )
    } else
    return (
        <Row style={styles.rows}>
            {index % 2 === 0 &&
            <Col xs={6}>
                <Link style={styles.link} to={'/products/' + product.name}>
                    <img style={styles.icons} src={require('../assets/products/icons/' + product.name + '.png').default}></img>
                </Link>
            </Col>
            }
            <Col xs={6} style={styles.colsMobile}>
                    <Link style={styles.link} to={'/products/' + product.name}>
                        <p style={styles.product_name}>{product.title.toUpperCase()}</p>
                    </Link>
                    <p style={styles.description}>{product.description}</p>
                    <Link style={styles.more} to={'/products/' + product.name}>Ver más</Link>
            </Col>
            {index % 2 !== 0 &&
            <Col xs={6}>
                <Link style={styles.link} to={'/products/' + product.name}>
                    <img style={styles.icons} src={require('../assets/products/icons/' + product.name + '.png').default}></img>
                </Link>
            </Col>
            }
        </Row>


    )
};

export default ProductItem;