const express = require("express");

const app = express();

app.post("user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

app.post("user/signin", function (req, res) {
  res.json({
    message: "login endpoint",
  });
});

app.post("user/purchase", function (req, res) {
  res.json({
    message: "user want to purchase endpoint",
  });
});

app.get("/courses", function (req, res) {
  res.json({
    message: "courses endpoint",
  });
});

app.get("course/purchases", function (req, res) {
  res.json({
    message: "user already purchases endpoint",
  });
});

app.get("/course/:id", function (req, res) {
  message: "course details endpoint";
});

app.listen(3000);
