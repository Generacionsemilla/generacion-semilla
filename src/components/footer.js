import React from 'react';
import {Col, Row} from "react-bootstrap";
import background from '../assets/footer/desktop/background.svg'
import background_m from '../assets/footer/mobile/background_m.svg'
import whatsapp from '../assets/footer/whatsapp.png'
import instagram from '../assets/footer/instagram.png'
import youtube from '../assets/footer/youtube.png'
import facebook from '../assets/footer/facebook.png'
import linkedin from '../assets/footer/linkedin.png'
import logo from '../assets/footer/logo_reducido.png'
import {STYLES_COMMON} from "../assets/styles_common";
import {useMediaQuery} from "react-responsive";

const Footer = () => {

    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });
    const largeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.lg+')' });

    const styles = {
        footer:{
            footer:{
                fontFamily: 'Arial',
                backgroundImage: `url(${mediumTop ? background_m : background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: '50%'

            },
            icon:{
                maxWidth: largeTop? '50px' : '60px',
                width: '100%'
            },
            logo:{
                width:'100%',
                maxWidth:  mediumTop ? '200px' : '300px',
                maxHeight: '200px'
            },
            rows:{
                minHeight: '100px',
                alignItems: 'center'
            },
            logoRow:{
                minHeight: '100px',
                alignItems: 'center',
                marginTop: '-50px'
            },
            textsRow: {
                lineHeight: 2,
                fontSize: mediumTop ? '10px' : '14px',
                color: STYLES_COMMON.colors.blancoHielo,
                minHeight: '100px',
                alignItems: 'center',
                fontFamily: 'filson-pro,sans-serif',
                fontWeight: '400',
                fontStyle: 'normal'
            }
        }
    }

  return (
      <footer>
        <Row style={styles.footer.footer}>
            <Row className={'text-center'} style={styles.footer.rows}>
              <Col xs={{span: 2,offset:5}}>
                <a href='#'><img style={styles.footer.icon} src={whatsapp} /></a>
              </Col>
            </Row>
            <Row className={'text-center'} style={styles.footer.logoRow}>
              <Col>
                  <img style={styles.footer.logo} src={logo} />
              </Col>
            </Row>
            <Row className={'text-center'} style={styles.footer.rows}>
                <Col xs={{span:6, offset:3}}>
                    <Row className={'text-center'} >
                        <Col><a href='#'><img style={styles.footer.icon} src={youtube} /></a></Col>
                        <Col><a href='#'><img style={styles.footer.icon} src={instagram} /></a></Col>
                        <Col><a href='#'><img style={styles.footer.icon} src={facebook} /></a></Col>
                        <Col><a href='#'><img style={styles.footer.icon} src={linkedin} /></a></Col>
                    </Row>
                </Col>
            </Row>
            <Row className={'text-center'} style={styles.footer.textsRow}>
                <Col xs={12} md={{span:10, offset:1}}>
                    <Row className={'text-center'} >
                        <Col>Envíos a todo el país</Col>
                        <Col>©Generación semilla, 2021</Col>
                        <Col>Caseros, Gran Buenos aires</Col>
                    </Row>
                </Col>
            </Row>
        </Row>
      </footer>
  );
};

export default Footer;