import { Model, Document } from 'mongoose';
import { QueryResult } from '../../paginate/paginate';
import { INutrition } from '@/modules/nutrition/nutrition.interfaces';

export interface IIngredient {
  nutrition: INutrition;
  quantity: number;
}

export interface IIngredientDoc extends IIngredient, Document {}

export interface IIngredientModel extends Model<IIngredientDoc> {
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}

export type CreateIngredientBody = IIngredient;
export type UpdateIngredientBody = Partial<IIngredient>;
