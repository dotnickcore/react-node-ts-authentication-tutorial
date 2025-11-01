import Joi from 'joi';

export const userCreateSchema = Joi.object({
  given_name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
});
