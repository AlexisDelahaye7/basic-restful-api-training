/* THIS IS AN EXAMPLE */
// ! Must be updated to fit the app and database constraints
// check https://joi.dev/api/?v=17.4.0 for more details

import Joi from 'joi';

export default Joi.object({
  slug: Joi.string()
    .pattern(/^[^-][a-zA-Z0-9-]+[^-]$/)
    .required(),
  title: Joi.string().required(),
  category_id: Joi.number().integer().min(1).required(),
  excerpt: Joi.string(),
  content: Joi.string(),
}).required();
