
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/navbar";
// import CourseList from "../components/CourseList";
// import "./StudentDashboard.css";

// const StudentDashboard = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Get current user from localStorage
//     const storedUser = localStorage.getItem("currentUser");
//     let currentUser = null;
//     if (storedUser) {
//       currentUser = JSON.parse(storedUser);
//     }

//     // Check if no user or wrong type
//     if (!currentUser || currentUser.userType !== "student") {
//       navigate("/login"); // redirect to login
//     }
//   }, [navigate]);

//   return (
//     <div className="student-dashboard">
//       <Navbar />
//       <CourseList />
//     </div>
//   );
// };

// export default StudentDashboard;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import CourseList from "../components/CourseList";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Now you should store only token

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/validate", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.userType !== "student") {
          navigate("/login");
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="student-dashboard">
      <Navbar />
      <CourseList />
    </div>
  );
};

export default StudentDashboard;
