import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import s from './Home.module.css';
import RichTextEditor from "../components/rich-text-editor/RichTextEditor";
import {useAside} from "../components/asideContext/AsideContextProvider";

const Home = ({list = []}) => {
    const context = useAside();

    useEffect(() => {
        context.triggerAside(list);
    })

    return (
        <div className={s.home}>
            <RichTextEditor/>
        </div>
    );
};

Home.getInitialProps = async () => {
    try {
        const res = await fetch('http://api.localhost:5000/authors');
        const list = await res.json();
        return {list};
    } catch (error) {
        if (error.response.status === 404) return {statusCode: 404};
        return {error};
    }
};

Home.propTypes = {
    content: PropTypes.string,
};

export default Home;
