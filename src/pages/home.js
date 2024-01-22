import React from 'react';
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import logo from '../assets/home/mobile/logo.png'
import {STYLES_COMMON} from "../assets/styles_common";
import central_full from "../assets/home/desktop/central_full.png";
import drawings_right from "../assets/home/desktop/drawings_right.png";
import drawings_left from "../assets/home/desktop/drawings_left.png";
import {useMediaQuery} from "react-responsive";
import Header from "../components/header";
import Footer from "../components/footer";
import {Link} from "react-router-dom";

const Home = () => {
    const { t } = useTranslation();

    const largeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.lg+')' });
    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });
    const xlargeMin = useMediaQuery({ query: '(min-width: '+STYLES_COMMON.breakpoints.xl+')' });
    const xxlargeMin = useMediaQuery({ query: '(min-width: '+STYLES_COMMON.breakpoints.xxl+')' });
    const xxlargeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.xxl+')' });

    const styles = {
        mainRow:{
            fontSize: largeTop ? '12px' : '16px',
            letterSpacing: '3px',
            marginTop: '50px',
            height: 'calc(-530px + 100vh)',
            minHeight: xxlargeMin ? '975px' : xlargeMin ? '650px' : largeTop ? '390px' : mediumTop ? '300px' : '575px'
        },
        logo:{
            width: '100%'
        },
        button:{
            width: largeTop ? '250px' : '320px',
            height: largeTop ? '60px' : '38px',
            borderRadius: '6px',
            borderColor: STYLES_COMMON.colors.tusaturado,
            backgroundColor: STYLES_COMMON.colors.tusaturado,
            color: STYLES_COMMON.colors.blancoHielo,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            fontFamily: 'ff-providence-sans-web-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            lineHeight: '2',
            letterSpacing: '3px',
            fontSize: largeTop ? '14px' : '16px',
            marginTop: mediumTop ? '70px' : ''
        },
        logoPhrase: {
            fontFamily: 'ff-providence-sans-web-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            marginTop:  largeTop ? '-80px' : xxlargeTop ? '-100px' : '-140px'
        },
        drawings_right:{
            maxWidth: xxlargeMin ? '420px' : largeTop ? '240px' : '320px',
            position: 'relative',
            right: largeTop ? '110px' : '145px',
            top: xxlargeTop ? '240px' : '350px'
        },
        drawings_left:{
            maxWidth:  xxlargeMin ? '420px' : largeTop ? '240px' : '320px',
            position: 'relative',
            left: '-20px',
            top: largeTop ? '300px' : xxlargeTop ? '320px' : '440px'
        }

    }
    return (
        <Container fluid style={STYLES_COMMON.pageContainer}>
            <Header isHome={true}></Header>
            <Row style={styles.mainRow} className={'text-center'}>
                {!mediumTop &&
                    <Col xs={2}>
                        <img style={styles.drawings_left} src={drawings_left}></img>
                    </Col>
                }
                {!mediumTop &&
                    <Col xs={8} >
                        <img style={styles.logo} src={central_full}/>
                        <p style={styles.logoPhrase} className={'text-center'}><span>Editorial </span><span
                            style={{color: STYLES_COMMON.colors.durazno}}>lúdica </span><span>y </span><span
                            style={{color: STYLES_COMMON.colors.tusaturado}}>experimental</span></p>
                        <Link to="/products" className={'btn btn-sm'} style={styles.button}>Accedé a nuestro catalgo</Link>
                    </Col>
                }
                {mediumTop &&
                    <Col xs={{span: 10, offset: 1}} >
                        <img style={styles.logo} src={logo}/>
                        <Link to="/products" className={'btn btn-sm'} style={styles.button}>Accedé a nuestro catalgo</Link>
                    </Col>
                }
                {!mediumTop &&
                    <Col xs={2} >
                        <img style={styles.drawings_right} src={drawings_right}></img>
                    </Col>
                }
            </Row>
            <Footer showSocials={true}></Footer>
        </Container>
        );
};

export default Home;