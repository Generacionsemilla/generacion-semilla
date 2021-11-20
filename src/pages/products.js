import React from 'react';
import {PRODUCTS} from '../model/product'
import ProductItem from "../components/product_item";
import {Col, Row} from "react-bootstrap";

const Products = () => {

    const styles = {
        title:{
            fontFamily: 'sketchnote-square,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal'
        }
    }

    return (
        <div>
            <Row>
                <Col xs={12}>
                    <h3 style={styles.title}>NUESTROS PRODUCTOS</h3>
                </Col>
            </Row>
            <Row>
                {PRODUCTS.map( (p,i) => {
                    return <ProductItem product={p}/>
                })}
            </Row>
        </div>



    );
};

export default Products;