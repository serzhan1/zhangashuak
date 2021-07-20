const Joi = require('joi')

exports.adviceValidation = (data) => {
  
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    surname: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
    phone: Joi.string().min(4).max(20).required().pattern(/^\+|\d[\s\d\-\(\)]*\d$/),
    message: Joi.string().required()
  })

  return schema.validate(data)
}