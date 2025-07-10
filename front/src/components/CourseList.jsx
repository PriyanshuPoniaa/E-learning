
// import React, { useState, useEffect } from "react";
// import "./CourseList.css";
// import CourseContent from "./CourseContent";

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   // Load courses on mount and when tab is focused
//   useEffect(() => {
//     loadCourses();

//     // Add event listener to reload when window gains focus
//     window.addEventListener("focus", loadCourses);

//     return () => {
//       window.removeEventListener("focus", loadCourses);
//     };
//   }, []);

//   const loadCourses = () => {
//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     setCourses(storedCourses);
//   };

//   const handleEnroll = (courseId) => {
//     if (!enrolledCourses.includes(courseId)) {
//       setEnrolledCourses([...enrolledCourses, courseId]);
//       alert("Successfully enrolled in course!");
//     }
//   };

//   const handleViewContent = (course) => {
//     setSelectedCourse(course);
//   };

//   return (
//     <div className="course-list">
//       <h2>Available Courses</h2>
//       <div className="courses">
//         {courses.length === 0 && <p>No courses available yet.</p>}
//         {courses.map((course) => (
//           <div key={course.id} className="course-card">
//             <h3>{course.name}</h3>
//             <p>{course.description}</p>
//             <p>Type: {course.type}</p>

//             <button
//               onClick={() => handleEnroll(course.id)}
//               disabled={enrolledCourses.includes(course.id)}
//             >
//               {enrolledCourses.includes(course.id) ? "Enrolled" : "Enroll"}
//             </button>

//             {enrolledCourses.includes(course.id) && (
//               <button onClick={() => handleViewContent(course)}>
//                 View Content
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {selectedCourse && (
//         <CourseContent
//           course={selectedCourse}
//           onClose={() => setSelectedCourse(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default CourseList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CourseList.css";
import CourseContent from "./CourseContent";

const API_URL = "http://localhost:5000/api/courses";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    loadCourses();

    // Reload when window gains focus
    window.addEventListener("focus", loadCourses);
    return () => window.removeEventListener("focus", loadCourses);
  }, []);

  const loadCourses = async () => {
    try {
      const res = await axios.get(API_URL);
      setCourses(res.data);
    } catch (err) {
      console.error("Error fetching courses", err);
    }
  };

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      alert("Successfully enrolled in course!");
    }
  };

  const handleViewContent = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <div className="courses">
        {courses.length === 0 && <p>No courses available yet.</p>}
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p>Type: {course.type}</p>

            <button
              onClick={() => handleEnroll(course._id)}
              disabled={enrolledCourses.includes(course._id)}
            >
              {enrolledCourses.includes(course._id) ? "Enrolled" : "Enroll"}
            </button>

            {enrolledCourses.includes(course._id) && (
              <button onClick={() => handleViewContent(course)}>
                View Content
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedCourse && (
        <CourseContent
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
};

export default CourseList;
