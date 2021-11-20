import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, Col, Row} from "react-bootstrap";
import logo from '../assets/home/desktop/logo.png'
import {STYLES_COMMON} from "../assets/styles_common";
import central_paintings from "../assets/home/desktop/central_paintings.png";
import drawings_right from "../assets/home/desktop/drawings_right.svg";
import drawings_left from "../assets/home/desktop/drawings_left.svg";
import {useMediaQuery} from "react-responsive";

const Home = () => {
    const { t } = useTranslation();

    const medium = useMediaQuery({ query: '(max-width: 992px)' });

    const styles = {
        mainRow:{
            minHeight: '500px',
            fontSize: medium ? '12px' : '16px',
            letterSpacing: '3px'
        },
        logo:{
            width: '100%'
        },
        button:{
            width: medium ? '110px' :'138px',
            height: medium ? '28px' :'38px',
            borderRadius: '6px',
            borderColor: STYLES_COMMON.colors.tusaturado,
            backgroundColor: STYLES_COMMON.colors.tusaturado,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            fontFamily: 'ff-providence-sans-web-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            lineHeight: '2',
            letterSpacing: '3px',
            fontSize: medium ? '12px' : '16px'
        },
        logoPhrase: {
            fontFamily: 'ff-providence-sans-web-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal'
        },
        logoContainer:{
            backgroundImage: `url(${central_paintings})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            padding: '40px'
        },
        drawings_right:{
            maxWidth: '30%',
            position: 'absolute',
            right: '0',
            top: '50%'
        },
        drawings_left:{
            maxWidth: '30%',
            position: 'absolute',
            left: '-10%',
            top: '50%'
        }

    }
    return (
            <Row style={styles.mainRow} className={'text-center'}>
                <Col xs={{span:10, offset: 1}} xl={{span:8, offset: 2}}>
                    <div style={styles.logoContainer}>
                        <Row >
                            <Col xs={{span:12, offset: 0}} sm={{span:10, offset: 1}} lg={{span:8, offset: 2}}>
                                <img style={styles.logo} src={logo}/>
                            </Col>
                            <Col xs={{span:12}} className={'text-center mt-3'}>
                                <p style={styles.logoPhrase}><span>Editorial </span><span style={{color: STYLES_COMMON.colors.durazno}}>lúdica </span><span>y </span><span style={{color: STYLES_COMMON.colors.tusaturado}}>experimental</span></p>
                            </Col>
                            <Col xs={{span:12}} className={'text-center mt-md-5 mt-sm-2'}>
                                <Button className={'btn btn-sm'} style={styles.button}> Conocenos</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={12} className="d-none d-md-block">
                    <img style={styles.drawings_left} src={drawings_left}></img>
                    <img style={styles.drawings_right} src={drawings_right}></img>
                </Col>
            </Row>
        );
};

export default Home;