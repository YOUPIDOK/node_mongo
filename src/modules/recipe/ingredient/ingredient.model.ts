import mongoose from 'mongoose';
import toJSON from '../../toJSON/toJSON';
import { IIngredientDoc, IIngredientModel } from './ingredient.interfaces';
import { nutritionSchema } from '../../nutrition/nutrition.model';

export const ingredientSchema = new mongoose.Schema<IIngredientDoc, IIngredientModel>(
  {
    nutrition: {
      type: nutritionSchema,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ingredientSchema.plugin(toJSON);

const Ingredient = mongoose.model<IIngredientDoc, IIngredientModel>('Ingredient', ingredientSchema);

export default Ingredient;
