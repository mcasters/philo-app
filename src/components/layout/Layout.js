import React, {useState} from "react";
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';

import s from './Layout.module.css';
import Footer from "./footer/Footer";
import Nav from "./navigation/Nav";
import {AsideContext, AsideContextProvider} from "../asideContext/AsideContextProvider";
import Aside from "./aside/Aside";

const Layout = ({children, title = 'This is the default title'}) => {
    const [withAside, setWithAside] = useState(false);

    return <>
        <Helmet>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Helmet>
        <header className={s.header}>
            <Nav/>
        </header>
        <AsideContextProvider>
            <AsideContext.Consumer>
                {(context) => (<Aside folderList={context.folderList}/>)}
            </AsideContext.Consumer>
            <main className={s.main}>{children}</main>
        </AsideContextProvider>
        <Footer/>
    </>;
};


Layout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Layout;
