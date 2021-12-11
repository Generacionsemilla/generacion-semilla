import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Row, Col, Button, Collapse} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";
import icon_desktop from '../assets/header/desktop/icon_desktop.png'
import hamburger from '../assets/header/mobile/hamburger.svg'
import menu_bar_m from '../assets/header/mobile/menu_bar_m.svg'
import menu_bar_d from '../assets/header/desktop/menu_bar_d.svg'
import {STYLES_COMMON} from "../assets/styles_common";
import menu_back from '../assets/header/mobile/menu_back_m.svg'

const Header = () => {
    const [menuMOpen, setMenuMOpen] = useState(false);

    const xxlargeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.xxl+')' });
    const xlargeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.xl+')' });
    const largeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.lg+')' });
    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });

    const styles = {
        header_d:{
            iconDesktop:{
                width: '100%'
            },
            homeIconLink:{
                width: largeTop ? '60px' : '70px',
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
                zIndex: '-2',
                top: mediumTop? '0' : largeTop ? '-10px' :  xxlargeTop ? '-30px' : '-70px'
            },
            headerBackgroundIcon:{
                position: "absolute",
                zIndex: '-1',
                top: '0',
                left: '0',
                width: mediumTop ? '140px' : xlargeTop ? '180px' : xxlargeTop ? '190px' : '200px',
                height: mediumTop ? '140px' : xlargeTop ? '180px' :  xxlargeTop ? '190px' :'200px'
            },
            headerLink:{
                fontSize: largeTop ? '16px' : '22px',
                textDecoration: 'none',
                color: STYLES_COMMON.colors.blancoHielo,
                fontFamily: 'ff-providence-sans-web-pro,sans-serif',
                fontWeight: '700',
                fontStyle: 'normal'
            },
            linksRow:{
                marginTop: '30px'
            }
        },
        header_m:{
            hamburger:{
                margin: '15px 0px 0px 20px',
                display: 'block',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                zIndex: '3',
                position: 'absolute'
            },
            headerLink:{
                fontSize: '20px',
                textDecoration: 'none',
                color: STYLES_COMMON.colors.blancoHielo,
                fontFamily: 'ff-providence-sans-web-pro,sans-serif',
                fontWeight: '700',
                fontStyle: 'normal'
            },
            headerCol:{
                lineHeight:2
            },
            collapse: {
                backgroundImage: `url(${menu_back})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '250px',
                height: '275px',
                position: 'absolute',
                zIndex: '2',
                top: '0',
                left: '0'
            }
        }

    };
    const { t } = useTranslation();
    return (
        <header>
            <Collapse in={menuMOpen} style={styles.header_m.collapse}>
                <div id="m-movil" >
                    <Row style={{marginTop: '50px'}}>
                        <Col xs={{span:6, offset: 1}} style={styles.header_m.headerCol}>
                            <Link to="/products" style={styles.header_m.headerLink} className={'ml-4'}>{t('header.products')}</Link>
                        </Col>
                        <Col xs={{span:6, offset: 2}} style={styles.header_m.headerCol}>
                            <a href="https://www.mercadolibre.com.ar" target="_blank" rel="noreferrer" style={styles.header_m.headerLink}>{t('header.store')}</a>
                        </Col>
                        <Col xs={{span:6, offset: 3}} style={styles.header_m.headerCol}>
                            <Link to="/about" style={styles.header_m.headerLink}>{t('header.about')}</Link>
                        </Col>
                        <Col xs={{span:6, offset: 2}} style={styles.header_m.headerCol}>
                            <Link to="/contact" style={styles.header_m.headerLink}>{t('header.contact')}</Link>
                        </Col>
                        <Col xs={{span:6, offset: 1}} style={styles.header_m.headerCol}>
                            <Link to="/" style={styles.header_m.headerLink}>{t('header.home')}</Link>
                        </Col>
                    </Row>
                </div>
            </Collapse>
            <Row style={styles.header_d.header}>
                <Col xs={2} className={'d-md-none'}>
                    <Button style={styles.header_m.hamburger}
                            onClick={() => setMenuMOpen(!menuMOpen)}
                            aria-controls="m-movil"
                            aria-expanded={menuMOpen}><img src={hamburger}></img></Button>
                </Col>

                <Col xs={12} style={styles.header_d.headerBackground} >
                    <svg xmlns="http://www.w3.org/2000/svg" style={styles.header_d.headerBackgroundIcon} xmlnsXlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 375 375" preserveAspectRatio="none" version="1.0"><defs><clipPath id="clip-0"><path d="M 0 0 L 375 0 L 375 256 L 0 256 Z M 0 0 " clipRule="nonzero"/></clipPath><clipPath id="clip-1"><path d="M -51.773438 492.085938 L -507.585938 -152.847656 L 137.351562 -608.660156 L 593.160156 36.277344 Z M -51.773438 492.085938 " clipRule="nonzero"/></clipPath><clipPath id="clip-2"><path d="M -51.773438 492.085938 L -507.585938 -152.847656 L 137.351562 -608.660156 L 593.160156 36.277344 Z M -51.773438 492.085938 " clipRule="nonzero"/></clipPath></defs><g clipPath="url(#clip-0)"><g clipPath="url(#clip-1)"><g clipPath="url(#clip-2)"><path fill="rgb(24.308777%, 36.859131%, 44.709778%)" d="M 376.25 -43.488281 C 381.730469 255.722656 -75.101562 269.703125 -158.136719 249.089844 C -316 210.183594 -302.453125 -16.40625 -174.449219 -47.105469 C -81.535156 -69.449219 7.660156 -68.855469 -8.953125 -263.679688 C -22.703125 -425.714844 108.851562 -512.695312 177.550781 -477.886719 C 277.972656 -427.203125 372.3125 -254.042969 376.25 -43.488281 Z M 376.25 -43.488281 " fillOpacity="1" fillRule="nonzero"/></g></g></g></svg>
                    <img style={styles.header_d.headerBackgroundFull} src={menu_bar_d} className={'d-none d-md-block'}/>
                    <img style={styles.header_d.headerBackgroundFull} src={menu_bar_m} className={'d-xs-block d-md-none'}/>
                </Col>

                <Col md={2} xl={1} className={'d-none d-md-block'}>
                    <Link to="/" style={styles.header_d.homeIconLink}><img src={icon_desktop} style={styles.header_d.iconDesktop} alt={t('title')} title={t('title')}></img></Link>
                </Col>
                <Col md={10} xl={11} className={'d-none d-md-block'}>
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