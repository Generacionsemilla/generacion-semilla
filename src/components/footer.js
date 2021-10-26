import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
      <Container fluid>
        <Row className={'text-center'}>
          <Col>
            <i>Whatsapp</i>
          </Col>
        </Row>
        <Row className={'text-center'}>
          <Col>
            Generacion semilla logo
          </Col>
        </Row>
        <Row className={'text-center'}>
          <Col><Link><i>youtube</i></Link></Col>
          <Col><Link><i>instagram</i></Link></Col>
          <Col><Link><i>facebook</i></Link></Col>
          <Col><Link><i>lkdin</i></Link></Col>
        </Row>
        <Row className={'text-center'}>
          <Col>Envios a todo el pais</Col>
          <Col>Generacion semilla</Col>
          <Col>Caseros, Buenos aires</Col>
        </Row>
      </Container>
  );
};

export default Footer;