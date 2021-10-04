import React from 'react';
import MediaQuery from "react-responsive";
import {useTranslation} from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <div>
            <MediaQuery minWidth={1224}>
                <h3>this is the Home page Desktop</h3>
            </MediaQuery>
            <MediaQuery maxWidth={1223}>
                <h3>this is the Home page mobile?</h3>
            </MediaQuery>
        </div>
        );
};

export default Home;