
// import React, { useState } from "react";
// import Quiz from "./Quiz";
// import Result from "./Result";
// import "./CourseContent.css";

// const CourseContent = ({ course, onClose }) => {
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [finalScore, setFinalScore] = useState(null);

//   if (!course) {
//     return (
//       <div className="content-modal">
//         <div className="content-box">
//           <p>Course data not available.</p>
//           <button onClick={onClose}>Close</button>
//         </div>
//       </div>
//     );
//   }

//   const handleQuizSubmit = (score) => {
//     setFinalScore(score);
//   };

//   return (
//     <div className="content-modal">
//       <div className="content-box scrollable-content">
//         <h3>{course.name} - Content</h3>

//         {/* Video Section */}
//         {course.video ? (
//           <div className="course-section">
//             <h4>Introduction Video</h4>
//             <iframe
//               width="100%"
//               height="250"
//               src={course.video}
//               title={course.name}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               style={{ marginTop: "10px", borderRadius: "6px" }}
//             ></iframe>
//           </div>
//         ) : (
//           <p>No video available for this course.</p>
//         )}

//         {/* Notes Section */}
//         {course.notes ? (
//           <div className="course-section">
//             <h4>Lesson PDF</h4>
//             <p>
//               📄{" "}
//               <a href={course.notes} target="_blank" rel="noopener noreferrer">
//                 Download Notes
//               </a>
//             </p>
//           </div>
//         ) : (
//           <p>No notes available for this course.</p>
//         )}

//         {/* Quiz Section */}
//         {course.quiz && course.quiz.length > 0 ? (
//           <>
//             {!showQuiz && (
//               <button onClick={() => setShowQuiz(true)}>Take Quiz</button>
//             )}

//             {showQuiz && finalScore === null && (
//               <Quiz questions={course.quiz} onSubmit={handleQuizSubmit} />
//             )}

//             {finalScore !== null && (
//               <Result score={finalScore} total={course.quiz.length} />
//             )}
//           </>
//         ) : (
//           <p>No quiz available for this course.</p>
//         )}

//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default CourseContent;
import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import "./CourseContent.css";

const CourseContent = ({ course, onClose }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [finalScore, setFinalScore] = useState(null);

  if (!course) {
    return (
      <div className="content-modal">
        <div className="content-box">
          <p>Course data not available.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  const handleQuizSubmit = (score) => {
    setFinalScore(score);
  };

  return (
    <div className="content-modal">
      <div className="content-box scrollable-content">
        <h3>{course.name} - Content</h3>

        {/* Video Section */}
        {course.video ? (
          <div className="course-section">
            <h4>Introduction Video</h4>
            <iframe
              width="100%"
              height="250"
              src={course.video}
              title={course.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ marginTop: "10px", borderRadius: "6px" }}
            ></iframe>
          </div>
        ) : (
          <p>No video available for this course.</p>
        )}

        {/* Notes Section */}
        {course.notes ? (
          <div className="course-section">
            <h4>Lesson PDF</h4>
            <p>
              📄{" "}
              <a href={course.notes} target="_blank" rel="noopener noreferrer">
                Download Notes
              </a>
            </p>
          </div>
        ) : (
          <p>No notes available for this course.</p>
        )}

        {/* Quiz Section */}
        {course.quiz?.length > 0 ? (
          <>
            {!showQuiz && (
              <button onClick={() => setShowQuiz(true)}>Take Quiz</button>
            )}

            {showQuiz && finalScore === null && (
              <Quiz questions={course.quiz} onSubmit={handleQuizSubmit} />
            )}

            {finalScore !== null && (
              <Result score={finalScore} total={course.quiz.length} />
            )}
          </>
        ) : (
          <p>No quiz available for this course.</p>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CourseContent;
