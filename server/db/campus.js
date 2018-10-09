const db = require('./database')
const Sequelize = require('sequelize')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Campus;