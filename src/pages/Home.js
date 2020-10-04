import React from 'react';
import PropTypes from 'prop-types';

import s from './Home.module.css';
import RichTextEditor from "../components/rich-text-editor/RichTextEditor";

const Home = ({content}) => {


    return (
        <div className={s.home}>
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
