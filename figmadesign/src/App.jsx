import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Course from "./components/Course";
import DetailTeacher from "./components/DetailTeacher";
import DetailCourse from "./components/DetailCourse";
import Teacher from "./components/Teacher";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Courses"  element={<Course/>} /> */}
        <Route path="/courses/:category" element={<Course />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacherdetail" element={<DetailTeacher />} />
        <Route path="/coursedetail" element={<DetailCourse />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
