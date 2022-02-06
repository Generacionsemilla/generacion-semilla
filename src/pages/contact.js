import React from 'react';
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import {Col, Container, Row} from "react-bootstrap";
import {STYLES_COMMON} from "../assets/styles_common";
import top from "../assets/contact/top.svg";
import middle from "../assets/contact/middle.svg";
import bottom from "../assets/contact/bottom.svg";
import {useMediaQuery} from "react-responsive";
import {useTranslation} from "react-i18next";

const submitForm = (e) => {
    e.preventDefault();

    const form = {
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById("from_email").value,
        message: document.getElementById("message").value,
    };

    axios.post(`https://generacion-semilla-backend.vercel.app/api/contact`, { form })
        .then(res => {
            console.log(res);
            console.log(res.data);
        });

};

const Contact = () => {
    const { t } = useTranslation();
    const inputFieldStyle = `
               input::placeholder, textarea::placeholder{
                       opacity: 1
               }`

    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });

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
        title_1:{
            fontFamily: 'tomarik-brush,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.verdeAzulado,
            fontSize: '60px'
        },
        title_2:{
            fontFamily: 'ff-providence-sans-web-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.azulita,
            letterSpacing: 4
        },
        input:{
            color: STYLES_COMMON.colors.tusaturado,
            width: '100%',
            opacity: '1',
            padding: '10px',
            fontSize: mediumTop ? '14px' : 'inherit'
        },
        text_area:{
            resize: 'none'
        },
        input_container_div:{
            padding: '20px 0',
            display: 'flex',
            alignItems: 'center'
        },
        image_container_div:{
            padding: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'baseline',
        },
        top_image: {
            maxWidth: mediumTop ? '100px' : '120px',
            minWidth: '70px'
        },
        middleBack:{
            backgroundImage: `url(${middle})`,
            backgroundSize: '50px',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '50%',
            backgroundPositionY: '110px'
        },
        textarea_container_div:{
            padding: '20px 0 0 0',
            display: 'flex'
        },
        bottom_image:{
            width: mediumTop ? '200px' : '260px',
            marginLeft: mediumTop ? '35%' : '20%'
        },
        button:{
            borderRadius: '6px',
            borderColor: STYLES_COMMON.colors.tusaturado,
            backgroundColor: STYLES_COMMON.colors.tusaturado,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            fontFamily: 'ff-providence-sans-web-pro,sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            lineHeight: mediumTop ? '2' : '2.5',
            letterSpacing: '6px',
            width: mediumTop ? '130px' : '200px',
            height: mediumTop ? '40px' : '50px',
            fontSize: mediumTop ? '14px' : '18px',
            textDecoration: 'none',
            color: STYLES_COMMON.colors.blancoHielo,
            marginTop: '50px'
        },
        bottomBack:{
            backgroundImage: `url(${bottom})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: mediumTop ? 'calc(50% + 80px)' : 'calc(50% + 160px)',
            minHeight: mediumTop ? '150px' : '200px'
        },
    }

    return (

        <Container fluid>
            <style>
                {inputFieldStyle}
            </style>
            <Header title={t('titles.contact')}></Header>
            <Row className={'text-center'}>
                <h3 style={styles.title_1}>CONTACTO</h3>
                <h4 style={styles.title_2} className={'mt-5'}>Formulario de Contacto</h4>
            </Row>

            <Row className={'text-center'}>
                <form id={"contactForm"} action="https://api.sendgrid.com/v3/mail/send" method="POST" onSubmit={submitForm} style={styles.middleBack}>
                    <Col xs={12} className={'mt-2 text-center'}>
                        <Row>
                            <Col xs={{span:3, offset: 1}} style={styles.image_container_div}>
                                <img src={top} style={styles.top_image}/>
                            </Col>
                            <Col xs={{span: 4}} style={styles.input_container_div}>
                                <input type="text" id="from_name" name="from_from" placeholder={'Nombre y apellido'} style={{...styles.input, ...styles.filson_pro_regular}}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className={''}>
                        <Row>
                            <Col xs={{span: 4, offset: 4}} style={styles.input_container_div}>
                                <input type="text" id="from_email" name="from_email" placeholder={'Email'} style={{...styles.input, ...styles.filson_pro_regular}}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className={''}>
                        <Row>
                            <Col xs={{span: 4, offset: 4}} style={styles.textarea_container_div}>
                                <textarea style={{...styles.input, ...styles.text_area, ...styles.filson_pro_regular}} rows={12} id="message" name="message" placeholder={'Mensaje'}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{span: 12}} className={'text-center'} style={styles.bottomBack}>
                        <button className={'btn btn-sm'} type={"submit"} style={styles.button}>Enviar</button>
                    </Col>
            </form>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default Contact;