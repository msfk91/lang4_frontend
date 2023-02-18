import React, {useState} from 'react'
import "./CreateCourse.css"
import { Link } from 'react-router-dom'
import { useLogOutHook } from '../Hooks/useLogoutHook'
import { useAuthHook } from '../Hooks/useAuthHook'
import { useCreateCourseHook } from '../Hooks/useCreateCourseHook'

export default function CreateCourse() {
  
  const {logout} = useLogOutHook()
  
  const {createCourse, isLoading} = useCreateCourseHook()

  
  const [courseName, setcourseName] = useState([])
  const [language, setlanguage] = useState([])
  const [topic, settopic] = useState({words: "Click Select Button", class:"placeholder", value:""})
  const {user, create_course} = useAuthHook()
  
  const [TopicDropDown, setTopicDropDown] = useState("none")

  const handleSubmit = async (e) => {
    const userID = user.user._id
    await createCourse(courseName, userID, 
      language, topic.value)
  }

  const handleDrop = async (e) => {
    if(TopicDropDown==="none"){
      setTopicDropDown("block")
    }else{
      setTopicDropDown("none")
    }
  }
  return (
    <div className='body'
    onClick={()=>{
      if(TopicDropDown === "block"){
        setTopicDropDown("none")
      }
    }}
    >
      <div>
        <div className='titlediv2'>
                
                <strong className='title'>
                    Lang Build
                </strong>
        
            <div className='myCoursesDiv' 
            onClick={()=>{window.location.replace("/mycourses")}}
            > 
                My Courses
            </div>
            {user && 
                <div className='signOutDiv'
                onClick={()=>{logout()}}
                > 
                        Sign Out   
                </div>
            }
        </div>
        <div >
          <div className='container4'>
              <header>
                <strong>
                  Create Course
                </strong>
              </header>
                
                { create_course.result && 
                    <div className={create_course.result.status}>
                      {create_course.result.message}
                    </div>
                }
              
              <div>
                  <div className='label coursename'>Course Name</div>
                  <div className='description coursename'>
                      (The name of your course )
                  </div>
                    <div className='input coursename'>
                    <input type="text"
                    size="30"
                    placeholder='Course Name'
                    value = {courseName}
                    onChange = {(e)=> setcourseName(e.target.value) }
                    />
                  </div>
              </div>
              <br/>
              <div>
                  <div className='label language'>Foreign Language</div>
                  <div className='description language'>
                      (The language your course will be teaching)
                  </div>
                  <div className='input langauge'>
                    <input type="text"
                    size="30"
                    placeholder='Foreign Language'
                    value = {language}
                    onChange = {(e)=> setlanguage(e.target.value) }
                    />
                  </div>
              </div>
              <br/>
              <div>
                  <div className='label topic'>Topic</div>
                  <div className='description topic'>
                      (The topic your course will be teaching)
                  </div>
                  <div className='description topic2'>
                      (Right now we are only doing People.)
                  </div>
                  
                  <div className='TopicDiv'>
                    <div className='TopicInputDiv'>
                      <div className={topic.class}>
                        {topic.words}
                      </div>
                    </div>
                    <div className='TopicButtonDiv'
                    >
                      <button
                      onClick={()=>{handleDrop()}}
                      > 
                        Select 
                      </button>
                    </div>
                  </div>
                  

                  <div className={TopicDropDown}>
                    <div className="dropdown">
                      <div 
                      className='TopicOption Select'
                      onClick={()=>[settopic({words: "Click Select Button", class:"placeholder", value:""})]}
                      >
                        Select Option Below
                      </div>
                      <div 
                      className='TopicOption'
                      onClick={()=>[settopic({words: "People", class: "topicWords", value:"People"})]}
                      >
                        People
                      </div>
                    </div>
                  </div>
              </div>

              <br/>
              <div className='submit'>
                <button 
                onClick={()=>handleSubmit()}
                disabled={isLoading}
                >
                  Create Course
                </button>
              </div>
              <div>
                  <Link to="/mycourses">My Courses</Link>
              </div>
          </div>
        </div> 
      </div>
    </div> 
  )
}
