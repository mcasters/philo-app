import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { After, ensureReady } from '@jaredpalmer/after';

import './client.css';
import routes from './routes';
import Layout from './components/layout/Layout';

ensureReady(routes).then((data) =>
    hydrate(
        <BrowserRouter>
            <Layout>
                <After data={data} routes={routes} />
            </Layout>
        </BrowserRouter>,
        document.getElementById('root')
    )
);

if (module.hot) {
    module.hot.accept();
}
