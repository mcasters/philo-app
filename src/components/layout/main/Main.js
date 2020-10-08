import React from 'react';
import PropTypes from 'prop-types';

import s from './Main.module.css';
import useWindowHeight from '../../hooks/useWindowHeight';

const Main = ({ children }) => {
    const height = useWindowHeight();

    return (
        <main style={{ height }} className={s.content}>
            {children}
        </main>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
