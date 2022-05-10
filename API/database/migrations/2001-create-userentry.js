'use strict'

const {
    Roles,
    Gender,
    VerificationStatus,
} = require('../../constant/global-constants')
const { Schema } = require('../../constant/database-schema')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(Schema.USER_ENTRY, {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstname: {
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            oldpasswords: {
                type: Sequelize.ARRAY(Sequelize.STRING)
            },
            role: {
                type: Sequelize.ENUM(
                    Roles.ADMIN,
                    Roles.COMPANY_USER,
                )
            },
            gender: {
                type: Sequelize.ENUM(Gender.FEMALE, Gender.MALE, Gender.OTHERS)
            },
            wrongentrycount: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            blockedtime: {
                type: Sequelize.DATE,
                allowNull: true
            },
            salt: {
                type: Sequelize.STRING
            },
            verifiedstatus: {
                type: Sequelize.ENUM(
                    VerificationStatus.REGISTERED,
                    VerificationStatus.EMAIL_CONFIRMED,
                    VerificationStatus.ADMIN_APPROVED,
                    VerificationStatus.BLOCKED
                )
            },
            registereddate: {
                type: Sequelize.DATE,
                allowNull: true
            },
            sessiontoken: {
                type: Sequelize.TEXT
            },
            updatedstatus: {
                type: Sequelize.STRING
            },
            recenttimestamp: {
                type: Sequelize.STRING
            },
            lastloggedintime: {
                type: Sequelize.DATE
            },
            created_at: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: true,
                type: Sequelize.DATE
            },
        })
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable(Schema.USER_ENTRY)
    }
}
