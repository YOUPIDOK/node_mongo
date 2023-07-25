import Nutrition from './nutrition.model';
import { INutritionDoc } from './nutrition.interfaces';

/**
 * Query for nutritions
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<INutritionDoc[] | null>}
 */
export const queryNutritions = async (search: string): Promise<INutritionDoc[] | null> => {
  const nutritions = await Nutrition.find(search ? { $text: { $search: search } } : {})
    .skip(20)
    .limit(1000)
    .exec();
  return nutritions;
};
