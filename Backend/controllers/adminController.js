const { get } = require("mongoose");
const { adminModel, courseModel } = require("../db");
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

const createCourse = async (req, res) => {
  const adminId = req.userId;
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      creatorId: adminId,
    } = req.body;
    const course = await courseModel.create({
      title,
      description,
      price,
      imageUrl,
      creatorId: adminId,
    });
    res.json({
      courseId: course._id,
      message: "course created successfully",
    });
  } catch (err) {
    res.status(403).json({
      message: err.message,
    });
  }
};
const updateCourse = async (req, res) => {
  const adminId = req.userId;
  const { title, description, price, imageUrl } = req.body;

  try {
    const course = await courseModel.updateOne(
      {
        _id: req.params.id,
        creatorId: adminId,
      },
      {
        title,
        description,
        price,
        imageUrl,
      }
    );
    res.json({
      message: "course updated successfully",
      courseId: course._id,
    });
  } catch (err) {
    res.status(403).json({
      message: err.message,
    });
  }
};
const getAllCourses = async (req, res) => {
  const adminId = req.userId;
  try {
    const courses = await courseModel.find({ creatorId: adminId });
    res.json({
      message: "all corses for this admin fetched successfully",
      courses,
    });
  } catch (err) {
    res.status(403).json({
      message: err.message,
    });
  }
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
