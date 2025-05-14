const express = require("express");
const courseRouter = express.Router();
const courseController = require("../controllers/courseController");

courseRouter.get("/allCourses", courseController.getAllCourses);
courseRouter.get("/getCourseById/:id", courseController.getCourseById);

module.exports = courseRouter;
