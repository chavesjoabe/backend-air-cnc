import Joi from "joi";

class Validator {
  validateUserSchema(user) {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().alphanum().required(),
    });

    return schema.validate(user);
  }
}

export default new Validator();
