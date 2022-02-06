import React, {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Row, Col, Button, Collapse} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";
import icon_desktop from '../assets/header/desktop/icon_desktop.png'
import menu_back_full_home from '../assets/header/mobile/menu_back_full_home.svg'
import menu_back_full_other from '../assets/header/mobile/menu_back_full_other.svg'
import menu_bar_d from '../assets/header/desktop/menu_bar_d.svg'
import {STYLES_COMMON} from "../assets/styles_common";
import menu_back_home from '../assets/header/mobile/menu_back_m_home.png'
import menu_back_other from '../assets/header/mobile/menu_back_m_other.png'

const Header = ({isHome, title}) => {
    const [menuMOpen, setMenuMOpen] = useState(false);

    const xxlargeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.xxl+')' });
    const largeTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.lg+')' });
    const mediumTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.md+')' });
    const smallTop = useMediaQuery({ query: '(max-width: '+STYLES_COMMON.breakpoints.sm+')' });

    const styles = {
        header:{
            height: '180px',
            letterSpacing: '3px'
        },
        header_d:{
            iconDesktop:{
                width: '100%'
            },
            homeIconLink:{
                width: xxlargeTop ? '60px' : '70px',
                margin: '15px 0px 0px 20px',
                display: 'block',
                zIndex: '5',
                position: 'relative'

            },
            headerBackground:{
                padding: '0px',
                position: 'absolute'
            },
            headerBackgroundFull:{
                position: "absolute",
                zIndex: '3',
                top: '0',
                width: '100%',
                maxHeight: mediumTop && isHome ?  '170px' : '120px'
            },
            headerBackgroundIcon:{
                position: "absolute",
                zIndex: '4',
                top: '0',
                left: '0',
                width: mediumTop ? '140px' : xxlargeTop ? '180px' : '200px',
                height: mediumTop ? '140px' : xxlargeTop ? '180px' : '200px'
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
                color: menuMOpen ? 'gray' : 'white',
                zIndex: '5',
                position: 'absolute'
            },
            headerLink:{
                fontSize: '16px',
                textDecoration: 'none',
                color: STYLES_COMMON.colors.blancoHielo,
                fontFamily: 'ff-providence-sans-web-pro,sans-serif',
                fontWeight: '700',
                fontStyle: 'normal'
            },
            homeLink:{
                display: 'block',
                width: '40px',
                height: '40px',
                marginTop: '16px',
                marginLeft: '8px'
            },
            headerCol:{
                lineHeight:2
            },
            collapse: {
                width: '205px',
                height: '275px',
                position: 'absolute',
                zIndex: '5',
                top: '0',
                left: '0'
            },
            menuBack: {
                maxWidth: '205px',
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: '5'
            },
            linksMenu:{
                marginTop: '65px',
                marginLeft: '20px',
                zIndex: '6',
                position: 'relative'
            },
            title:{
                zIndex: '6',
                position: 'relative',
                marginTop: '35px',
                color: STYLES_COMMON.colors.blancoHielo,
                fontFamily: 'tomarik-brush,sans-serif',
                fontWeight: '700',
                fontStyle: 'normal',
                fontSize: smallTop ? '24px' : '30px'
            }
        }

    };
    const { t } = useTranslation();
    return (
        <header>
            <Collapse in={menuMOpen} style={styles.header_m.collapse} >
                <div id="m-movil" >
                    <img src={isHome ? menu_back_home : menu_back_other} style={styles.header_m.menuBack}/>
                    <Row style={styles.header_m.linksMenu}>
                        <Col xs={{span:6, offset: 1}} style={styles.header_m.headerCol}>
                            <Link to="/products" style={styles.header_m.headerLink} className={'ml-4'}>{t('header.products')}</Link>
                        </Col>
                        <Col xs={{span:6, offset: 2}} style={styles.header_m.headerCol}>
                            <a href="https://editorialgeneracionsemilla.mercadoshops.com.ar/" target="_blank" rel="noreferrer" style={styles.header_m.headerLink}>{t('header.store')}</a>
                        </Col>
                        <Col xs={{span:6, offset: 3}} style={styles.header_m.headerCol}>
                            <Link to="/about" style={styles.header_m.headerLink}>{t('header.about')}</Link>
                        </Col>
                        <Col xs={{span:6, offset: 2}} style={styles.header_m.headerCol}>
                            <Link to="/contact" style={styles.header_m.headerLink}>{t('header.contact')}</Link>
                        </Col>
                        {!isHome ?  <Col xs={{span:6}} style={styles.header_m.headerCol}>
                            <Link to="/" style={styles.header_m.homeLink}></Link>
                        </Col> : ''}

                    </Row>
                </div>
            </Collapse>
            <Row style={styles.header}>
                {mediumTop &&
                    <Fragment>
                        <Col xs={2}>
                            <Button style={styles.header_m.hamburger}
                                    onClick={() => setMenuMOpen(!menuMOpen)}
                                    aria-controls="m-movil"
                                    aria-expanded={menuMOpen}>
                                <svg height="32px" id="Layer_1" style={{enableBackground: 'new 0 0 32 32'}} version="1.1" viewBox="0 0 32 32" width="32px"
                                     xmlSpace={'preserve'} xmlns={'http://www.w3.org/2000/svg'} xmlnsXlink={'http://www.w3.org/1999/xlink'}>
                                    <path fill={menuMOpen ? '#8e8e8e' : '#F6F5F1'} d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
                                </Button>
                        </Col>
                        {!isHome &&
                            <Col xs={{span:4, offset:5}} className={'text-center'}>
                                <h3 style={styles.header_m.title}>{title}</h3>
                            </Col>
                        }
                    </Fragment>
                }
                <Col xs={12} style={styles.header_d.headerBackground} >
                    <svg xmlns="http://www.w3.org/2000/svg" style={styles.header_d.headerBackgroundIcon} xmlnsXlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 375 375" preserveAspectRatio="none" version="1.0"><defs><clipPath id="clip-0"><path d="M 0 0 L 375 0 L 375 256 L 0 256 Z M 0 0 " clipRule="nonzero"/></clipPath><clipPath id="clip-1"><path d="M -51.773438 492.085938 L -507.585938 -152.847656 L 137.351562 -608.660156 L 593.160156 36.277344 Z M -51.773438 492.085938 " clipRule="nonzero"/></clipPath><clipPath id="clip-2"><path d="M -51.773438 492.085938 L -507.585938 -152.847656 L 137.351562 -608.660156 L 593.160156 36.277344 Z M -51.773438 492.085938 " clipRule="nonzero"/></clipPath></defs><g clipPath="url(#clip-0)"><g clipPath="url(#clip-1)"><g clipPath="url(#clip-2)"><path fill="rgb(24.308777%, 36.859131%, 44.709778%)" d="M 376.25 -43.488281 C 381.730469 255.722656 -75.101562 269.703125 -158.136719 249.089844 C -316 210.183594 -302.453125 -16.40625 -174.449219 -47.105469 C -81.535156 -69.449219 7.660156 -68.855469 -8.953125 -263.679688 C -22.703125 -425.714844 108.851562 -512.695312 177.550781 -477.886719 C 277.972656 -427.203125 372.3125 -254.042969 376.25 -43.488281 Z M 376.25 -43.488281 " fillOpacity="1" fillRule="nonzero"/></g></g></g></svg>
                    {!mediumTop &&
                        <img style={styles.header_d.headerBackgroundFull} src={menu_bar_d} />
                    }
                    {mediumTop &&
                        ((isHome &&
                            <img style={styles.header_d.headerBackgroundFull} src={menu_back_full_home}/>
                        ) ||
                        (!isHome &&
                            <img style={styles.header_d.headerBackgroundFull} src={menu_back_full_other}/>
                        ))
                    }
                </Col>
                {!mediumTop &&
                    <Fragment>
                        <Col md={2} xl={1}>
                            <Link to="/" style={styles.header_d.homeIconLink}><img src={icon_desktop} style={styles.header_d.iconDesktop} alt={t('title')} title={t('title')}></img></Link>
                        </Col>
                        <Col md={10} xl={11}  style={{zIndex: 5}}>
                            <Row className={'text-center'} style={styles.header_d.linksRow}>
                                <Col>
                                    <Link to="/" style={styles.header_d.headerLink}>{t('header.home')}</Link>
                                </Col>
                                <Col>
                                    <Link to="/products" style={styles.header_d.headerLink}>{t('header.products')}</Link>
                                </Col>
                                <Col>
                                    <a href="https://editorialgeneracionsemilla.mercadoshops.com.ar/" target="_blank" rel="noreferrer" style={styles.header_d.headerLink}>{t('header.store')}</a>
                                </Col>
                                <Col>
                                    <Link to="/about" style={styles.header_d.headerLink}>{t('header.about')}</Link>
                                </Col>
                                <Col>
                                    <Link to="/contact" style={styles.header_d.headerLink}>{t('header.contact')}</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Fragment>
                }
            </Row>
        </header>
    );
};

export default Header;