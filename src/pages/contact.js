import React from 'react';
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import {Col, Container, Row} from "react-bootstrap";
import {STYLES_COMMON} from "../assets/styles_common";

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

    const styles = {
        input:{
            color: STYLES_COMMON.colors.tusaturado,
            width: '100%',
            opacity: '1'
        },
        text_area:{
            resize: 'none'
        }
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
                <form id={"contactForm"} action="https://api.sendgrid.com/v3/mail/send" method="POST" onSubmit={submitForm}>
                    <Col xs={{span: 4, offset:4}} className={'mt-5'}>
                        <input type="text" id="from_name" name="from_from" placeholder={'Nombre y apellido'} style={styles.input}/>
                    </Col>
                    <Col xs={{span: 4, offset:4}} className={'mt-5'}>
                        <input type="text" id="from_email" name="from_email" placeholder={'Email'} style={styles.input}/>
                    </Col>
                    <Col xs={{span: 4, offset:4}} className={'mt-5'}>
                        <textarea style={{...styles.input, ...styles.text_area}} rows={6} id="message" name="message" placeholder={'Mensaje'}/>
                    </Col>
                <button className={'btn btn-sm'} type={"submit"}>Enviar</button>
            </form>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default Contact;