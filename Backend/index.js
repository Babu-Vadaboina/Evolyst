const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const userRouter = require("./routes/user");
const courseRouter = require("./routes/course");
const adminRouter = require("./routes/admin");

app.use(express.json());

app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

const connectDb = async () => {
  console.log(process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      usenewurlparser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB connected Successfully");
  } catch (err) {
    console.log("error while connecting to DB", err.message);
    process.exit(1);
  }
};
connectDb();

mongoose.connection.on("connected", () => {
  console.log("Mongo DB reconnected");
});
mongoose.connection.on("error", (err) => {
  console.log(err.message);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongo DB disconnected");
});

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});
