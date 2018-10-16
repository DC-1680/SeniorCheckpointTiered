const router = require('express').Router()
const { Campus, Student } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
	try {
		const campuses = await Campus.findAll({ include: [{ all: true }] })
		res.json(campuses)
	} catch (err) {
		next(err)
	}
});

router.get('/:campusId', async (req, res, next) => {
	try {
		const campus = await Campus.findById(req.params.campusId, { include: [Student] })
		console.log('THIS CAMPUS', campus)
		res.json(campus)
	} catch (err) {
		next(err)
	}
})
