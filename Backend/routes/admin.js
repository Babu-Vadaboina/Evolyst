const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");

adminRouter.post("/signin", adminController.signin);
adminRouter.post("/createCourse", adminController.createCourse);
adminRouter.put("/updateCourse/:id", adminController.updateCourse);
adminRouter.get("/allCourses", adminController.getAllCourses);

module.exports = adminRouter;
