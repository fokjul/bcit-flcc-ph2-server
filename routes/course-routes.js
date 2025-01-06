const express = require("express");
//creats a new Express Router instance
const router = express.Router();
const courseControllers = require("../controllers/course-controllers");

//Route to get course details
router.route("/").get(courseControllers.getCourseDetails);

module.exports = router;
