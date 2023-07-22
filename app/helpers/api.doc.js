import expressJSDocSwagger from 'express-jsdoc-swagger';
import * as url from 'url';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const options = {
  info: {
    version: '1.0.0',
    title: 'Express API doc with Swagger',
    description: 'Template project for Express REST API',
  },
  baseDir: dirname,
  filesPattern: ['../routers/**/*.js', '../models/**/*.js', '../models/**/*.js'],
  swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE || '/api/docs',
  exposeApiDocs: true,
  apiDocsPath: '/api/docs',
};

/**
 * @param {object} app
 * @returns
 */

export default (app) => expressJSDocSwagger(app)(options);
