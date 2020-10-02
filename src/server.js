import express from 'express';
import { render } from '@jaredpalmer/after';
import cors from 'cors';

import routes from './routes';
import Document from './Document';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const chunks = require(process.env.RAZZLE_CHUNKS_MANIFEST);

const apiUrl = `${process.env.API_HOST}:${process.env.API_PORT}`;

const corsOptions = {
    origin: `${apiUrl}`,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const server = express();
server
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .use(cors(corsOptions))
    .get('/*', async (req, res) => {
        try {
            const html = await render({
                req,
                res,
                routes,
                assets,
                chunks,
                document: Document,
            });
            res.send(html);
        } catch (error) {
            res.json(error);
        }
    });

export default server;
