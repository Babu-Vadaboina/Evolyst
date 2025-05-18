const getAllCourses = async (req, res) => {
  const courses = await courseModel.find({});
  res.json({
    message: "available courses endpoint",
    courses,
  });
};

const getCourseById = async (req, res) => {
  const course = await courseModel.find({ _id: req.params.id });
  res.json({
    message: "get course by id endpoint",
    course,
  });
};

const getUserPurchases = async (req, res) => {
  const userId = req.userId;
  const purchases = await purchaseModel.find({ userId });
  res.json({
    message: "user purchases endpoint",
    purchases,
  });
};

module.exports = {
  getAllCourses,
  getCourseById,
  getUserPurchases,
};
