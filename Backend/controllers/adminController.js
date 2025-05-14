const { get } = require("mongoose");
const { adminModel } = require("../db");

const signin = (req, res) => {
  res.json({
    message: "admin signin endpoint here",
  });
};
const createCourse = (req, res) => {
  res.json({
    message: "admin create course endpoint",
  });
};
const updateCourse = (req, res) => {
  res.json({
    message: "admin update course endpoint",
  });
};
const getAllCourses = (req, res) => {
  res.json({
    message: " admin to fetch all available courses endpoint",
  });
};

module.exports = {
  signin,
  createCourse,
  updateCourse,
  getAllCourses,
};
