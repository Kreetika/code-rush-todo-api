import Joi from "joi";

const CREATE_USER_SCHEMA = Joi.object().keys({
  firstName: Joi.string().max(20).required(),
  email: Joi.string().max(100).required(),
  password: Joi.string().min(8).max(100).required(),
  lastName: Joi.string().max(20).required(),
  phoneNumbers: Joi.array()
    .required()
    .min(0)
    .items(
      Joi.object().keys({
        number: Joi.number().min(1000000000).max(9999999999).required(),
        type: Joi.string().required().valid("home", "cell", "work"),
      })
    ),
});

const UPDATE_USER_SCHEMA = Joi.object().keys({
  firstName: Joi.string().max(20),
  lastName: Joi.string().max(20),
}).min(1);

export function validateUserCreation(req, res, next) {
  try {
    Joi.assert(req.body, CREATE_USER_SCHEMA);

    next();
  } catch (err) {
    next(err);
  }
}

export function validateUserUpdate(req, res, next) {
  try {
    Joi.assert(req.body, UPDATE_USER_SCHEMA);

    next();
  } catch (err) {
    next(err);
  }
}
