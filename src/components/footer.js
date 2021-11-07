import React from 'react';
import {Col, Row} from "react-bootstrap";
import background from '../assets/footer/background.svg'
import whatsapp from '../assets/footer/whatsapp.png'
import instagram from '../assets/footer/instagram.png'
import youtube from '../assets/footer/youtube.png'
import facebook from '../assets/footer/facebook.png'
import linkedin from '../assets/footer/linkedin.png'
import logo from '../assets/footer/logo_reducido.png'
import {STYLES_COMMON} from "../assets/styles_common";

const Footer = () => {
    const styles = {
        footer_d:{
            footer:{
                fontFamily: 'Arial',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            },
            icon:{
                maxWidth: '60px',
                width: '100%'
            },
            logo:{
                width: '100%',
                maxWidth: '300px',
                maxHeight: '200px'
            },
            rows:{
                minHeight: '100px',
                alignItems: 'center'
            },
            textsRow: {
                lineHeight: 2,
                fontSize: '14px',
                color: STYLES_COMMON.colors.blancoHielo,
                minHeight: '100px',
                alignItems: 'center'
            }
        }
    }

  return (
      <footer>
        <Row style={styles.footer_d.footer}>
            <Row className={'text-center'} style={styles.footer_d.rows}>
              <Col xs={{span: 2,offset:5}}>
                <a href='#'><img style={styles.footer_d.icon} src={whatsapp} /></a>
              </Col>
            </Row>
            <Row className={'text-center'} style={styles.footer_d.rows}>
              <Col>
                  <img style={styles.footer_d.logo} src={logo} />
              </Col>
            </Row>
            <Row className={'text-center'} style={styles.footer_d.rows}>
                <Col></Col>
                <Col></Col>
                <Col><a href='#'><img style={styles.footer_d.icon} src={youtube} /></a></Col>
              <Col><a href='#'><img style={styles.footer_d.icon} src={instagram} /></a></Col>
              <Col><a href='#'><img style={styles.footer_d.icon} src={facebook} /></a></Col>
              <Col><a href='#'><img style={styles.footer_d.icon} src={linkedin} /></a></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row className={'text-center'} style={styles.footer_d.textsRow}>
                <Col>Envios a todo el pais</Col>
                <Col></Col>
                <Col>Generacion semilla</Col>
                <Col></Col>
                <Col>Caseros, Buenos aires</Col>
            </Row>
        </Row>
      </footer>
  );
};

export default Footer;