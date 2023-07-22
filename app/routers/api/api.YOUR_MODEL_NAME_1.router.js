import express from 'express';

import validate from '../../validation/validator.middleware.js';
import createSchema from '../../validation/schemas/YOUR_MODEL_NAME_1.create.schema.js';
import updateSchema from '../../validation/schemas/YOUR_MODEL_NAME_1.update.schema.js';
import controllerHandler from '../../middlewares/controller.midlleware.js';

import { firstController as controller } from '../../controller/api/api.controller.js';

/* the use of "first" keyword to reference the DB table can be confusing */
// TODO : rename "first" to "YOUR_MODEL_NAME_1" for the whole project

const router = express.Router();

router
  .route('/')
/**
   * GET /api/YOUR_MODEL_NAME_1
   * @summary Get all "YOUR_MODEL_NAME_1"
   * @tags YOUR_MODEL_NAME_1
   * @return {[YOUR_MODEL_NAME_1]} 200 - success response - application/json
   */
  .get(controllerHandler(controller.getAll))
/**
   * POST /api/YOUR_MODEL_NAME_1
   * @summary Create a "YOUR_MODEL_NAME_1"
   * @tags YOUR_MODEL_NAME_1
   * @param {InputYOUR_MODEL_NAME_1} request.body.required - YOUR_MODEL_NAME_1 info
   * @return {YOUR_MODEL_NAME_1} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   */
  .post(validate('body', createSchema), controllerHandler(controller.create));

router
  .route('/:id(\\d+)')
  /**
   * GET /api/YOUR_MODEL_NAME_1/{id}
   * @summary Get one YOUR_MODEL_NAME_1
   * @tags YOUR_MODEL_NAME_1
   * @param {number} id.path.required - YOUR_MODEL_NAME_1 identifier
   * @return {YOUR_MODEL_NAME_1} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - YOUR_MODEL_NAME_1 not found - application/json
   */
  .get(controllerHandler(controller.getOne))
  /**
   * PATCH /api/YOUR_MODEL_NAME_1/{id}
   * @summary Update one YOUR_MODEL_NAME_1
   * @tags YOUR_MODEL_NAME_1
   * @param {number} id.path.required - YOUR_MODEL_NAME_1 identifier
   * @param {InputYOUR_MODEL_NAME_1} request.body.required - YOUR_MODEL_NAME_1 info
   * @return {YOUR_MODEL_NAME_1} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - YOUR_MODEL_NAME_1 not found - application/json
   */
  .patch(validate('body', updateSchema), controllerHandler(controller.update))
  /**
   * DELETE /api/YOUR_MODEL_NAME_1/{id}
   * @summary Delete one YOUR_MODEL_NAME_1
   * @tags YOUR_MODEL_NAME_1
   * @param {number} id.path.required - YOUR_MODEL_NAME_1 identifier
   * @return {YOUR_MODEL_NAME_1} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - YOUR_MODEL_NAME_1 not found - application/json
   */
  .delete(controllerHandler(controller.delete));

export default router;
