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
import youtube from "../assets/footer/youtube.png";
import instagram from "../assets/footer/instagram.png";
import facebook from "../assets/footer/facebook.png";
import linkedin from "../assets/footer/linkedin.png";
import {useTranslation} from "react-i18next";

const About = () => {

    const { t } = useTranslation();

    const styles = {
        title:{
            fontFamily: 'tomarik-brush,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.azulita,
            fontSize: '60px'
        },
        top_right:{
            marginTop: '100px',
            marginRight: '-60px'
        },
        top_left_text_1:{
            position: 'absolute',
            top: '37%',
            left: '10%',
            width: '20%',
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal'
        },
        top_left_text_2:{
            position: 'absolute',
            top: '68%',
            left: '11%',
            width: '20%',
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.blancoHielo
        },
        middle_title:{
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal'
        },
        middle_top_text:{
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal'
        },
        bottom:{
            marginBottom: '-200px',
            width: '110%',
            marginLeft: '-75px'
        },
        icon:{
            maxWidth: '80px',
            width: '100%'
        },
        middle_bottom_socials_row:{
            position: 'absolute',
            top: '45%'
        },
        middle_bottom_text_row:{
            position: 'absolute',
            top: '62%',
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.blancoHielo
        },
        middle_bottom_image:{
            width: '120%',
            marginTop: '-110px',
            marginLeft: '-100px'
        },
        bottom_text:{
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal'
        }
    }

    return (
        <Container fluid>
            <Header></Header>
            <Row className={'text-center'}>
                <h3 style={styles.title}>¿QUIENES SOMOS?</h3>
            </Row>
            <Row style={{position: 'relative'}}>
                <p style={styles.top_left_text_1}>{t('about.top.left_1')}</p>
                <p style={styles.top_left_text_2}>{t('about.top.left_2')}</p>
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
                <Col xs={{span:8, offset:2}} className={'mt-5'}><p style={styles.middle_top_text}>{t('about.middle')}</p></Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:12}}><img src={mid_top}/></Col>
            </Row>
            <Row className={'text-center'} style={{position: 'relative'}}>
                <Row className={'text-center'} style={styles.middle_bottom_socials_row}>
                    <Col xs={{span:10, offset:1}}>
                        <Row>
                            <Col><a href='https://www.youtube.com/channel/UCeqlCxCxGo1cm1iBZtamgWA' target="_blank" rel="noreferrer" ><img style={styles.icon} src={youtube} /></a></Col>
                            <Col><a href='https://www.instagram.com/generacionsemilla/' target="_blank" rel="noreferrer"><img style={styles.icon} src={instagram} /></a></Col>
                            <Col><a href='https://www.facebook.com/generacionsemillaeditorial' target="_blank" rel="noreferrer"><img style={styles.icon} src={facebook} /></a></Col>
                            <Col><a href='https://www.linkedin.com/company/generaci%C3%B3n-semilla' target="_blank" rel="noreferrer"><img style={styles.icon} src={linkedin} /></a></Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={styles.middle_bottom_text_row}>
                    <Col xs={{span:8, offset:2}}>{t('about.bottom.text_top')}</Col>
                </Row>
                <Col xs={{span:12}}><img style={styles.middle_bottom_image} src={mid_bottom}/></Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:8, offset:2}}><p style={styles.bottom_text}>{t('about.bottom.text_bottom')}</p></Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:12}}><img style={styles.bottom} src={bottom}/></Col>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default About;