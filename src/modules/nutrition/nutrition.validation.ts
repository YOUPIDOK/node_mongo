import Joi from 'joi';

export const createNutritionBody = {
  name: Joi.string().required(),
  water: Joi.number().required(),
  energ_kcal: Joi.number().required(),
  protein: Joi.number().required(),
  lipid: Joi.number().required(),
  carbohydrt: Joi.number().required(),
};

export const getNutritions = {
  query: Joi.object().keys({
    search: Joi.string().default('').empty(''),
  }),
};

export default { getNutritions };
