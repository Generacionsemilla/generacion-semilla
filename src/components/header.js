import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Container, Row, Col} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";



const Header = () => {
    const medium = useMediaQuery({ query: '(min-width: 768px)' });
    const styles = {
        header:{
            height: medium ? '200px' : '100px'
        },

    };
    const { t} = useTranslation();
    return (
        <Container fluid>
            <Row style={styles.header}>
                <Col xs={2} className="d-md-none"><i>Hamburger</i></Col>
                <Col md={2} className="d-none d-md-block">Home Icon here</Col>
                <Col md={10} className="d-none d-md-block">
                    <Row>
                        <Col>
                            <Link to="/">{t('header.home')}</Link>
                        </Col>
                        <Col>
                            <Link to="/products">{t('header.products')}</Link>
                        </Col>
                        <Col>
                            <a href="https://www.mercadolibre.com.ar" target="_blank" rel="noreferrer">{t('header.store')}</a>
                        </Col>
                        <Col>
                            <Link to="/about">{t('header.about')}</Link>
                        </Col>
                        <Col>
                            <Link to="/contact">{t('header.contact')}</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
};

export default Header;