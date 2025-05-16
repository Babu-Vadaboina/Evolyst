const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");
const { adminMiddleware } = require("../middlewares/admin");

adminRouter.post("/signin", adminController.signin);
adminRouter.post("/signup", adminController.signup);
adminRouter.get("/adminAllCourses", adminController.getAllCourses);
adminRouter.post(
  "/createCourse",
  adminMiddleware,
  adminController.createCourse
);
adminRouter.put(
  "/updateCourse/:id",
  adminMiddleware,
  adminController.updateCourse
);

module.exports = adminRouter;
