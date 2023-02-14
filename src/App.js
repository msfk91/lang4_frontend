import logo from './logo.svg';
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
        <Route path="/" element={<SignIn/>} />
        <Route path="/create_account" element={<CreateAccount/>} />
        <Route path="/mycourses" element={<CoursesPortal/>} />
        <Route path="/create_course" element={<CreateCourse/>} />
        <Route path="/nouns/:courseID" element={<NounCategory/>} />
      </Routes>
      
    
  );
}

export default App;
