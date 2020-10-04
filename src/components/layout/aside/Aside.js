import React from 'react';
import PropTypes from "prop-types";

import s from './Aside.module.css';

export default function Aside({folderList}) {
    console.log(folderList);
    return (
        <aside className={s.aside}>
            <div className={s.container}>
                {folderList.map(item => <p key={item.id}>{item.fullname}</p>)}
            </div>
        </aside>
    );
}

Aside.propTypes = {
    folderList: PropTypes.array,
};
