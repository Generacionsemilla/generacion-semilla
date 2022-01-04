import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, Col, Container, Row} from "react-bootstrap";
import logo from '../assets/home/mobile/logo.png'
import {STYLES_COMMON} from "../assets/styles_common";
import central_full from "../assets/home/desktop/central_full.png";
import drawings_right from "../assets/home/desktop/drawings_right.png";
import drawings_left from "../assets/home/desktop/drawings_left.png";
import {useMediaQuery} from "react-responsive";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
    const { t } = useTranslation();

    const largeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.lg+')' });
    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });
    const xlargeMin = useMediaQuery({ query: '(min-width: '+STYLES_COMMON.breakpoints.xl+')' });
    const xxlargeMin = useMediaQuery({ query: '(min-width: '+STYLES_COMMON.breakpoints.xxl+')' });

    const styles = {
        mainRow:{
            minHeight: '500px',
            fontSize: largeTop ? '12px' : '16px',
            letterSpacing: '3px',
            marginTop: '50px'
        },
        logo:{
            width: '100%'
        },
        button:{
            width: largeTop ? '115px' :'138px',
            height: largeTop ? '32px' :'38px',
            borderRadius: '6px',
            borderColor: STYLES_COMMON.colors.tusaturado,
            backgroundColor: STYLES_COMMON.colors.tusaturado,
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
            marginTop: largeTop ? '-70px' : '-100px'
        },
        drawings_right:{
            maxWidth: xlargeMin ? '450px' : largeTop ? '280px' : '350px',
            position: 'relative',
            right: largeTop ? '110px' : '175px',
            top: largeTop ? '130px' : '200px'
        },
        drawings_left:{
            maxWidth:  xlargeMin ? '400px' : largeTop ? '280px' : '320px',
            position: 'relative',
            left: '0px',
            top: largeTop ? '250px' : '350px'
        }

    }
    return (
        <Container fluid>
            <Header isHome={true}></Header>
            <Row style={styles.mainRow} className={'text-center'}>
                <Col xs={2} className={'d-none d-md-block'}>
                    <img style={styles.drawings_left} src={drawings_left}></img>
                </Col>
                <Col xs={8} className={'d-none d-md-block'}>
                    <img style={styles.logo} src={central_full} />
                    <p style={styles.logoPhrase} className={'text-center'}><span>Editorial </span><span style={{color: STYLES_COMMON.colors.durazno}}>lúdica </span><span>y </span><span style={{color: STYLES_COMMON.colors.tusaturado}}>experimental</span></p>
                    <Button className={'btn btn-sm'} style={styles.button}>Conocenos</Button>
                </Col>
                <Col xs={{span:10, offset: 1}} className={'d-xs-block d-md-none'}>
                    <img style={styles.logo} src={logo} />
                    <Button className={'btn btn-sm'} style={styles.button}>Conocenos</Button>
                </Col>
                <Col xs={2} className={'d-none d-md-block'}>
                    <img style={styles.drawings_right} src={drawings_right}></img>
                </Col>
            </Row>
            <Footer socials={true}></Footer>
        </Container>
        );
};

export default Home;