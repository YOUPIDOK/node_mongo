import mongoose from 'mongoose';
import { logger } from './modules/logger';
import seeder from './db/seeder/seeder';
import config from './config/config';

mongoose.connect(config.mongoose.url).then(() => {
  logger.info('Connected to MongoDB');
});

seeder
  .seed()
  .then(() => {
    mongoose.connection.close();
    logger.info('Seeding complete');
  })
  .catch((err) => {
    logger.error(err);
  });
