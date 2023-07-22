import express from 'express';

import apiRouter from './api/api.router.js';
import websiteRouter from './website/website.router.js'; // keep it only if you need to serve front-end

import { errorHandler } from '../middlewares/error.middleware.js';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/', websiteRouter); // keep it only if you need to serve front-end

router.use(errorHandler);

export default router;
