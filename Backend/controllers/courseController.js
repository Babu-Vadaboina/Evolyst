const getAllCourses = (req, res) => {
  res.json({
    message: "available courses endpoint",
  });
};

const getCourseById = (req, res) => {
  res.json({
    message: "get course by id endpoint",
  });
};

module.exports = {
  getAllCourses,
  getCourseById,
};
