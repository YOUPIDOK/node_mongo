import httpStatus from 'http-status';
import mongoose from 'mongoose';
import { Request } from 'express';
import Recipe from './recipe.model';
import ApiError from '../errors/ApiError';
import { CreateRecipeBody, UpdateRecipeBody, IRecipeDoc } from './recipe.interfaces';
import { getRandomInt } from '../utils/randInt';
import { Nutrition } from '../nutrition';

/**
 * Create a recipe
 * @param {CreateRecipeBody} recipeBody
 * @returns {Promise<IRecipeDoc>}
 */
export const createRecipe = async (recipeBody: CreateRecipeBody): Promise<IRecipeDoc> => {
  return Recipe.create(recipeBody);
};

/**
 * Query for recipes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const findRecipes = async (): Promise<IRecipeDoc[]> => {
  const recipes = await Recipe.find();
  return recipes;
};

/**
 * Get recipe by id
 * @param {mongoose.Types.ObjectId} id
 * @returns {Promise<IRecipeDoc | null>}
 */
export const getRecipeById = async (id: mongoose.Types.ObjectId): Promise<IRecipeDoc | null> => Recipe.findById(id);

/**
 * Get random recipe
 * @returns {Promise<IRecipeDoc | null>}
 */
export const getRandomRecipe = async (): Promise<IRecipeDoc | null> => {
  const ingredients = await Promise.all(
    Array(getRandomInt(1, 10)).fill(null).map(async () => {
      const count = await Nutrition.count().exec();
      var random = Math.floor(Math.random() * count);
      const nutrition = await Nutrition.findOne().skip(random).exec();
      if (!nutrition) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Nutrition not found');
      }
      return {
        nutrition,
        quantity: getRandomInt(1, 1000),
      };
    })
  );

  const steps = await Promise.all(
    Array(getRandomInt(1, 10)).fill(null).map(async (_, i) => {
      return {
        title: `Etape ${i}`,
        description: `Description de l'étape ${i}`,
      };
    })
  );

  const recipe = new Recipe({
    name: 'Random recipe',
    description: 'Random recipe description',
    image: 'https://picsum.photos/200/300',
    ingredients,
    steps,
  });

  return recipe;
};

/**
 * Update recipe by id
 * @param {mongoose.Types.ObjectId} recipeId
 * @param {UpdateRecipeBody} updateBody
 * @returns {Promise<IRecipeDoc | null>}
 */
export const updateRecipeById = async (
  req: Request,
  recipeId: mongoose.Types.ObjectId,
  updateBody: UpdateRecipeBody
): Promise<IRecipeDoc | null> => {
  const recipe = await getRecipeById(recipeId);
  if (!recipe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
  }

  if (req.user.id !== recipe.author) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }

  Object.assign(recipe, updateBody);
  await recipe.save();
  return recipe;
};

/**
 * Delete recipe by id
 * @param {mongoose.Types.ObjectId} recipeId
 * @returns {Promise<IRecipeDoc | null>}
 */
export const deleteRecipeById = async (req: Request, recipeId: mongoose.Types.ObjectId): Promise<IRecipeDoc | null> => {
  const recipe = await getRecipeById(recipeId);
  if (!recipe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
  }

  if (req.user.id !== recipe.author) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }

  await recipe.deleteOne();
  return recipe;
};
