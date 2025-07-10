// import React, { useState, useEffect, useRef } from "react";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [newCourse, setNewCourse] = useState({
//     name: "",
//     description: "",
//     type: "",
//     video: "",
//     notes: "",
//     quiz: [],
//   });

//   const [newQuizQuestion, setNewQuizQuestion] = useState({
//     question: "",
//     options: ["", "", "", ""],
//     answer: "",
//   });

//   const [editingCourseId, setEditingCourseId] = useState(null);
//   const formRef = useRef(null);

//   // Load courses from localStorage
//   useEffect(() => {
//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     setCourses(storedCourses);
//   }, []);

//   // Save to localStorage when courses change
//   useEffect(() => {
//     localStorage.setItem("courses", JSON.stringify(courses));
//   }, [courses]);

//   // Handle course field changes
//   const handleChange = (e) => {
//     setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
//   };

//   // Handle quiz question text changes
//   const handleQuizQuestionChange = (e) => {
//     setNewQuizQuestion({ ...newQuizQuestion, [e.target.name]: e.target.value });
//   };

//   // Handle quiz options changes
//   const handleQuizOptionChange = (index, value) => {
//     const updatedOptions = [...newQuizQuestion.options];
//     updatedOptions[index] = value;
//     setNewQuizQuestion({ ...newQuizQuestion, options: updatedOptions });
//   };

//   // Add quiz question to newCourse.quiz
//   const handleAddQuizQuestion = () => {
//     if (
//       newQuizQuestion.question &&
//       newQuizQuestion.options.every((opt) => opt.trim() !== "") &&
//       newQuizQuestion.answer
//     ) {
//       const updatedQuiz = [...newCourse.quiz, { ...newQuizQuestion }];
//       setNewCourse({ ...newCourse, quiz: updatedQuiz });

//       setNewQuizQuestion({
//         question: "",
//         options: ["", "", "", ""],
//         answer: "",
//       });
//     } else {
//       alert("Please fill all quiz question fields and options.");
//     }
//   };

//   const handleAddOrUpdateCourse = () => {
//     if (newCourse.name && newCourse.description && newCourse.type) {
//       if (editingCourseId !== null) {
//         // Update existing course
//         const updatedCourses = courses.map((course) =>
//           course.id === editingCourseId ? { ...course, ...newCourse } : course
//         );
//         setCourses(updatedCourses);
//         alert("Course updated successfully!");
//       } else {
//         // Add new course
//         const newId = courses.length ? courses[courses.length - 1].id + 1 : 1;
//         const updatedCourses = [...courses, { id: newId, ...newCourse }];
//         setCourses(updatedCourses);
//         alert("Course added successfully!");
//       }

//       setNewCourse({
//         name: "",
//         description: "",
//         type: "",
//         video: "",
//         notes: "",
//         quiz: [],
//       });
//       setNewQuizQuestion({
//         question: "",
//         options: ["", "", "", ""],
//         answer: "",
//       });
//       setEditingCourseId(null);
//       formRef.current?.scrollIntoView({ behavior: "smooth" });
//     } else {
//       alert("Please fill all required fields!");
//     }
//   };

//   const handleEdit = (course) => {
//     setNewCourse({
//       name: course.name,
//       description: course.description,
//       type: course.type,
//       video: course.video,
//       notes: course.notes,
//       quiz: course.quiz || [],
//     });
//     setNewQuizQuestion({
//       question: "",
//       options: ["", "", "", ""],
//       answer: "",
//     });
//     setEditingCourseId(course.id);
//     formRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleDelete = (id) => {
//     const confirmed = window.confirm("Are you sure you want to delete this course?");
//     if (confirmed) {
//       const updatedCourses = courses.filter((course) => course.id !== id);
//       setCourses(updatedCourses);
//     }
//   };

//   return (
//     <>
//       {/* Bubbles */}
//       <div className="bubble bubble1"></div>
//       <div className="bubble bubble2"></div>
//       <div className="bubble bubble3"></div>
//       <div className="bubble bubble4"></div>
//       <div className="bubble bubble5"></div>

//       <div className="admin-dashboard">
//         <h2>Admin Dashboard</h2>

//         <h3>All Courses</h3>
//         <div className="course-list-admin">
//           {courses.map((course) => (
//             <div key={course.id} className="course-card-admin">
//               <h4>{course.name}</h4>
//               <p>{course.description}</p>
//               <p>Type: {course.type}</p>
//               {course.video && (
//                 <iframe
//                   width="100%"
//                   height="150"
//                   src={course.video}
//                   title={course.name}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   style={{ marginTop: "10px", borderRadius: "6px" }}
//                 ></iframe>
//               )}
//               {course.notes && (
//                 <p>
//                   📄 <a href={course.notes} target="_blank" rel="noopener noreferrer">Download Notes</a>
//                 </p>
//               )}
//               <p>Quiz Questions: {course.quiz?.length || 0}</p>
//               <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
//                 <button
//                   style={{ flex: 1, backgroundColor: "#0077cc", color: "white", border: "none", padding: "5px", borderRadius: "4px", cursor: "pointer" }}
//                   onClick={() => handleEdit(course)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   style={{ flex: 1, backgroundColor: "red", color: "white", border: "none", padding: "5px", borderRadius: "4px", cursor: "pointer" }}
//                   onClick={() => handleDelete(course.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//           {courses.length === 0 && <p>No courses added yet.</p>}
//         </div>

//         <h3 ref={formRef}>{editingCourseId ? "Edit Course" : "Add New Course"}</h3>
//         <div className="add-course-form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Course name"
//             value={newCourse.name}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="description"
//             placeholder="Description"
//             value={newCourse.description}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="type"
//             placeholder="Type (e.g., React, Java)"
//             value={newCourse.type}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="video"
//             placeholder="Video URL (YouTube embed)"
//             value={newCourse.video}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="notes"
//             placeholder="Notes URL (PDF link)"
//             value={newCourse.notes}
//             onChange={handleChange}
//           />

//           <h4>Add Quiz Questions (optional)</h4>
//           <input
//             type="text"
//             name="question"
//             placeholder="Question"
//             value={newQuizQuestion.question}
//             onChange={handleQuizQuestionChange}
//           />
//           {newQuizQuestion.options.map((opt, idx) => (
//             <input
//               key={idx}
//               type="text"
//               placeholder={`Option ${idx + 1}`}
//               value={opt}
//               onChange={(e) => handleQuizOptionChange(idx, e.target.value)}
//             />
//           ))}
//           <input
//             type="text"
//             name="answer"
//             placeholder="Correct Answer"
//             value={newQuizQuestion.answer}
//             onChange={handleQuizQuestionChange}
//           />
//           <button type="button" onClick={handleAddQuizQuestion}>
//             Add Quiz Question
//           </button>

//           <button onClick={handleAddOrUpdateCourse}>
//             {editingCourseId ? "Update Course" : "Add Course"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect, useRef } from "react";
import "./AdminDashboard.css";
import axios from "axios";

const API_URL = "http://localhost:5000/api/courses"; // adjust if different

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    name: "",
    description: "",
    type: "",
    video: "",
    notes: "",
    quiz: [],
  });

  const [newQuizQuestion, setNewQuizQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
    answer: "",
  });

  const [editingCourseId, setEditingCourseId] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(API_URL);
      setCourses(res.data);
    } catch (err) {
      console.error("Error fetching courses", err);
    }
  };

  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleQuizQuestionChange = (e) => {
    setNewQuizQuestion({ ...newQuizQuestion, [e.target.name]: e.target.value });
  };

  const handleQuizOptionChange = (index, value) => {
    const updatedOptions = [...newQuizQuestion.options];
    updatedOptions[index] = value;
    setNewQuizQuestion({ ...newQuizQuestion, options: updatedOptions });
  };

  const handleAddQuizQuestion = () => {
    if (
      newQuizQuestion.question &&
      newQuizQuestion.options.every((opt) => opt.trim() !== "") &&
      newQuizQuestion.answer
    ) {
      const updatedQuiz = [...newCourse.quiz, { ...newQuizQuestion }];
      setNewCourse({ ...newCourse, quiz: updatedQuiz });
      setNewQuizQuestion({ question: "", options: ["", "", "", ""], answer: "" });
    } else {
      alert("Fill all quiz fields");
    }
  };

  const handleAddOrUpdateCourse = async () => {
    if (newCourse.name && newCourse.description && newCourse.type) {
      try {
        if (editingCourseId) {
          await axios.put(`${API_URL}/${editingCourseId}`, newCourse);
          alert("Course updated");
        } else {
          await axios.post(API_URL, newCourse);
          alert("Course added");
        }
        setNewCourse({ name: "", description: "", type: "", video: "", notes: "", quiz: [] });
        setNewQuizQuestion({ question: "", options: ["", "", "", ""], answer: "" });
        setEditingCourseId(null);
        fetchCourses();
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      } catch (err) {
        console.error("Error saving course", err);
      }
    } else {
      alert("Fill all required fields");
    }
  };

  const handleEdit = (course) => {
    setNewCourse({
      name: course.name,
      description: course.description,
      type: course.type,
      video: course.video,
      notes: course.notes,
      quiz: course.quiz || [],
    });
    setNewQuizQuestion({ question: "", options: ["", "", "", ""], answer: "" });
    setEditingCourseId(course._id);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchCourses();
      } catch (err) {
        console.error("Error deleting", err);
      }
    }
  };

  return (
    <>
      {/* Bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>
      <div className="bubble bubble5"></div>

      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>

        <h3>All Courses</h3>
        <div className="course-list-admin">
          {courses.map((course) => (
            <div key={course._id} className="course-card-admin">
              <h4>{course.name}</h4>
              <p>{course.description}</p>
              <p>Type: {course.type}</p>
              {course.video && (
                <iframe
                  width="100%"
                  height="150"
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
              <p>Quiz Questions: {course.quiz?.length || 0}</p>
              <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                <button
                  style={{ flex: 1, backgroundColor: "#0077cc", color: "white", border: "none", padding: "5px", borderRadius: "4px", cursor: "pointer" }}
                  onClick={() => handleEdit(course)}
                >
                  Edit
                </button>
                <button
                  style={{ flex: 1, backgroundColor: "red", color: "white", border: "none", padding: "5px", borderRadius: "4px", cursor: "pointer" }}
                  onClick={() => handleDelete(course._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {courses.length === 0 && <p>No courses yet.</p>}
        </div>

        <h3 ref={formRef}>{editingCourseId ? "Edit Course" : "Add New Course"}</h3>
        <div className="add-course-form">
          <input type="text" name="name" placeholder="Course name" value={newCourse.name} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={newCourse.description} onChange={handleChange} />
          <input type="text" name="type" placeholder="Type (e.g., React)" value={newCourse.type} onChange={handleChange} />
          <input type="text" name="video" placeholder="Video URL" value={newCourse.video} onChange={handleChange} />
          <input type="text" name="notes" placeholder="Notes URL" value={newCourse.notes} onChange={handleChange} />

          <h4>Add Quiz Questions (optional)</h4>
          <input type="text" name="question" placeholder="Question" value={newQuizQuestion.question} onChange={handleQuizQuestionChange} />
          {newQuizQuestion.options.map((opt, idx) => (
            <input key={idx} type="text" placeholder={`Option ${idx + 1}`} value={opt} onChange={(e) => handleQuizOptionChange(idx, e.target.value)} />
          ))}
          <input type="text" name="answer" placeholder="Correct Answer" value={newQuizQuestion.answer} onChange={handleQuizQuestionChange} />
          <button type="button" onClick={handleAddQuizQuestion}>Add Quiz Question</button>

          <button onClick={handleAddOrUpdateCourse}>{editingCourseId ? "Update Course" : "Add Course"}</button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
