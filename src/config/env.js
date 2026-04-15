import dotenv from 'dotenv';

dotenv.config();

const requiredEnv = ['DATABASE_URL'];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const env = {
  databaseUrl: process.env.DATABASE_URL,
};

export default env;
