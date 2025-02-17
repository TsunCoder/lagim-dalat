import * as Joi from 'joi';
import { APP_CONSTANTS } from './constants';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(
      APP_CONSTANTS.NODE_ENV.development,
      APP_CONSTANTS.NODE_ENV.production,
      APP_CONSTANTS.NODE_ENV.test,
    )
    .required(),
  PORT: Joi.number().default(3000),
});
