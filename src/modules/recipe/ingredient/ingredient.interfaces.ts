import { Model, Document } from 'mongoose';
import { INutrition } from '@/modules/nutrition/nutrition.interfaces';

export interface IIngredient {
  nutrition: INutrition;
  quantity: number;
}

export interface IIngredientDoc extends IIngredient, Document {}

export interface IIngredientModel extends Model<IIngredientDoc> {}

export type CreateIngredientBody = IIngredient;
export type UpdateIngredientBody = Partial<IIngredient>;
