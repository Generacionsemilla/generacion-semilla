import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {Col, Container, Row} from "react-bootstrap";
import top_left from '../assets/about/top_left.svg';
import top_right from '../assets/about/top_right.svg';
import top_bottom from '../assets/about/top_bottom.svg';
import mid_top from '../assets/about/mid_top.svg';
import mid_bottom from '../assets/about/mid_bottom.svg';
import bottom from '../assets/about/bottom.svg';
import {STYLES_COMMON} from "../assets/styles_common";

const About = () => {

    const styles = {
        title:{
            fontFamily: 'tomarik-brush,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal'
        },
        top_right:{
            marginTop: '100px',
            marginRight: '-60px'
        },
        top_left_text_1:{
            position: 'absolute',
            top: '37%',
            left: '10%',
            width: '20%'
        },
        top_left_text_2:{
            position: 'absolute',
            top: '68%',
            left: '11%',
            width: '20%'
        },
        middle_title:{
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal'
        },
        bottom:{
            marginBottom: '-200px',
            width: '110%',
            marginLeft: '-75px'
        }
    }

    return (
        <Container fluid>
            <Header></Header>
            <Row className={'text-center'}>
                <h3 style={styles.title}>¿QUIENES SOMOS?</h3>
            </Row>
            <Row style={{position: 'relative'}}>
                <p style={styles.top_left_text_1}>holaaaaaaa asd sad as aaaaaaaaad wa a aaaaaaaaaaas ssssss dxxxxxxxxxc xc xxxxxx</p>
                <p style={styles.top_left_text_2}>aaaaaaa as asaaaaaaf fffffff</p>
                <Col xs={5}><img src={top_left} style={{width: '130%'}}/></Col>
                <Col xs={7}><img src={top_right} style={styles.top_right}/></Col>
                <Col xs={12}><img src={top_bottom} style={{marginTop: '-60px'}}/></Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:10, offset:1}}>
                    <h4 style={styles.middle_title}>Nos inspira <span style={{color: STYLES_COMMON.colors.durazno}}>jugar</span> y <span style={{color: STYLES_COMMON.colors.tusaturado}}>experimentar</span></h4>
                </Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:10, offset:1}}><p>asa das dasd awd awd awd w</p></Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:12}}><img src={mid_top}/></Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:12}}><img style={{marginTop: '-100px'}} src={mid_bottom}/></Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:10, offset:1}}><p>aaaaaaaaa</p></Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:12}}><img style={styles.bottom} src={bottom}/></Col>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default About;