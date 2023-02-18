
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
        <Route path="https://main--legendary-cascaron-c900e7.netlify.app/" element={<SignIn/>} />
        <Route path="https://main--legendary-cascaron-c900e7.netlify.app/create_account" element={<CreateAccount/>} />
        <Route path="https://main--legendary-cascaron-c900e7.netlify.app/mycourses" element={<CoursesPortal/>} />
        <Route path="https://main--legendary-cascaron-c900e7.netlify.app/create_course" element={<CreateCourse/>} />
        <Route path="https://main--legendary-cascaron-c900e7.netlify.app/nouns/:courseID" element={<NounCategory/>} />
      </Routes>
      
    
  );
}

export default App;
