const db = require("../models");

const Course = db.course;

const addCourse = async (req, res) => {
    let info ={
        Name: req.body.name,
        Location: req.body.location,
        Duration: req.body.duration,
        Available_starts: req.body.starts,
    };
    const course = await Course.create(info);
    res.status(200).send(course);
}

module.exports = { addCourse };