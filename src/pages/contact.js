import React from 'react';
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import {Col, Container, Row} from "react-bootstrap";
import {STYLES_COMMON} from "../assets/styles_common";
import top from "../assets/contact/top.svg";
import middle from "../assets/contact/middle.svg";
import bottom from "../assets/contact/bottom.svg";
import background_m from "../assets/footer/mobile/background_m.svg";
import background from "../assets/footer/desktop/background.svg";
import {useMediaQuery} from "react-responsive";

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
    const inputFieldStyle = `
               input::placeholder, textarea::placeholder{
                       opacity: 1
               }`

    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });
    const largeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.lg+')' });

    const styles = {
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
            maxWidth: '120px',
            minWidth: '100px'
        },
        middleBack:{
            backgroundImage: `url(${middle})`,
            backgroundSize: '50px',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '50%',
            backgroundPositionY: '20%'
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
            backgroundPositionX: mediumTop ? '85%' : '70%',
            minHeight: largeTop ? '150px' : '200px'
        },
    }

    return (

        <Container fluid>
            <style>
                {inputFieldStyle}
            </style>
            <Header></Header>
            <Row className={'text-center'}>
                <h3>CONTACTO</h3>
                <h4>Formulario de Contacto</h4>
            </Row>
            <Row className={'text-center'}>
                <form id={"contactForm"} action="https://api.sendgrid.com/v3/mail/send" method="POST" onSubmit={submitForm} style={styles.middleBack}>
                    <Col xs={{span: 5, offset:3}} className={'mt-5'}>
                        <Row>
                            <Col xs={3} style={styles.image_container_div}>
                                <img src={top} style={styles.top_image}/>
                            </Col>
                            <Col xs={9} style={styles.input_container_div}>
                                <input type="text" id="from_name" name="from_from" placeholder={'Nombre y apellido'} style={styles.input}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{span: 5, offset:3}} className={''}>
                        <Row>
                            <Col xs={3}>
                            </Col>
                            <Col xs={9} style={styles.input_container_div}>
                                <input type="text" id="from_email" name="from_email" placeholder={'Email'} style={styles.input}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{span: 5, offset:3}} className={''}>
                        <Row>
                            <Col xs={3}>
                            </Col>
                            <Col xs={9} style={styles.textarea_container_div}>
                                <textarea style={{...styles.input, ...styles.text_area}} rows={12} id="message" name="message" placeholder={'Mensaje'}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{span: 12}} className={''} style={styles.bottomBack}>
                        <button className={'btn btn-sm'} type={"submit"} style={styles.button}>Enviar</button>
                    </Col>
            </form>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default Contact;