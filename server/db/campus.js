const db = require('./database')
const Sequelize = require('sequelize')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'http://www.startrek.com/legacy_media/images/200303/tng-148-the-enterprise-prepare/320x240.jpg'
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
    }
})

module.exports = Campus;