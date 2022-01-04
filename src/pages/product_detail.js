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

    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });

    const styles = {
        title: {
            fontFamily: 'sketchnote-square,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.azulita
        },
        productsRow: {
            margin: '20px 0 100px',
        },
        icons: {
            maxWidth: '100%',
            maxHeight: '300px'
        },
        image:{
            width:'100%'
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
            color: STYLES_COMMON.colors.blancoHielo,
            marginTop: '50px'
        },
        secondImageCol:{
            zIndex: '-1',
            marginBottom: '-17%'
        }
    }

    return (
        <Container fluid>
            <Header></Header>
            <Row>
                <Col md={{span: 2, offset: 5}} xs={{span: 4, offset: 4}} >
                    <h3 style={styles.title} className={'text-center d-none d-md-block mb-5'}>{product.title.toUpperCase()}</h3>
                    <img style={styles.icons}
                         src={require('../assets/products/icons/' + product.name + '.png').default}></img>
                </Col>
            </Row>
            <Row className={'text-center mt-5'}>
                <Col xs={{span: 10, offset: 1}}>
                    <p>{product.upper_text}</p>
                </Col>
            </Row>
            <Row className={'mt-5'}>
                <Col xs={12} className={'p-0'}>
                    <img style={styles.image} src={require('../assets/products/images/' + product.name + '_1.jpg').default}></img>
                </Col>
            </Row>
            <Row className={'text-center mt-5'}>
                <Col xs={{span: 10, offset: 1}}>
                    <p>{product.lower_text}</p>
                    <a href={product.link} target="_blank" rel="noreferrer" style={styles.button} className={'btn btn-sm'}>Comprar</a>
                </Col>
            </Row>
            <Row className={'mt-5 px-0'}>
                <Col xs={12} className={'p-0'} style={styles.secondImageCol}>
                    <img style={styles.image} src={require('../assets/products/images/' + product.name + '_2.jpg').default}></img>
                </Col>
            </Row>
            <Footer></Footer>
        </Container>
    );

};

export default ProductDetail;