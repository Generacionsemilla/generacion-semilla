import React from 'react';
import {PRODUCTS} from '../model/product'
import ProductItem from "../components/product_item";
import {Col, Container, Row} from "react-bootstrap";
import {STYLES_COMMON} from "../assets/styles_common";
import Header from "../components/header";
import Footer from "../components/footer";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "react-responsive";

const Products = () => {

    const { t } = useTranslation();
    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });
    const largeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.lg+')' });
    const nLines = Math.floor(PRODUCTS.length / 4) + (PRODUCTS.length % 4 !== 0 ? 1 : 0);

    const styles = {
        title:{
            fontFamily: 'tomarik-brush,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.azulita,
            fontSize: largeTop ? '40px' : '50px'
        },
        productsRow:{
            margin: '20px 0 200px',
            minHeight: mediumTop ? ''+ (100 + 218 * PRODUCTS.length ) +'px' : ''+ (212 + 288 * nLines) +'px',
            height: 'calc(-750px + 100vh)'
        },
        itemsRow: {
            marginTop: '30px',
            justifyContent: 'center'
        }
    }

    return (
        <Container fluid style={STYLES_COMMON.pageContainer}>
            <Header title={t('titles.products')}></Header>
            <Row style={styles.productsRow}>
                { !mediumTop &&
                    <Col xs={12} className={'text-center'}>
                        <h3 style={styles.title}>NUESTROS PRODUCTOS</h3>
                    </Col>
                }
                { !mediumTop &&
                    <Col xs={{span: 10, offset: 1}}>
                        {Array.from({length: nLines}).map((nouse, rowN) => {
                            return (
                            <Row className={'text-center'} style={styles.itemsRow}>
                                {PRODUCTS.slice(rowN * 4, (rowN + 1) * 4).map( (p,i) => {
                                    return (
                                        <ProductItem product={p} index={i}/>
                                    )
                                })}
                            </Row>)
                        })}
                    </Col>
                }
                { mediumTop &&
                    <Col xs={{span: 10, offset: 1}}>
                        <Row className={'text-center'} style={styles.itemsRow}>
                            {PRODUCTS.map( (p,i) => {
                                return <ProductItem product={p} index={i}/>
                            })}
                        </Row>
                    </Col>
                }

            </Row>

            <Footer></Footer>
        </Container>
    );
};

export default Products;