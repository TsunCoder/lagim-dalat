import * as Joi from 'joi';
import { APP_CONFIG_CONSTANT } from './constants';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(
      APP_CONFIG_CONSTANT.NODE_ENV.development,
      APP_CONFIG_CONSTANT.NODE_ENV.production,
      APP_CONFIG_CONSTANT.NODE_ENV.test,
    )
    .required(),
  PORT: Joi.number().default(3000),
});
