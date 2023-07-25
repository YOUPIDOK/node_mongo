import httpStatus from 'http-status';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import catchAsync from '../utils/catchAsync';
import ApiError from '../errors/ApiError';
import * as recipeService from './recipe.service';

export const createRecipe = catchAsync(async (req: Request, res: Response) => {
  const recipe = await recipeService.createRecipe(req.body);
  res.status(httpStatus.CREATED).send(recipe);
});

export const getRecipes = catchAsync(async (req: Request, res: Response) => {
  const result = await recipeService.findRecipes();
  res.send(result);
});

export const getRecipe = catchAsync(async (req: Request, res: Response) => {
  const recipe = await recipeService.getRecipeById(new mongoose.Types.ObjectId(req.params['recipeId']));
  if (!recipe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
  }
  res.send(recipe);
});

export const getRandomRecipe = catchAsync(async (_: Request, res: Response) => {
  const recipe = await recipeService.getRandomRecipe();
  if (!recipe) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, 'error while getting random recipe');
  }
  res.send(recipe);
});

export const updateRecipe = catchAsync(async (req: Request, res: Response) => {
  const recipe = await recipeService.updateRecipeById(req, new mongoose.Types.ObjectId(req.params['recipeId']), req.body);
  res.send(recipe);
});

export const deleteRecipe = catchAsync(async (req: Request, res: Response) => {
  await recipeService.deleteRecipeById(req, new mongoose.Types.ObjectId(req.params['recipeId']));
  res.status(httpStatus.NO_CONTENT).send();
});
