const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser());
app.use(cors());

const PORT = 8080;

let CourseSchema = new mongoose.Schema({
  name: String,
  description: String,
  author: String,
  price: Number,
  img: String,
});
mongoose
  .connect(
    "mongodb+srv://Fatima:bAKHE5IN2imOEtCA@nft-cluster.lkpcrzn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => console.log("connected"));

let CourseModel = mongoose.model("CourseSchema", CourseSchema);
app.use(express.json());

app.get("/api/courses", async (req, res) => {
  let courses = await CourseModel.find({});
  res.send(courses);
});

app.get("/api/courses/:id", async (req, res) => {
  let { id } = req.params;
  let coursesId = await CourseModel.findById(id);
  res.send(coursesId);
});

app.delete("/api/courses/:id", async (req, res) => {
  let { id } = req.params;
  let deletedCourse = await CourseModel.findByIdAndDelete(id);
  res.send(deletedCourse);
});

app.post("/api/courses", async (req, res) => {
  let newCourse = new CourseModel({ ...req.body });
  await newCourse.save();
  res.status(201).send({ message: "created", course: newCourse });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
