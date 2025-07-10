// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h2>E-Learn</h2>
//       <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="/signup">Login</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // Get current user from localStorage
  const storedUser = localStorage.getItem("currentUser");
  const currentUser = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>E-Learn</h2>
      <ul>
        <li><a href="/">Home</a></li>
        {!currentUser && <li><a href="/signup">Login</a></li>}
      </ul>
      {currentUser && (
        <div className="navbar-user">
          <span className="user-name">{currentUser.email}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
