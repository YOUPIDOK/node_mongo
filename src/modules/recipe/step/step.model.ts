import mongoose from 'mongoose';
import toJSON from '../../toJSON/toJSON';
import { IStepDoc, IStepModel } from './step.interfaces';

export const stepSchema = new mongoose.Schema<IStepDoc, IStepModel>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
stepSchema.plugin(toJSON);

const Step = mongoose.model<IStepDoc, IStepModel>('Step', stepSchema);

export default Step;
