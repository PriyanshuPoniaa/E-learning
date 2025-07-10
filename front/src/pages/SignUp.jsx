// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./SignUp.css";

// const SignUp = () => {
//   const [userType, setUserType] = useState("student");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     const newUser = { email, password, userType };
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//     existingUsers.push(newUser);
//     localStorage.setItem("users", JSON.stringify(existingUsers));

//     alert("Signup successful! Please log in.");
//     navigate("/login");
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignUp}>
//           <select
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//             required
//           >
//             <option value="student">Student</option>
//             <option value="admin">Admin</option>
//           </select>

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit">Sign Up</button>
//         </form>
//         <p>
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        email,
        password,
        userType,
      });
      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      {/* Flowers in background */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="flower"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 5}s`,
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="10" fill="#FF69B4" />
            <path
              d="M32 2 L36 16 L50 16 L38 24 L42 38 L32 30 L22 38 L26 24 L14 16 L28 16 Z"
              fill="#FFC0CB"
            />
          </svg>
        </div>
      ))}

      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
