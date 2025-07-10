
// import React, { useState } from "react";
// import "./Quiz.css";

// const Quiz = ({ questions = [], onSubmit }) => {
//   const [responses, setResponses] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [score, setScore] = useState(0);

//   const handleOptionChange = (qid, option) => {
//     setResponses({ ...responses, [qid]: option });
//   };

//   const handleSubmit = () => {
//     let points = 0;
//     questions.forEach((q, index) => {
//       if (responses[index] === q.answer) points += 1;
//     });
//     setScore(points);
//     setSubmitted(true);
//     if (onSubmit) onSubmit(points);
//   };

//   const handleScrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="quiz-container">
//       <h3>Quiz</h3>
//       {questions.length === 0 ? (
//         <p>No quiz available for this course.</p>
//       ) : (
//         questions.map((q, index) => (
//           <div key={index} className="question-block">
//             <p className="question">{q.question}</p>
//             {q.options.map((opt, optIndex) => (
//               <label key={optIndex} className="option-label">
//                 <input
//                   type="radio"
//                   name={`question-${index}`}
//                   value={opt}
//                   checked={responses[index] === opt}
//                   onChange={() => handleOptionChange(index, opt)}
//                   disabled={submitted}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         ))
//       )}

//       {questions.length > 0 && !submitted && (
//         <button className="submit-btn" onClick={handleSubmit}>
//           Submit Quiz
//         </button>
//       )}

//       {submitted && (
//         <>
//           <p className="score-text">Your Score: {score} / {questions.length}</p>
//           <button className="scroll-btn" onClick={handleScrollTop}>
//             ⬆ Scroll to Top
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Quiz;
import React, { useState } from "react";
import axios from "axios";
import "./Quiz.css";

const Quiz = ({ questions = [], onSubmit, courseId }) => {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // ✅ Get current logged-in user from localStorage
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const studentName = storedUser?.email || "Anonymous"; // Or use storedUser.name if you have name

  const handleOptionChange = (qid, option) => {
    setResponses({ ...responses, [qid]: option });
  };

  const handleSubmit = async () => {
    let points = 0;
    questions.forEach((q, index) => {
      if (responses[index] === q.answer) points += 1;
    });
    setScore(points);
    setSubmitted(true);
    if (onSubmit) onSubmit(points);

    // Save to backend
    try {
      await axios.post("http://localhost:5000/api/attempts", {
        courseId,
        studentName,
        score: points,
        responses,
      });
      console.log("Attempt saved");
    } catch (error) {
      console.error("Failed to save attempt:", error);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="quiz-container">
      <h3>Quiz</h3>
      {questions.length === 0 ? (
        <p>No quiz available for this course.</p>
      ) : (
        questions.map((q, index) => (
          <div key={index} className="question-block">
            <p className="question">{q.question}</p>
            {q.options.map((opt, optIndex) => (
              <label key={optIndex} className="option-label">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={opt}
                  checked={responses[index] === opt}
                  onChange={() => handleOptionChange(index, opt)}
                  disabled={submitted}
                />
                {opt}
              </label>
            ))}
          </div>
        ))
      )}

      {questions.length > 0 && !submitted && (
        <button className="submit-btn" onClick={handleSubmit}>
          Submit Quiz
        </button>
      )}

      {submitted && (
        <>
          <p className="score-text">Your Score: {score} / {questions.length}</p>
          <button className="scroll-btn" onClick={handleScrollTop}>
            ⬆ Scroll to Top
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
