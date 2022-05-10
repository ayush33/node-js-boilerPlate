'use strict'
const { Schema } = require('../constants/database-schema')
const {
    Roles,
    Gender,
    VerificationStatus,

} = require('../constants/global-constants')

module.exports = function (sequelize, DataTypes) {
    var userentry = sequelize.define(
        Schema.USER_ENTRY,
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: sequelize.literal('gen_random_uuid()'),
                allowNull: false,
                primaryKey: true
            },
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: DataTypes.STRING,
            image: DataTypes.STRING,
            phone: DataTypes.STRING,
            phoneverifiedat: DataTypes.DATE,
            company: DataTypes.STRING,
            oldpasswords: DataTypes.ARRAY(DataTypes.STRING),
            role: DataTypes.ENUM(
                Roles.ADMIN,
                Roles.COMPANY_ADMIN,
                Roles.COMPANY_USER,
                Roles.AGENT,
                Roles.CONTRIBUTOR,
                Roles.MODERATOR
            ),
            gender: DataTypes.ENUM(Gender.FEMALE, Gender.MALE, Gender.OTHERS),
            defaulttfamethod: {
                allowNull: true,
                type: DataTypes.SMALLINT
            },
            wrongentrycount: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            blockedtime: {
                type: DataTypes.DATE,
                allowNull: true
            },
            salt: DataTypes.STRING,
            verifiedstatus: DataTypes.ENUM(
                VerificationStatus.REGISTERED,
                VerificationStatus.EMAIL_CONFIRMED,
                VerificationStatus.ADMIN_APPROVED,
                VerificationStatus.BLOCKED
            ),
            registereddate: DataTypes.DATE,
            sessiontoken: DataTypes.TEXT,
            updatedstatus: DataTypes.STRING,
            recenttimestamp: DataTypes.STRING,

            lastloggedintime: {
                type: DataTypes.DATE
            },

            lastactivedate: {
                type: DataTypes.DATE
            },
        },
        // {
        //   freezeTableName: true,
        //   paranoid: true,
        //   associate: (models) => {
        //     // Roles
        //     userentry.belongsToMany(models[Schema.ROLE], {
        //       // foreignKey: 'datafeedableid',
        //       // constraints: false,
        //       through: {
        //         model: Schema.USERENTRY_ROLE
        //       }
        //     })
        //   }
        // }
    )

    return userentry
}
