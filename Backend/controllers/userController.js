const { userModel, purchaseModel, courseModel } = require("../db");
const express = require("express");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password, firstname, lastname } = req.body;
  try {
    //console.log("Creating user...");
    await userModel.create({
      name,
      email,
      password,
      firstname,
      lastname,
    });
    //console.log("User created successfully!");
  } catch (err) {
    console.log("error in user signup", err.message);
  }
  //console.log("Sending response...");
  res.json({
    message: "user signup successfully ",
  });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });
  if (user) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_USER_TOKEN);
    res.status(200).json({
      token: token,
      message: "user signin successfully",
    });
  } else {
    res.status(403).json({
      message: "invalid credentials",
    });
  }
};

const createCourse = async (req, res) => {
  const { title, description, price, imageUrl } = req.body;
  const userId = req.userId;
  const course = await courseModel.create({
    title,
    description,
    price,
    imageUrl,
    creatorId: userId,
  });
  res.json({
    message: "user created this courses",
    courseId: course._id,
  });
};

const purchaseCourse = async (req, res) => {
  const { courseId } = req.body;
  const userId = req.userId;
  const purchase = await purchaseModel.create({
    courseId,
    userId,
  });
  res.json({
    message: "user purchased this course",
    purchaseId: purchase._id,
  });
};

const updateCourse = async (req, res) => {
  const { title, description, price, imageUrl } = req.body;
  const userId = req.userId;
  const courseId = req.params.id;
  const course = await courseModel.findone({ _id: courseId });
  if (userId && userId == course.creatorId) {
    const course = await courseModel.updateOne(
      {
        _id: courseId,
        creatorId: userId,
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
  } else {
    res.json({
      message: "you are not authorized to update this course",
    });
  }
};

const deleteCourse = async (reqq, res) => {
  const userId = req.userId;
  const courseId = req.params.id;
  const course = await courseModel.findOne({ _id: courseId });
  if (userId && userId == course.creatorId) {
    const course = await courseModel.deleteOne({ _id: courseId });
    res.json({
      message: "course deleted successfully",
      courseId: course._id,
    });
  } else {
    res.json({
      message: "you are not authorized to delete this course",
    });
  }
};

module.exports = {
  signup,
  signin,
  createCourse,
  purchaseCourse,
  updateCourse,
  deleteCourse,
};
