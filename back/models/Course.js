const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
});

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  type: String,
  video: String,
  notes: String,
  quiz: [quizSchema],
});

module.exports = mongoose.model("Course", courseSchema);
