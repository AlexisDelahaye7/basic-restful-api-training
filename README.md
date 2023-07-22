# RESTFUL API template

## Introduction

The database version control is managed by sqitch, basic config is done and commands will be written down in migrations/HELPME.md.

## Project logic's tree

### Tree

- Serveur `index.js`
  - Application `./app/app.js`
    - Router `./app/routers/…`
      - Routeur API (/api) `./app/routers/api/api.router.js`
        - Router Catégorie (/api/category/…) `./app/routers/api/api.category.router.js`
          - Validation `./app/validations/validator.middleware.js`
          - Controller Wrapper `./app/middleware/controller.middleware.js`
            - Controller de catégorie `./app/controller/api/category.controller.js`
              - Datamapper de catégorie `./app/datamapper/category.datamapper.js`
        - Router Post (/api/post/…) `./app/routers/api/api.post.router.js`
          - Validation `./app/validations/validator.middleware.js`
          - Controller Wrapper `./app/middleware/controller.middleware.js`
            - Controller de post `./app/controller/api/post.controller.js`
              - Datamapper de post `./app/datamapper/post.datamapper.js`
      - Routeur website (/…) `./app/routers/website/website.controller.js`
        - Controller Wrapper `./app/middleware/controller.middleware.js`
          - Controller de website `./app/controller/main.controller.js`

### Description

#### Helpers

- logger.js: Logger middleware to keep log in ./logs/ folder
- env.load.js: override environment variables with .env file values
- api.doc.js: generate API documentation with express-jsdoc-swagger

#### Middlewares

- request.http.middleware.js: middleware to log following ./app/helpers/logger.js instructions

#### Routers

- main.router.js: Main router. Catch all requests and redirect to API or website router. If needed, catch errors and send them to error handler
  - api.router.js: API router. Catch all requests starting with /api and redirect to desired routes module.
    - api.YOUR_MODEL_NAME_1.router.js: example of sub-router. "first" must be replaced with a relevant name.
    - api.YOUR_MODEL_NAME_2.router.js: example of sub-router. "second" must be replaced with a relevant name.
  - website.router.js: Website router. Catch all requests starting with / and redirect to desired routes module.

#### Errors

- api.error.js : API error handler object constructor.
