const { get } = require("mongoose");
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  try {
    await adminModel.create({
      email,
      password,
      firstname,
      lastname,
    });
  } catch (err) {
    console.log("error in admin signup", err.message);
  }
  res.json({
    id: admin._id,
    message: "admin signup successfully",
  });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({ email, password });
  if (admin) {
    // console.log(admin._id);
    // console.log(admin.email);
    // console.log(admin.password);
    const token = jwt.sign({ id: admin._id }, process.env.JWT_ADMIN_TOKEN);
    res.status(200).json({
      token: token,
      message: "admin signed in successfully",
    });
  } else {
    res.status(403).json({
      message: "invalid credentials",
    });
  }
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
  signup,
  createCourse,
  updateCourse,
  getAllCourses,
};
