import express from 'express';

import firstRouter from './api.YOUR_MODEL_NAME_1.router.js';
import secondRouter from './api.YOUR_MODEL_NAME_2.router.js';

import { ApiError } from '../../middlewares/error.middleware.js';

import { apiController } from '../../controllers/api/api.controller.js';

const router = express.Router();

router.all('/', apiController.home);

router.use('/YOUR_MODEL_NAME_1', firstRouter);
router.use('/YOUR_MODEL_NAME_2', secondRouter);

router.use(() => {
  throw new ApiError('Api Route not found', { statusCode: 404 });
});

export default router;
