import React from 'react';
import PropTypes from 'prop-types';

import logo from '../react.svg';
import s from './Home.module.css';
import CustomEditor from "../components/rich-text-editor/CustomEditor";
import RichTextEditor from "../components/rich-text-editor/RichTextEditor";

const Home = ({content}) => {


    return (
        <div className={s.home}>
            <div className={s.header}>
                <img src={logo} className={s.homeLogo} alt="logo"/>
                <h2>{content}</h2>
            </div>
            <RichTextEditor />
        </div>
    );
};

Home.getInitialProps = async () => {
    try {
        return {content: 'hello'};
    } catch (error) {
        if (error.response.status === 404) return {statusCode: 404};
        return {error};
    }
};

Home.propTypes = {
    content: PropTypes.string,
};

export default Home;
