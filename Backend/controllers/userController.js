const { userModel } = require("../db");
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

const purchases = (req, res) => {
  res.json({
    message: "user purchased this courses",
  });
};

module.exports = {
  signup,
  signin,
  purchases,
};
