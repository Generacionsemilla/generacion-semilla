import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Row, Col, Button, Collapse} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";
import icon_desktop from '../assets/header/icon_desktop.png'
import hamburger from '../assets/header/hamburger.svg'
import {STYLES_COMMON} from "../assets/styles_common";


const Header = () => {
    const [menuMOpen, setMenuMOpen] = useState(false);

    const medium = useMediaQuery({ query: '(max-width: 992px)' });
    const styles = {
        header_d:{
            iconDesktop:{
                width: '100%'
            },
            homeIconLink:{
                width: '70px',
                margin: '15px 0px 0px 20px',
                display: 'block'
            },
            header:{
                height: '180px',
                letterSpacing: '3px'
            },
            headerBackground:{
                padding: '0px',
                position: 'absolute'
            },
            headerBackgroundFull:{
                position: "absolute",
                zIndex: '-2'
            },
            headerBackgroundIcon:{
                position: "absolute",
                zIndex: '-1',
                top: '0',
                left: '0'
            },
            headerLink:{
                fontSize: medium ? '16px' : '22px',
                textDecoration: 'none',
                color: STYLES_COMMON.colors.blancoHielo,
                fontFamily: 'ff-providence-sans-web-pro,sans-serif',
                fontWeight: '700',
                fontStyle: 'normal'
            },
            linksRow:{
                lineHeight: '3'
            }
        },
        header_m:{
            hamburger:{
                margin: '15px 0px 0px 20px',
                display: 'block',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white'
            },
            headerLink:{
                fontSize: '30px',
                textDecoration: 'none',
                color: STYLES_COMMON.colors.blancoHielo,
                fontFamily: 'ff-providence-sans-web-pro,sans-serif',
                fontWeight: '700',
                fontStyle: 'normal'
            },
            linksDiv: {
            }
        }

    };
    const { t } = useTranslation();
    return (
        <header>
            <Row style={styles.header_d.header}>
                <Col xs={2} className="d-md-none">
                    <Button style={styles.header_m.hamburger}
                            onClick={() => setMenuMOpen(!menuMOpen)}
                            aria-controls="m-movil"
                            aria-expanded={menuMOpen}><img src={hamburger}></img></Button>
                    <Collapse in={menuMOpen}>
                        <div id="m-movil" style={styles.header_m.linksDiv}>
                            <Row>
                                <Col xs={12}>
                                    <Link to="/" style={styles.header_m.headerLink}>{t('header.home')}</Link>
                                </Col>
                                <Col xs={12} >
                                    <Link to="/products" style={styles.header_m.headerLink} className={'ml-4'}>{t('header.products')}</Link>
                                </Col>
                                <Col xs={12}>
                                    <a href="https://www.mercadolibre.com.ar" target="_blank" rel="noreferrer" style={styles.header_m.headerLink}>{t('header.store')}</a>
                                </Col>
                                <Col xs={12}>
                                    <Link to="/about" style={styles.header_m.headerLink}>{t('header.about')}</Link>
                                </Col>
                                <Col xs={12}>
                                    <Link to="/contact" style={styles.header_m.headerLink}>{t('header.contact')}</Link>
                                </Col>
                            </Row>
                        </div>
                    </Collapse>
                </Col>
                <Col md={12} style={styles.header_d.headerBackground} className="d-none d-md-block">
                    <svg xmlns="http://www.w3.org/2000/svg" style={styles.header_d.headerBackgroundIcon} xmlnsXlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 375 375" width="200px" height="200px" preserveAspectRatio="none" version="1.0"><defs><clipPath id="clip-0"><path d="M 0 0 L 375 0 L 375 256 L 0 256 Z M 0 0 " clipRule="nonzero"/></clipPath><clipPath id="clip-1"><path d="M -51.773438 492.085938 L -507.585938 -152.847656 L 137.351562 -608.660156 L 593.160156 36.277344 Z M -51.773438 492.085938 " clipRule="nonzero"/></clipPath><clipPath id="clip-2"><path d="M -51.773438 492.085938 L -507.585938 -152.847656 L 137.351562 -608.660156 L 593.160156 36.277344 Z M -51.773438 492.085938 " clipRule="nonzero"/></clipPath></defs><g clipPath="url(#clip-0)"><g clipPath="url(#clip-1)"><g clipPath="url(#clip-2)"><path fill="rgb(24.308777%, 36.859131%, 44.709778%)" d="M 376.25 -43.488281 C 381.730469 255.722656 -75.101562 269.703125 -158.136719 249.089844 C -316 210.183594 -302.453125 -16.40625 -174.449219 -47.105469 C -81.535156 -69.449219 7.660156 -68.855469 -8.953125 -263.679688 C -22.703125 -425.714844 108.851562 -512.695312 177.550781 -477.886719 C 277.972656 -427.203125 372.3125 -254.042969 376.25 -43.488281 Z M 376.25 -43.488281 " fillOpacity="1" fillRule="nonzero"/></g></g></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" style={styles.header_d.headerBackgroundFull} xmlnsXlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 375 375"  width="100%" height="450px" preserveAspectRatio="none" version="1.0"><path fill="rgb(18.818665%, 76.858521%, 70.979309%)" d="M 42.605469 88.125 C 68.855469 92.921875 95.480469 96.894531 122.253906 94.644531 C 148.125 92.472656 171.976562 79.957031 198 79.058594 C 224.398438 78.160156 250.871094 82.804688 276.445312 88.726562 C 319.417969 98.617188 353.46875 86.476562 374.992188 73.960938 L 374.992188 0.0703125 L 0.0078125 0.0703125 L 0.0078125 79.28125 C 14.035156 82.953125 28.507812 85.578125 42.605469 88.125 Z M 42.605469 88.125 " fillOpacity={"1"} fillRule={"nonzero"}/></svg>
                </Col>
                <Col xs={12} style={styles.header_d.headerBackground} className="d-xs-block d-md-none">
                    <svg xmlns="http://www.w3.org/2000/svg" style={styles.header_d.headerBackgroundIcon} xmlnsXlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 375 375" width="150px" height="150px" preserveAspectRatio="none" version="1.0"><defs><clipPath id="clip-0"><path d="M 0 0 L 375 0 L 375 256 L 0 256 Z M 0 0 " clipRule="nonzero"/></clipPath><clipPath id="clip-1"><path d="M -51.773438 492.085938 L -507.585938 -152.847656 L 137.351562 -608.660156 L 593.160156 36.277344 Z M -51.773438 492.085938 " clipRule="nonzero"/></clipPath><clipPath id="clip-2"><path d="M -51.773438 492.085938 L -507.585938 -152.847656 L 137.351562 -608.660156 L 593.160156 36.277344 Z M -51.773438 492.085938 " clipRule="nonzero"/></clipPath></defs><g clipPath="url(#clip-0)"><g clipPath="url(#clip-1)"><g clipPath="url(#clip-2)"><path fill="rgb(24.308777%, 36.859131%, 44.709778%)" d="M 376.25 -43.488281 C 381.730469 255.722656 -75.101562 269.703125 -158.136719 249.089844 C -316 210.183594 -302.453125 -16.40625 -174.449219 -47.105469 C -81.535156 -69.449219 7.660156 -68.855469 -8.953125 -263.679688 C -22.703125 -425.714844 108.851562 -512.695312 177.550781 -477.886719 C 277.972656 -427.203125 372.3125 -254.042969 376.25 -43.488281 Z M 376.25 -43.488281 " fillOpacity="1" fillRule="nonzero"/></g></g></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" style={styles.header_d.headerBackgroundFull} xmlnsXlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 375 375"  width="100%" height="300px" preserveAspectRatio="none" version="1.0"><path fill="rgb(18.818665%, 76.858521%, 70.979309%)" d="M 42.605469 88.125 C 68.855469 92.921875 95.480469 96.894531 122.253906 94.644531 C 148.125 92.472656 171.976562 79.957031 198 79.058594 C 224.398438 78.160156 250.871094 82.804688 276.445312 88.726562 C 319.417969 98.617188 353.46875 86.476562 374.992188 73.960938 L 374.992188 0.0703125 L 0.0078125 0.0703125 L 0.0078125 79.28125 C 14.035156 82.953125 28.507812 85.578125 42.605469 88.125 Z M 42.605469 88.125 " fillOpacity={"1"} fillRule={"nonzero"}/></svg>
                </Col>
                <Col md={3} lg={2} className="d-none d-md-block">
                    <Link to="/" style={styles.header_d.homeIconLink}><img src={icon_desktop} style={styles.header_d.iconDesktop} alt={t('title')} title={t('title')}></img></Link>
                </Col>
                <Col md={9} lg={10} className="d-none d-md-block">
                    <Row className={'text-center'} style={styles.header_d.linksRow}>
                        <Col>
                            <Link to="/" style={styles.header_d.headerLink}>{t('header.home')}</Link>
                        </Col>
                        <Col>
                            <Link to="/products" style={styles.header_d.headerLink}>{t('header.products')}</Link>
                        </Col>
                        <Col>
                            <a href="https://www.mercadolibre.com.ar" target="_blank" rel="noreferrer" style={styles.header_d.headerLink}>{t('header.store')}</a>
                        </Col>
                        <Col>
                            <Link to="/about" style={styles.header_d.headerLink}>{t('header.about')}</Link>
                        </Col>
                        <Col>
                            <Link to="/contact" style={styles.header_d.headerLink}>{t('header.contact')}</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </header>
    );
};

export default Header;