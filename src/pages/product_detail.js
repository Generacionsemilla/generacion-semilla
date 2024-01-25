import React from 'react';
import {useParams} from "react-router-dom";
import {PRODUCTS} from "../model/product";
import {Col, Container, Row} from "react-bootstrap";
import {STYLES_COMMON} from "../assets/styles_common";
import {useMediaQuery} from "react-responsive";
import Header from "../components/header";
import Footer from "../components/footer";

const ProductDetail = () => {

    let {productName} = useParams();
    const product = PRODUCTS.find(prod => prod.name === productName);

    const smallTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.sm+')' });
    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });
    const largeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.lg+')' });
    const xxlargeMin = useMediaQuery({ query: '(min-width: '+STYLES_COMMON.breakpoints.xxl+')' });
    console.log({product, productName});
    const styles = {
        title: {
            fontFamily: 'tomarik-brush,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.azulita,
            fontSize: largeTop ? '40px' : '50px'
        },
        productsRow: {
            margin: '20px 0 100px',
        },
        icons: {
            maxWidth: '100%',
            maxHeight: '200px'
        },
        image:{
            width:'100%',
            webkitInputPlaceholder: 'color: red'
        },
        desc_text:{
            whiteSpace: 'break-spaces',
            fontSize: mediumTop ? '12px' : '16px'
        },
        button:{
            borderRadius: '6px',
            borderColor: STYLES_COMMON.colors.tusaturado,
            backgroundColor: STYLES_COMMON.colors.tusaturado,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            fontFamily: 'ff-providence-sans-web-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            lineHeight: mediumTop ? '2' : '2.5',
            letterSpacing: '6px',
            width: mediumTop ? '160px' : '240px',
            height: mediumTop ? '40px' : '60px',
            fontSize: mediumTop ? '16px' : '22px',
            textDecoration: 'none',
            color: STYLES_COMMON.colors.blancoHielo
        },
        button_inactive:{
            fontSize: mediumTop ? '14px' : '20px',
            width: mediumTop ? '200px' : '240px',
            cursor: 'initial'
        },
        secondImageCol:{
            zIndex: '-1',
            marginBottom: smallTop ? '-220px' : mediumTop ? '-260px' : xxlargeMin ? '-290px' : '-200px'
        }
    }

    return (
        <Container fluid style={STYLES_COMMON.pageContainer}>
            <Header title={product.title.toUpperCase()}></Header>
            <Row>
                <Col md={{span: 4, offset: 4}} xs={{span: 4, offset: 4}} className={'text-center '}>
                    {!mediumTop &&
                    <h3 style={styles.title} className={'mb-5'}>{product.title.toUpperCase()}</h3>
                    }
                    <img style={styles.icons}
                         src={require('../assets/products/icons/' + product.name + '.png').default}></img>
                </Col>
            </Row>
            <Row className={'text-center mt-5'}>
                <Col xs={{span: 10, offset: 1}}>
                    {!mediumTop &&
                        <p style={styles.desc_text}>{product.upper_text_d}</p>
                    }
                    {mediumTop &&
                        <p style={styles.desc_text}>{product.upper_text_m}</p>
                    }
                </Col>
            </Row>
            <Row className={'mt-5'}>
                <Col xs={12} className={'p-0'}>
                    {product.active &&
                    <img style={styles.image} src={require(`../assets/products/images/${mediumTop ? 'mobile/' : 'desktop/'}${product.name}_1${product.image1_format}`).default}></img>
                    }
                    {!product.active &&
                    <img style={styles.image} src={require('../assets/products/images/' + (mediumTop ? 'mobile/' : 'desktop/') + 'coming_soon_1.png').default}></img>
                    }
                </Col>
            </Row>
            <Row className={'mt-5 mb-5 text-center'}>
                <Col xs={{span: 10, offset: 1}}>
                    {mediumTop &&
                    <p style={styles.desc_text}>{product.lower_text_m}</p>
                    }
                    {product.active &&
                    <a href={product.link} target="_blank" rel="noreferrer" style={styles.button} className={'btn'}>Comprar</a>
                    }
                    {!product.active &&
                    <p href={product.link} target="_blank" rel="noreferrer" style={{...styles.button, ...styles.button_inactive}} className={'btn'}>Próximamente</p>
                    }
                </Col>
            </Row>
            <Row className={'px-0 pb-32'}>
                <Col xs={12} className={'p-0 mb-5'} style={styles.secondImageCol}>
                    {product.active &&
                    <img style={styles.image} src={require(`../assets/products/images/${mediumTop ? 'mobile/' : 'desktop/'}${product.name}_2${product.image1_format}`).default}></img>
                    }
                    {!product.active &&
                    <img style={styles.image} src={require('../assets/products/images/' + (mediumTop ? 'mobile/' : 'desktop/') + 'coming_soon_2.png').default}></img>
                    }
                </Col>
            </Row>
            <Footer></Footer>
        </Container>
    );

};

export default ProductDetail;