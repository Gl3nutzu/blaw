const courseController = require('../controllers/courseController.js');
const router = require('express').Router();

router.post('/addcourse', courseController.addCourse);

module.exports = router;