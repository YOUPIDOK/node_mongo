import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import ApiError from '../errors/ApiError';
import * as nutritionService from './nutrition.service';

export const queryNutritions = catchAsync(async (req: Request, res: Response) => {
  const search = req.query['search'] ?? '';
  if (typeof search !== 'string') {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Search must be a string');
  }
  const nutrition = await nutritionService.queryNutritions(search);
  if (!nutrition) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Nutrition not found');
  }
  res.send(nutrition);
});

export default { queryNutritions };
