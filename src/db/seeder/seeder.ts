import { logger } from '../../modules/logger';
import nutritionSeeder from './nutrition';

const seed = async () => {
  try {
    logger.info('Seeding nutrition...');
    await nutritionSeeder();
    logger.info('Seeding nutrition completed');
  } catch (error) {
    logger.error(error);
  }
};

export default { seed };
