const { userModel } = require("../db");
const express = require("express");

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

const signin = (req, res) => {
  res.json({
    message: "user signin successfully",
  });
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
