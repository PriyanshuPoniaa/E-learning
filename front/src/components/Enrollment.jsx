import React, { useState } from "react";
import "./Enrollment.css";
import Navbar from "../components/navbar";

const Enrollment = () => {
  const availableCourses = [
    { id: 1, name: "React Basics", description: "Learn basics of React." },
    { id: 2, name: "Python for Beginners", description: "Intro to Python." },
    { id: 3, name: "Data Structures", description: "Learn about arrays, linked lists, and more." },
  ];

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
      alert(`Enrolled in ${course.name} successfully!`);
    } else {
      alert(`Already enrolled in ${course.name}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="enrollment-page">
        <h2>Available Courses for Enrollment</h2>
        <div className="course-list">
          {availableCourses.map((course) => (
            <div key={course.id} className="course-card">
              <h4>{course.name}</h4>
              <p>{course.description}</p>
              <button onClick={() => handleEnroll(course)}>Enroll</button>
            </div>
          ))}
        </div>

        <h3>My Enrolled Courses</h3>
        <ul>
          {enrolledCourses.length === 0 ? (
            <li>No courses enrolled yet.</li>
          ) : (
            enrolledCourses.map((course) => <li key={course.id}>{course.name}</li>)
          )}
        </ul>
      </div>
    </>
  );
};

export default Enrollment;
