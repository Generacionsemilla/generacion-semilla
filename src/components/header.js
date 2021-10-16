import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const styles = {
    link:{
        color: 'red',
        fontSize: '25px',
    },
    parent:{
        display: 'flex',
        justifyContent:  'flex-end'
    }

}

const Header = () => {
    const { t} = useTranslation();
    return (
        <div className={'header'} style={styles.parent}>
            <Link to="/" style={styles.link}>{t('header.home')}</Link>
            <Link to="/products" style={styles.link}>{t('header.products')}</Link>
            <a href="https://www.mercadolibre.com.ar" target="_blank" rel="noreferrer">{t('header.store')}</a>
            <Link to="/about">{t('header.about')}</Link>
            <Link to="/contact">{t('header.contact')}</Link>
        </div>
    );
};

export default Header;