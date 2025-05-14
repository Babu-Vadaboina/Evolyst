const express = require("express");
const signup = (req, res) => {
  res.json({
    message: "user signup route",
  });
};

const signin = (req, res) => {
  res.json({
    message: "user signin route",
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
