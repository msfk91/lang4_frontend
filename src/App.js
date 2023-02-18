
import './App.css';
import {NounCategory} from "./Components2/NounCategory.js"
import SignIn from "./SignInComponents/SignIn"
import {Routes, Route} from "react-router-dom"
import CreateAccount from './CreateAccountComponents/CreateAccount';
//import SignInAndCreate from './SignInAndCreateComponent/SignInAndCreate';
import CreateCourse from './CreateCourseComponent/CreateCourse';
import CoursesPortal from "./CoursesPortalComponent/CoursesPortal"

function App() {
  return (
    
      <Routes>
        <Route path="https://lang4-backend.onrender.com/" element={<SignIn/>} />
        <Route path="https://lang4-backend.onrender.com/create_account" element={<CreateAccount/>} />
        <Route path="https://lang4-backend.onrender.com/mycourses" element={<CoursesPortal/>} />
        <Route path="https://lang4-backend.onrender.com/create_course" element={<CreateCourse/>} />
        <Route path="https://lang4-backend.onrender.com/nouns/:courseID" element={<NounCategory/>} />
      </Routes>
      
    
  );
}

export default App;
