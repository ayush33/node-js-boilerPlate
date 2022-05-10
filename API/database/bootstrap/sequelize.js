import { Sequelize } from 'sequelize';
import * as pg from 'pg';

const sequelize = new Sequelize(
  process.env.DB_NAME, //database
  process.env.DB_USER, //username
  process.env.DB_PASSWORD, //password
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectModule: pg,
  });

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();