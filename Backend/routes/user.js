const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const { userMiddleware } = require("../middlewares/user");

userRouter.post("/signup", userController.signup);
userRouter.post("/signin", userController.signin);
userRouter.post("/createCourse", userMiddleware, userController.createCourse);
userRouter.post(
  "/purchaseCourse",
  userMiddleware,
  userController.purchaseCourse
);
userRouter.put(
  "/updateCourse/:id",
  userMiddleware,
  userController.updateCourse
);
userRouter.delete(
  "/deleteCourse/:id",
  userMiddleware,
  userController.deleteCourse
);

module.exports = userRouter;
