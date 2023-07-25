import { Nutrition } from '../../../modules/nutrition';
import nutrition from './nutrition.json' assert { type: 'json' };

const nutritionSeeder = async () => {
  await Nutrition.deleteMany({});
  await Nutrition.insertMany(nutrition);
};

export default nutritionSeeder;
