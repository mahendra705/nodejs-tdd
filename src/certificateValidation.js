import Joi from 'joi';

export const validateCertificate = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    recipient: Joi.string().min(3).required(),
    date: Joi.date().required()
  });

  return schema.validate(data);
};
