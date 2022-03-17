import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {Col, Container, Row} from "react-bootstrap";
import top_left_d from '../assets/about/desktop/top_left.svg';
import top_left_m from '../assets/about/mobile/top_left.svg';
import top_right from '../assets/about/desktop/top_right.svg';
import top_bottom from '../assets/about/desktop/top_bottom.svg';
import mid_top_lg from '../assets/about/desktop/mid_top_lg.png';
import mid_top_xl from '../assets/about/desktop/mid_top_xl.png';
import mid_top_m from '../assets/about/mobile/mid_top_m_md.png';
import mid_bottom from '../assets/about/desktop/mid_bottom.svg';
import bottom from '../assets/about/desktop/bottom.svg';
import bottom_m from '../assets/about/mobile/bottom_m.svg';
import {STYLES_COMMON} from "../assets/styles_common";
import youtube from "../assets/footer/youtube.png";
import instagram from "../assets/footer/instagram.png";
import facebook from "../assets/footer/facebook.png";
import linkedin from "../assets/footer/linkedin.png";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "react-responsive";
import logo from "../assets/home/mobile/logo.png";

const About = () => {

    const { t } = useTranslation();
    const smallTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.sm+')' });
    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });
    const lgTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.lg+')' });
    const xxlTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.xxl+')' });

    const styles = {
        filson_pro_regular:{
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal'
        },
        filson_pro_bold:{
            fontFamily: 'filson-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal'
        },
        title:{
            fontFamily: 'tomarik-brush,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.azulita,
            fontSize: '60px'
        },
        top_right:{
            marginTop: mediumTop ? '' : xxlTop ? '50px' : '130px',
            width: mediumTop ? '120%' : '110%',
            marginLeft: mediumTop ? '-100px' : '-50px'
        },
        top_left:{
            marginTop: lgTop ? '-20px' : '-70px',
            width: '100%'
        },
        top_left_text_1:{
            position: 'absolute',
            top:  lgTop ? '37%' : '35%',
            left: mediumTop ? '5%' : '8%',
            width: mediumTop ? '26%' : '20%',
            fontSize: mediumTop ? '11px' : '14px'
        },
        top_left_text_2:{
            position: 'absolute',
            top: mediumTop ? '74%' : lgTop ? '64%' : '62%',
            left: mediumTop ? '6%' : '8%',
            width: mediumTop ? '21%' : '20%',
            color: STYLES_COMMON.colors.blancoHielo,
            fontSize: mediumTop ? '12px' : lgTop && '14px'
        },
        top_left_text_m:{
            position: 'absolute',
            top: '18%',
            left: '5%',
            width: '35%',
            color: STYLES_COMMON.colors.durazno,
            fontSize: '12px'
        },
        top_left_logo:{
            position: 'absolute',
            top: '4%',
            left: '5%',
            width: '35%'
        },
        bottom:{
            marginBottom: '-200px',
            width: '110%',
            marginLeft: '-75px'
        },
        bottom_m:{
            marginBottom: '20px',
            width:'100px'
        },
        icon:{
            maxWidth: mediumTop ? '40px' : lgTop ? '60px' : '80px',
            width: '100%'
        },
        middle_top_text_1:{
            fontSize: mediumTop && '14px',
            marginTop: '20px'
        },
        middle_top_text_2:{
            fontSize: mediumTop && '12px'
        },
        middle_bottom_socials_row:{
            position: 'absolute',
            top: smallTop ? '50%' : mediumTop ? '55%' : lgTop ? '35%' : '45%'
        },
        middle_bottom_text_row:{
            position: 'absolute',
            top: smallTop ? '25%' : mediumTop ? '35%' : lgTop ? '55%' : '62%',
            color: STYLES_COMMON.colors.blancoHielo,
            fontSize: smallTop ? '12px' : mediumTop ? '14px' : 'inherit'
        },
        bottom_text:{
            fontSize: mediumTop ? '14px' : 'inherit'
        },
        middle_bottom_image:{
            width: '120%',
            marginTop: '-110px',
            marginLeft: '-100px'
        }
    }

    return (
        <Container fluid style={STYLES_COMMON.pageContainer}>
            <Header title={t('titles.about')}></Header>
            {!mediumTop &&
            <Row className={'text-center'}>
                <h3 style={styles.title}>{t('titles.about')}</h3>
            </Row>
            }

            <Row style={{position: 'relative'}}>
                {mediumTop && <img src={logo} style={styles.top_left_logo}/>}
                {mediumTop && <p style={{...styles.filson_pro_regular, ...styles.top_left_text_m}}>Editorial lúdica y experimental</p>}
                <p style={{...styles.filson_pro_regular, ...styles.top_left_text_1}}>{t('about.top.left_1')}</p>
                <p style={{...styles.filson_pro_regular, ...styles.top_left_text_2}}>{t('about.top.left_2')}</p>
                <Col xs={6}><img src={mediumTop ? top_left_m : top_left_d} style={styles.top_left}/></Col>
                <Col xs={6}><img src={top_right} style={styles.top_right}/></Col>
                {!mediumTop &&
                <Col xs={12}><img src={top_bottom} style={{marginTop: '-60px'}}/></Col>
                }
            </Row>

            <Row className={'text-center'}>
                <Col xs={{span:10, offset:1}} style={styles.middle_top_text_1}>
                    <h4 style={styles.filson_pro_bold}>Nos inspira <span style={{color: STYLES_COMMON.colors.durazno}}>jugar</span> y <span style={{color: STYLES_COMMON.colors.tusaturado}}>experimentar</span></h4>
                </Col>
            </Row>
            <Row className={'text-center'} style={styles.middle_top_text_2}>
                <Col xs={{span:8, offset:2}} className={'mt-5'}><p style={styles.filson_pro_regular}>{t('about.middle')}</p></Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:12}}>
                    {mediumTop ? <img src={mid_top_m} style={{width: '100%'}}/> :
                        xxlTop ? <img src={mid_top_lg} style={{width: '100%'}}/> : <img src={mid_top_xl} style={{width: '100%'}}/>}
                    </Col>
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
                <Row style={{...styles.filson_pro_regular, ...styles.middle_bottom_text_row}}>
                    <Col xs={{span:10, offset:1}} lg={{span:8, offset:2}}>{t('about.bottom.text_top')}</Col>
                </Row>
                <Col xs={{span:12}}><img style={styles.middle_bottom_image} src={mid_bottom}/></Col>
            </Row>
            <Row className={'text-center'}>
                <Col xs={{span:8, offset:2}}><p style={{...styles.filson_pro_regular, ...styles.bottom_text}}>{t('about.bottom.text_bottom')}</p></Col>
            </Row>
            <Row className={'text-center'}>

                <Col xs={{span:12}}>{mediumTop ? <img style={styles.bottom_m} src={bottom_m}/> : <img style={styles.bottom} src={bottom}/>}</Col>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default About;