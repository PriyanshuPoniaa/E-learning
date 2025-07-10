// In your Express backend (routes/attemptRoutes.js for example)
const express = require("express");
const router = express.Router();
const QuizAttempt = require("../models/QuizAttempt"); // Create this model

router.post("/", async (req, res) => {
  try {
    const newAttempt = new QuizAttempt(req.body);
    await newAttempt.save();
    res.status(201).json(newAttempt);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
