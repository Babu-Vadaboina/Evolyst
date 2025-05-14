const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.post("/signup", userController.signup);
userRouter.post("/signin", userController.signin);
userRouter.get("/purchases", userController.purchases);

module.exports = userRouter;
