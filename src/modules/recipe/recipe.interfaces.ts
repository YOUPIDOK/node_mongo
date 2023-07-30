import { Model, Document } from 'mongoose';
import { IIngredient } from './ingredient/ingredient.interfaces';
import { IStepModel } from './step/step.interfaces';

export interface IRecipe {
  title: string;
  description: string;
  total_kcal: string;
  image: string;
  author: string;
  publication_date: Date;
  ingredients: Array<IIngredient>;
  steps: Array<IStepModel>;
}

export interface IRecipeDoc extends IRecipe, Document {}

export interface IRecipeModel extends Model<IRecipeDoc> {}

export type QueryRecipeBody = Object;
export type CreateRecipeBody = Omit<IRecipe, 'total_kcal'>;
export type UpdateRecipeBody = Partial<Omit<IRecipe, 'total_kcal'>>;
