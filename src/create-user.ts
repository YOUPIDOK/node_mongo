import mongoose from 'mongoose';
import { logger } from './modules/logger';
import config from './config/config';
import { User } from './modules/user';
import readline from 'readline';

mongoose.connect(config.mongoose.url).then(async () => {
  logger.info('Connected to MongoDB');
  await createAdmin();
  mongoose.connection.close();
});

const createAdmin = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const name = await new Promise((resolve) => {
    rl.question('Enter your Name \n', (name) => {
      resolve(name);
    });
  });

  const email = await new Promise((resolve) => {
    rl.question('Enter your Email \n', (email) => {
      resolve(email);
    });
  });

  const password = await new Promise((resolve) => {
    rl.question('Enter your Password \n', (password) => {
      resolve(password);
    });
  });

  const role = await new Promise((resolve) => {
    rl.question('Enter your Role (user | admin) \n', (role) => {
      resolve(role);
    });
  });
  
  rl.close();
  
  const admin = new User({
    name,
    email,
    password,
    role,
  });

  if (await User.isEmailTaken(admin.email)) {
    throw 'Email already taken';
  }

  return User.create(admin);
};
