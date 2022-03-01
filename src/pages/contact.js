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
import sentSuccessfully from "../assets/contact/sent-s-back.svg"
import arrow from "../assets/contact/arrow.svg"
import close from "../assets/contact/close.svg"
import happy from "../assets/contact/happy.svg"
import ok from "../assets/contact/ok.svg"
import smile from "../assets/contact/smile.svg"
import sad from "../assets/contact/sad.svg"
import notSent from "../assets/contact/not-sent-back.svg"

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
            let sentOk = document.getElementById('sent-ok');
            sentOk.classList.remove("d-none");
            let formRow = document.getElementById('form-row');
            formRow.classList.add("d-none");
        })
        .catch(function (error){
            console.log(error);
            let notSent = document.getElementById('not-sent');
            notSent.classList.remove("d-none");
            let formRow = document.getElementById('form-row');
            formRow.classList.add("d-none");
        });

};

const hideResult = () => {
    let notSent = document.getElementById('not-sent');
    notSent.classList.add("d-none");
    let formRow = document.getElementById('form-row');
    formRow.classList.remove("d-none");
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
        mainRow:{
            minHeight: '950px',
            height: 'calc(-480px + 100vh)'
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
            backgroundPositionY: '65px'
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
        resultRowsMains:{
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            marginTop: '-130px',
            marginBottom: '-250px',
            minHeight: '1330px',
            height: 'calc(-480px + 100vh) !important'
        },
        sentSuccessfullyMain: {
            backgroundImage: `url(${sentSuccessfully})`,
        },
        notSentMain:{
            backgroundImage: `url(${notSent})`,
        },
        resultRow1:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '250px',
            height: '550px'
        },
        resultRow2:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxHeight: '250px'
        },
        smallIcon:{
            maxWidth: '50px'
        },
        bigIcon:{
            maxWidth: '90px'
        }
    }

    return (

        <Container fluid style={STYLES_COMMON.pageContainer}>
            <style>
                {inputFieldStyle}
            </style>
            <Header title={t('titles.contact')}></Header>
            <Row className={'d-none'} style={{...styles.sentSuccessfullyMain, ...styles.resultRowsMains}} id={'sent-ok'}>
                <Col xs={12}>
                    <Row style={styles.resultRow1}>
                        <Col xs={3}>
                            <img src={smile} style={styles.smallIcon}/>
                        </Col>
                        <Col xs={3} className={'mt-5'}>
                            <img src={ok} style={styles.bigIcon}/>
                        </Col>
                        <Col xs={3} style={{marginTop: '150px'}}>
                            <h3 style={{color: STYLES_COMMON.colors.blancoHielo}}>Mensaje enviado con éxito</h3>
                        </Col>
                    </Row>
                    <Row style={styles.resultRow2}>
                        <Col xs={4} >
                            <img src={happy} style={styles.smallIcon}/>
                        </Col>
                        <Col xs={5} className={'mt-2'}>
                            <h3>Mientras esperas, recordá que nos podes seguir y contactar también por estos medios</h3>
                        </Col>
                        <Col xs={4} className={'mt-2'}>
                            <img src={arrow} style={styles.smallIcon}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={'d-none'} style={{...styles.notSentMain, ...styles.resultRowsMains}} id={'not-sent'}>
                <Col xs={12}>
                    <Row style={styles.resultRow1}>
                        <Col xs={3}>
                            <a id={'result-close'} style={{cursor: 'pointer'}} onClick={hideResult}>
                                <img src={close} style={styles.smallIcon}/>
                            </a>
                        </Col>
                        <Col xs={3} className={'mt-5'}>
                            <img src={sad} style={styles.bigIcon}/>
                        </Col>
                        <Col xs={3} style={{marginTop: '150px'}}>
                            <h3 style={{color: STYLES_COMMON.colors.blancoHielo}}>Error, inténtalo nuevamente</h3>
                        </Col>
                    </Row>
                    <Row style={styles.resultRow2}>
                        <Col xs={4} className={'mt-3'}>
                            <img src={smile} style={styles.smallIcon}/>
                        </Col>
                        <Col xs={5} className={'mt-2'}>
                            <h3>No te preocupes, recordá que nos podes seguir y contactar también por estos medios</h3>
                        </Col>
                        <Col xs={4} className={'mt-2'}>
                            <img src={arrow} style={styles.smallIcon}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={styles.mainRow} id={'form-row'}>
                <Col xs={12}>
                    <Row className={'text-center'}>
                        <h3 style={styles.title_1}>CONTACTO</h3>
                        <h4 style={styles.title_2} className={'mt-5'}>Formulario de Contacto</h4>
                    </Row>
                    <Row className={'text-center'}>
                        <form id={"contactForm"} onSubmit={submitForm} style={styles.middleBack}>
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
                </Col>
            </Row>

            <Footer showSocials={true}></Footer>
        </Container>
    );
};

export default Contact;