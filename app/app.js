import express from 'express';
import cors from 'cors';

import accessHttpMiddleware from './middlewares/request.http.middleware.js';
import apiDocs from './helpers/api.doc.js';
import router from './routers/main.router.js';

const app = express();

app.use(accessHttpMiddleware);

apiDocs(app);

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.use(cors(process.env.CORS_DOMAINS ?? 'localhost'));

app.use(router);

export default app;
