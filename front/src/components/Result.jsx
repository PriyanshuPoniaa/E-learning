import React from "react";
import "./Result.css";

const Result = ({ score, total }) => {
  return (
    <div className="result-box">
      <h3>Quiz Result</h3>
      <p>You scored {score} out of {total}</p>
      {score === total ? (
        <p>🎉 Excellent! You got all correct!</p>
      ) : (
        <p>👍 Good try! Keep learning.</p>
      )}
    </div>
  );
};

export default Result;
