import express from 'express';

import firstRouter from './api.first.router.js';
import secondRouter from './api.second.router.js';

import { ApiError } from '../../middlewares/error.middleware.js';

import { apiController } from '../../controllers/api/api.controller.js';

const router = express.Router();

router.all('/', apiController.home);

router.use('/first', firstRouter);
router.use('/second', secondRouter);

router.use(() => {
  throw new ApiError('Api Route not found', { statusCode: 404 });
});

export default router;
