// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/navbar";
// import AdminDashboard from "../components/AdminDashboard";

// const AdminPanel = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Get current user object from localStorage
//     const storedUser = localStorage.getItem("currentUser");
//     let currentUser = null;
//     if (storedUser) {
//       currentUser = JSON.parse(storedUser);
//     }

//     // Check if no user or not an admin
//     if (!currentUser || currentUser.userType !== "admin") {
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     <>
//       <Navbar />
//       <AdminDashboard />
//     </>
//   );
// };

// export default AdminPanel;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import AdminDashboard from "../components/AdminDashboard";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Now we store only token

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/validate", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.userType !== "admin") {
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
    <>
      <Navbar />
      <AdminDashboard />
    </>
  );
};

export default AdminPanel;
