import { Model, Document } from 'mongoose';

export interface INutrition {
  name: string;
  unit: string;
  water: number;
  energ_kcal: number;
  protein: number;
  lipid: number;
  carbohydrt: number;
}

export interface INutritionDoc extends INutrition, Document {}

export interface INutritionModel extends Model<INutritionDoc> {}

export type CreateNutritionBody = Omit<INutrition, 'unit'>;
export type UpdateNutritionBody = Partial<INutrition>;
