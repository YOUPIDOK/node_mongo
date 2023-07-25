import { Model, Document } from 'mongoose';

export interface IStep {
  title: string;
  description: string;
}

export interface IStepDoc extends IStep, Document {}

export interface IStepModel extends Model<IStepDoc> {}

export type CreateStepBody = IStep;
export type UpdateStepBody = Partial<IStep>;
