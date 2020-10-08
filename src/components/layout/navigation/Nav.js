import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import s from './Nav.module.css';
import logo from './logo-45.png';
import {MENU, ROUTES} from '../../../constants/paths';

const Nav = () => {
    let location = useLocation();

    return (
        <nav className={s.nav}>
            {MENU.map(({PATH, NAME}) => {
                if (PATH === ROUTES.HOME)
                    return (
                        <Link key={PATH} to={PATH} className={s.homeLink}>
                            <img
                                src={logo}
                                alt="logo"
                                className={s.logo}
                            />
                        </Link>
                    );
                return (
                    <Link
                        key={PATH}
                        to={PATH}
                        className={
                            location.pathname === PATH
                                ? `${s.link} ${s.active}`
                                : `${s.link}`
                        }
                    >
                        {NAME}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
