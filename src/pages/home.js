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
            minHeight: xlargeMin? '600px' : '500px',
            fontSize: largeTop ? '12px' : '16px',
            letterSpacing: '3px',
            marginTop: '50px'
        },
        logo:{
            width: '100%'
        },
        buttonCol:{
            marginTop: mediumTop ? '50%' : '-5%'
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
            fontSize: largeTop ? '14px' : '16px'
        },
        logoPhrase: {
            fontFamily: 'ff-providence-sans-web-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            marginTop: xlargeMin ? '-10%' : '-12%'
        },
        drawings_right:{
            maxWidth: xlargeMin ? '450px' : largeTop ? '280px' : '350px',
            position: 'absolute',
            right: '30px',
            top: xlargeMin? '35%' : '40%'
        },
        drawings_left:{
            maxWidth:  xlargeMin ? '400px' : largeTop ? '280px' : '320px',
            position: 'absolute',
            left: '30px',
            top: largeTop ? '50%' : '55%'
        }

    }
    return (
        <Container fluid>
            <Header></Header>
            <Row style={styles.mainRow} className={'text-center'}>
                <Col xs={{span:10, offset: 1}} >
                    <div >
                        <Row >
                            <Col xs={{span:10, offset: 1}} xl={{span:8, offset: 2}} >
                                <img style={styles.logo} src={central_full} className={'d-none d-md-block'}/>
                                <img style={styles.logo} src={logo} className={'d-xs-block d-md-none' }/>
                            </Col>
                            <Col xs={{span:12}} className={'text-center'} style={styles.logoPhrase} className={'d-none d-md-block'}>
                                <p ><span>Editorial </span><span style={{color: STYLES_COMMON.colors.durazno}}>lúdica </span><span>y </span><span style={{color: STYLES_COMMON.colors.tusaturado}}>experimental</span></p>
                            </Col>
                            <Col xs={{span:12}} className={'text-center'} style={styles.buttonCol} >
                                <Button className={'btn btn-sm'} style={styles.button}>Conocenos</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={12} className={'d-none d-md-block'}>
                    <img style={styles.drawings_left} src={drawings_left}></img>
                    <img style={styles.drawings_right} src={drawings_right}></img>
                </Col>
            </Row>
            <Footer></Footer>
        </Container>
        );
};

export default Home;