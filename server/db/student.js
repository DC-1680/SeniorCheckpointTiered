const db = require('./database')
const Sequelize = require('sequelize')

const Student = db.define('student', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			isEmail: true
		}
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 'http://www.startrek.com/uploads/assets/db_articles/954162785cd417e9df40fdc8dce5e1002a6ffa0e.jpg'
	},
	gpa: {
		type: Sequelize.DECIMAL,
		validate: {
			max: 4.0,
			min: 0.0
		}
	}
})

module.exports = Student;