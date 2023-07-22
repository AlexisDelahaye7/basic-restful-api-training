import express from 'express';

import validate from '../../validation/validator.middleware.js';
import createSchema from '../../validation/schemas/first.create.schema.js';
import updateSchema from '../../validation/schemas/first.update.schema.js';
import controllerHandler from '../../middlewares/controller.midlleware.js';

import { firstController as controller } from '../../controller/api/api.controller.js';

const router = express.Router();

router
  .route('/')
/**
   * GET /api/first
   * @summary Get all "first"
   * @tags Post
   * @return {[Post]} 200 - success response - application/json
   */
  .get(controllerHandler(controller.getAll))
/**
   * POST /api/first
   * @summary Create a "first"
   * @tags Post
   * @param {InputPost} request.body.required - post info
   * @return {Post} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   */
  .post(validate('body', createSchema), controllerHandler(controller.create));
