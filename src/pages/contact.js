import React from 'react';
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import {Container} from "react-bootstrap";

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
    return (
        <Container fluid>
            <Header></Header>
            <h3>this is the Contact page</h3>
            <form id={"contactForm"} action="https://api.sendgrid.com/v3/mail/send" method="POST" onSubmit={submitForm}>
                from <input type="text" id="from_name" name="from_from"/>
                email <input type="text" id="from_email" name="from_email"/>
                message <input type="textarea" id="message" name="message"/>
                <button type={"submit"}>Submit</button>
            </form>
            <Footer></Footer>
        </Container>
    );
};

export default Contact;