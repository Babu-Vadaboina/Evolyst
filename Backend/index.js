const express = require("express");

const app = express();
const userRouter = require("./routes/user");
const courseRouter = require("./routes/course");

app.use(express.json());

app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`server is running on the port ${PORT}`);
});
