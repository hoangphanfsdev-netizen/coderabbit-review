import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

// The config.json is needed for sequelize-cli, but we will use environment variables for the application connection
const username = process.env[`DB_${env.toUpperCase()}_USERNAME`] as string;
const password = process.env[`DB_${env.toUpperCase()}_PASSWORD`] as string;
const database = process.env[`DB_${env.toUpperCase()}_NAME`] as string;
const host = process.env[`DB_${env.toUpperCase()}_HOST`] as string;
const port = parseInt(process.env[`DB_${env.toUpperCase()}_PORT`] || '5432', 10);
const dialect = (process.env.DB_DIALECT || 'postgres') as 'postgres';

if (!username || !password || !database || !host) {
  throw new Error('Database connection details are not fully configured in environment variables.');
}

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  logging: false, // Set to console.log to see SQL queries
});

export default sequelize;
