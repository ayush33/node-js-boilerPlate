// **********************************************************************
// Copyright (C) by Ayush, YYYY
// Personal
// **********************************************************************

// **********************************************************************
//  Purpose: db config file
//  SN  Date       Change Description      Modified By
//  1               Base Version        Ayush Jain
// **********************************************************************

var config = {}
require('dotenv').config()

module.exports = config[process.env.NODE_ENV] = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    seederStorage: 'sequelize',
    migrationStorage: 'sequelize',
    seederStorageTableName: 'system_seeds',
    migrationStorageTableName: 'system_migrations'
  }
}
