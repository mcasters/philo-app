import React from "react";
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';

import s from './Layout.module.css';

const Layout = ({children, title = 'This is the default title'}) =>
    <>
        <Helmet>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Helmet>
        <header className={s.header}>
        </header>
        <main>{children}</main>
    </>;


Layout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Layout;
