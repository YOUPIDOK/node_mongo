import mongoose from 'mongoose';
import toJSON from '../toJSON/toJSON';
import { IRecipeDoc, IRecipeModel } from './recipe.interfaces';
import { ingredientSchema } from './ingredient/ingredient.model';
import { stepSchema } from './step/step.model';

const recipeSchema = new mongoose.Schema<IRecipeDoc, IRecipeModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      ref: 'User',
      required: true,
    },
    publication_date: {
      type: Date,
      required: true,
    },
    ingredients: {
      type: [ingredientSchema],
      required: true,
    },
    steps: {
      type: [stepSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

recipeSchema.set('toObject', { virtuals: true });
recipeSchema.set('toJSON', { virtuals: true });

recipeSchema.virtual('total_kcal').get(function () {
  return this.ingredients.reduce((prev, acc) => prev + acc.nutrition.energ_kcal * acc.quantity, 0);
});

// add plugin that converts mongoose to json
recipeSchema.plugin(toJSON);

const Recipe = mongoose.model<IRecipeDoc, IRecipeModel>('Recipe', recipeSchema);

export default Recipe;
