// models/QuizAttempt.js
const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  courseId: String,
  studentName: String, // or studentId if you have login
  score: Number,
  responses: Object,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("QuizAttempt", attemptSchema);
