// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";
// import Navbar from "../components/navbar";
// import learningImg from "../assets/learning.jpg"; // Change path to your actual image

// const courses = [
//   {
//     id: 1,
//     name: "React Basics",
//     description: "Learn basics of React.",
//     type: "Programming",
//     video: "https://www.youtube.com/embed/dGcsHMXbSOA",
//     notes: "https://example.com/react-notes.pdf"
//   },
//   {
//     id: 2,
//     name: "Python for Beginners",
//     description: "Intro to Python.",
//     type: "Programming",
//     video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
//     notes: "https://example.com/python-notes.pdf"
//   },
//   {
//     id: 3,
//     name: "Web Design",
//     description: "Learn to design beautiful web pages.",
//     type: "Design",
//     video: "",
//     notes: ""
//   },
// ];

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <Navbar />
//       <div className="home-container">
//         <div className="home-content">
//           <h1>Welcome to Our E-Learning Platform</h1>
//           <p>Learn, grow, and master new skills with our curated courses.</p>
//           <button onClick={() => navigate("/signup")}>Get Started</button>
//         </div>
//         <div className="home-image">
//           <img src={learningImg} alt="Online Learning" />
//         </div>
//       </div>

//       {/* Available Courses */}
//       <section className="available-courses-section">
//         <h2>Available Courses</h2>
//         <div className="course-list-home">
//           {courses.map((course) => (
//             <div key={course.id} className="course-card-home">
//               <h4>{course.name}</h4>
//               <p>{course.description}</p>
//               <p>Type: {course.type}</p>
//               {course.notes && (
//                 <p>
//                   📄 <a href={course.notes} target="_blank" rel="noopener noreferrer">Download Notes</a>
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact section wrapped in different block */}
//       <section className="contact-section custom-contact-block">
//         <h2>Contact Us</h2>
//         <p>We'd love to hear from you! Fill out the form below or email us at <a href="mailto:support@elearning.com">priyanshuponia@gmail.com</a>.</p>
//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <textarea rows="4" placeholder="Your Message" required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </section>
//     </>
//   );
// };

// export default Home;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/navbar";
import learningImg from "../assets/learning.jpg"; // Use your actual image path

const courses = [
  {
    id: 1,
    name: "React Basics",
    description: "Learn the fundamentals of React and build powerful UIs.",
    type: "Programming",
    video: "https://www.youtube.com/embed/bMknfKXIFA8", // Updated video URL for React
    notes: "https://example.com/react-notes.pdf"
  },
  {
    id: 2,
    name: "Python for Beginners",
    description: "Intro to Python programming language.",
    type: "Programming",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
    notes: "https://example.com/python-notes.pdf"
  },
  {
    id: 3,
    name: "Web Design",
    description: "Learn to design beautiful and responsive web pages.",
    type: "Design",
    video: "https://www.youtube.com/embed/UB1O30fR-EE",
    notes: "https://example.com/web-design-notes.pdf"
  },
  {
    id: 4,
    name: "JavaScript Essentials",
    description: "Master core JavaScript fundamentals for web development.",
    type: "Programming",
    video: "https://www.youtube.com/embed/PkZNo7MFNFg",
    notes: "https://example.com/js-notes.pdf"
  },
  {
    id: 5,
    name: "HTML & CSS Crash Course",
    description: "Quickly learn HTML & CSS to build web pages.",
    type: "Web Development",
    video: "https://www.youtube.com/embed/UB1O30fR-EE",
    notes: "https://example.com/html-css-notes.pdf"
  },
  {
    id: 6,
    name: "Data Structures",
    description: "Understand fundamental data structures.",
    type: "Computer Science",
    video: "https://www.youtube.com/embed/RBSGKlAvoiM",
    notes: "https://example.com/data-structures-notes.pdf"
  },
  {
    id: 7,
    name: "Machine Learning Introduction",
    description: "Get started with Machine Learning concepts and workflows.",
    type: "AI/ML",
    video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    notes: "https://example.com/ml-notes.pdf"
  },
  {
    id: 8,
    name: "Node.js for Beginners",
    description: "Learn backend development with Node.js.",
    type: "Backend",
    video: "https://www.youtube.com/embed/TlB_eWDSMt4",
    notes: "https://example.com/node-notes.pdf"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Our E-Learning Platform</h1>
          <p>Learn, grow, and master new skills with our curated courses.</p>
          <button onClick={() => navigate("/signup")}>Get Started</button>
        </div>
        <div className="home-image">
          <img src={learningImg} alt="Online Learning" />
        </div>
      </div>

      {/* Available Courses */}
      <section className="available-courses-section">
        <h2>Available Courses</h2>
        <div className="course-list-home">
          {courses.map((course) => (
            <div key={course.id} className="course-card-home">
              <h4>{course.name}</h4>
              <p>{course.description}</p>
              <p>Type: {course.type}</p>

              {course.video && (
                <iframe
                  width="100%"
                  height="180"
                  src={course.video}
                  title={course.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ marginTop: "10px", borderRadius: "6px" }}
                ></iframe>
              )}

              {course.notes && (
                <p>
                  📄 <a href={course.notes} target="_blank" rel="noopener noreferrer">Download Notes</a>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact section */}
      <section className="contact-section custom-contact-block">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Fill out the form below or email us at{" "}
          <a href="mailto:priyanshuponia@gmail.com">priyanshuponia@gmail.com</a>.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Home;
