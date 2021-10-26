import React from 'react';
import MediaQuery from "react-responsive";
import {useTranslation} from "react-i18next";
import {Button, Container, Row} from "react-bootstrap";

const styles = {
    mainRow:{
        minHeight: '500px'
    }

}

const Home = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Row style={styles.mainRow}>
                <p>Generacion semilla logo</p>
                <p>mini texto aqui</p>
                <Button className={'btn btn-sm '}> Conocenos</Button>
            </Row>
        </Container>
        );
};

export default Home;