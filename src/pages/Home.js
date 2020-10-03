import React from 'react';
import PropTypes from 'prop-types';

import logo from '../react.svg';
import './Home.css';
import CustomEditor from "../components/rich-text-editor/CustomEditor";

const Home = ({content}) => {


    return (
        <div className="Home">
            <div className="Home-header">
                <img src={logo} className="Home-logo" alt="logo"/>
                <h2>{content}</h2>
            </div>
            <CustomEditor/>
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
