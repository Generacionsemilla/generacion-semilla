import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, Col, Row} from "react-bootstrap";
import logo from '../assets/home/desktop/logo_reducido.png'
import {STYLES_COMMON} from "../assets/styles_common";

const styles = {
    mainRow:{
        minHeight: '500px',
        fontFamily: 'Better Together Spaced',
        fontSize: '30px'
    },
    logo:{
        width: '100%'
    },
    button:{
        width: '138px',
        height: '38px',
        borderRadius: '6px',
        borderColor: STYLES_COMMON.colors.tusaturado,
        backgroundColor: STYLES_COMMON.colors.tusaturado,
        boxShadow: '0px 3px #ccc',
        fontSize: '30px'
    }

}

const Home = () => {
    const { t } = useTranslation();
    return (
            <Row style={styles.mainRow} className={'text-center'}>
                <Col xs={{span:4, offset: 4}}>
                    <img style={styles.logo} src={logo}/>
                    <p className={'mt-5'}><span>Editorial </span><span style={{color: STYLES_COMMON.colors.durazno}}>lúdica </span><span>y </span><span style={{color: STYLES_COMMON.colors.tusaturado}}>experimental</span></p>
                    <Button className={'btn btn-sm mt-5'} style={styles.button}> Conocenos</Button>
                </Col>
            </Row>
        );
};

export default Home;