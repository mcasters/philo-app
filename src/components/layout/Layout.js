import React from "react";
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';

import s from './Layout.module.css';
import Footer from "./footer/Footer";
import Nav from "./navigation/Nav";

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
            <Nav />
        </header>
        <main>{children}</main>
        <Footer />
    </>;


Layout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Layout;
