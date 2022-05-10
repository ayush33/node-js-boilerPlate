'use strict'


module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("User", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companypolicies: Sequelize.JSON,
      authtoken: Sequelize.TEXT,
      apikey: Sequelize.TEXT,
      companylicensekey: Sequelize.TEXT,
      virustotalapi: Sequelize.STRING,
      created_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable("User")
  }
}
