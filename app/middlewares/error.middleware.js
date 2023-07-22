/* eslint-disable no-unused-vars */

import logger from '../helpers/logger.js';

// * import and export in one line, the file is used as a "bridge".
export { default as ApiError } from '../errors/api.error.js';

/**
 *  @param {object} err
 *  @param {object} res
 */

export const errorHandler = (err, _, res, next) => {
  const { message } = err;
  let userMessage = message;
  let statusCode = err.infos?.statusCode;

  if (!statusCode || Number.isNaN(Number(statusCode))) {
    statusCode = 500;
  }

  if (statusCode === 500 && res.app.get('env') !== 'development') {
    userMessage = 'Internal Server Error';
  }

  if (statusCode === 500) {
    logger.error(userMessage, err);
  }

  if (res.get('Content-Type')?.includes('html')) {
    res.status(statusCode).render('error', {
      statusCode,
      message: userMessage,
      title: `Error ${statusCode}`,
    });
  } else {
    res.status(statusCode).json({
      status: 'error',
      statusCode,
      message: userMessage,
    });
  }
};
