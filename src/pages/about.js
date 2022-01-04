import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {Col, Container, Row} from "react-bootstrap";

const About = () => {
    return (
        <Container fluid>
            <Header></Header>
            <Row className={'text-center'}>
                <h3>Quiennn</h3>
            </Row>
            <Row>
                <Col xs={6}>Quienes somos?</Col>
                <Col xs={6}>Foto Eli</Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:10, offset:1}}>Nos inspira...</Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:10, offset:1}}>El loren itsunnn etc</Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:12}}>foto</Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:12}}>unete a nuestra comunidad</Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:10, offset:1}}>mas texto</Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:10, offset:1}}>einstein</Col>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default About;