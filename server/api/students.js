const router = require('express').Router()
const { Campus, Student } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
	try {
		const students = await Student.findAll({ include: [{ all: true }] })
		res.json(students)
	} catch (err) {
		next(err)
	}
});

router.get('/:studentId', async (req, res, next) => {
	try {
		const student = await Student.findById(req.params.studentId, { include: [Campus] })
		console.log('THIS CAMPUS', student)
		res.json(student)
	} catch (err) {
		next(err)
	}
})

