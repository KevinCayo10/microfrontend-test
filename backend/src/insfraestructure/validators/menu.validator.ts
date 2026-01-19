import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const createMenuSchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).required(),
  path: Joi.string().trim().min(1).max(1024).required(),
  status: Joi.boolean().required(),
});

export const updateMenuSchema = Joi.object({
  name: Joi.string().trim().min(1).max(255),
  path: Joi.string().trim().min(1).max(1024),
  status: Joi.boolean(),
}).min(1);

export const idParamSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
});

function sendValidationError(res: Response, error: Joi.ValidationError) {
  const details = error.details.map((d) => ({ message: d.message, path: d.path }));
  return res.status(400).json({ message: 'Validation error', details });
}

export const validateBody = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) return sendValidationError(res, error);
    req.body = value;
    next();
  };
};

export const validateParams = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.params, { abortEarly: false, stripUnknown: true });
    if (error) return sendValidationError(res, error);
    req.params = value as any;
    next();
  };
};
