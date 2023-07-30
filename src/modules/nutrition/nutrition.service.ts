import Nutrition from './nutrition.model';
import { INutritionDoc } from './nutrition.interfaces';

/**
 * Query for nutritions
 * @param {string} search
 * @returns {Promise<INutritionDoc[] | null>}
 */
export const queryNutritions = async (search: string): Promise<INutritionDoc[] | null> => {
  const nutritions = await Nutrition.find(search ? { $text: { $search: search } } : {})
    .skip(20)
    .limit(1000)
    .exec();
  return nutritions;
};
