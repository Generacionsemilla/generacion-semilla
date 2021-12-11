import React from 'react';
import {PRODUCTS} from '../model/product'
import ProductItem from "../components/product_item";
import {Col, Container, Row} from "react-bootstrap";
import {STYLES_COMMON} from "../assets/styles_common";
import Header from "../components/header";
import Footer from "../components/footer";

const Products = () => {

    const styles = {
        title:{
            fontFamily: 'sketchnote-square,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.azulita
        },
        productsRow:{
            margin: '20px 0 100px',
        }
    }

    return (
        <Container fluid>
            <Header></Header>
            <Row>
                <Col xs={12} className={'text-center'}>
                    <h3 style={styles.title}>NUESTROS PRODUCTOS</h3>
                </Col>
            </Row>
            <Row style={styles.productsRow} className={'text-center'}>
                {PRODUCTS.map( (p,i) => {
                    return <ProductItem product={p}/>
                })}
            </Row>
            <Footer></Footer>
        </Container>

    );
};

export default Products;