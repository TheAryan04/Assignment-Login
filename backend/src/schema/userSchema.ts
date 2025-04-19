import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name should have at least 3 characters",
    "string.max": "Name should not exceed 50 characters",
    "any.required": "Name is required"
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email cannot be empty",
    "any.required": "Email is required"
  }),
  password: Joi.string().min(6).max(20).required().messages({
    "string.min": "Password should be at least 6 characters long",
    "string.max": "Password should not exceed 20 characters",
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required"
  }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email cannot be empty",
    "any.required": "Email is required"
  }),
  password: Joi.string().min(6).max(20).required().messages({
    "string.min": "Password should be at least 6 characters long",
    "string.max": "Password should not exceed 20 characters",
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required"
  }),
});
