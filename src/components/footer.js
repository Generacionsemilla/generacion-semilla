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

const Footer = ({showSocials}) => {

    const smallTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.sm+')' });
    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });
    const largeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.lg+')' });

    const styles = {
        footer:{
            footer:{
                fontFamily: 'Arial',
                backgroundImage: `url(${mediumTop ? background_m : background})`,
                backgroundSize: mediumTop ? '100% 320px' : '100% 700px',
                height: mediumTop ? '320px': '400px',
                backgroundRepeat: 'no-repeat'
            },
            icon:{
                maxWidth: mediumTop ? '30px' : largeTop ? '50px' : '60px',
                width: '100%'
            },
            logo:{
                width:'100%',
                maxWidth:  mediumTop ? '200px' : '300px',
                maxHeight: '200px'
            },
            rows:{
                minHeight: showSocials ? (mediumTop ? '75px' : '100px') : (mediumTop ? '100px' : '133px') ,
                alignItems: 'center'
            },
            logoRow:{
                marginTop: mediumTop ? '' : '-50px',
            },
            textsRow: {
                lineHeight: 2,
                fontSize: smallTop ? '7px' : mediumTop ? '10px' : '14px',
                color: STYLES_COMMON.colors.blancoHielo,
                fontFamily: 'filson-pro,sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
                marginTop: !mediumTop && '50px'
            },
            link:{
                height: largeTop? '50px' : '60px',
                width: largeTop? '50px' : '60px'
            }
        }
    }

  return (
      <footer>
        <Row style={styles.footer.footer}>
            <Col xs={12}>
                    <Row className={'text-center'} style={styles.footer.rows}>
                      <Col xs={{span: 2,offset:5}}>
                        <a href='https://api.whatsapp.com/send?phone=541124014094&text=%C2%A1Hola%21+Estoy+en+la+tienda+Editorial+Generaci%C3%B3n+semilla+y+quiero+pedir+m%C3%A1s+informaci%C3%B3n' target="_blank" rel="noreferrer" ><img style={styles.footer.icon} src={whatsapp} /></a>
                      </Col>
                    </Row>
                    <Row className={'text-center'}
                         style={{...styles.footer.rows, ...styles.footer.logoRow, marginTop: '-20px'}}>
                        <Col>
                            <img style={styles.footer.logo} src={logo}/>
                        </Col>
                    </Row>
                {showSocials &&
                        <Row className={'text-center'} style={{...styles.footer.rows}}>
                            <Col md={{span:6, offset:3}} xs={{span:8, offset:2}}>
                                <Row className={'text-center'} >
                                    <Col><a href='https://www.youtube.com/channel/UCeqlCxCxGo1cm1iBZtamgWA' target="_blank" rel="noreferrer" ><img style={styles.footer.icon} src={youtube} /></a></Col>
                                    <Col><a href='https://www.instagram.com/generacionsemilla/' target="_blank" rel="noreferrer"><img style={styles.footer.icon} src={instagram} /></a></Col>
                                    <Col><a href='https://www.facebook.com/generacionsemillaeditorial' target="_blank" rel="noreferrer"><img style={styles.footer.icon} src={facebook} /></a></Col>
                                    <Col><a href='https://www.linkedin.com/company/generaci%C3%B3n-semilla' target="_blank" rel="noreferrer"><img style={styles.footer.icon} src={linkedin} /></a></Col>
                                </Row>
                            </Col>
                        </Row>
                }

                <Row className={'text-center'} style={{...styles.footer.rows, ...styles.footer.textsRow, marginTop: '20px'}}>
                    <Col xs={12} md={{span:10, offset:1}}>
                        <Row className={'text-center'} >
                            <Col>Envíos a todo el país</Col>
                            <Col>©Generación semilla, 2021</Col>
                            <Col>Caseros, Gran Buenos aires</Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
      </footer>
  );
};

export default Footer;