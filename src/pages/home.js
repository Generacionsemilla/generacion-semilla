import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, Row} from "react-bootstrap";

const styles = {
    mainRow:{
        minHeight: '500px'
    }

}

const Home = () => {
    const { t } = useTranslation();
    return (
            <Row style={styles.mainRow}>
                <p>Generacion semilla logo</p>
                <p>mini texto aqui</p>
                <Button className={'btn btn-sm '}> Conocenos</Button>
            </Row>
        );
};

export default Home;