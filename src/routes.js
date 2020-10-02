import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';

import Home from './pages/Home';

export default [
    // normal route
    {
        path: '/',
        exact: true,
        component: Home,
    },
];
