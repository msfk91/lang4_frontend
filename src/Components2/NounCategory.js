//import content from "../JSClasses/NounJSClasses/PeopleClass";
import People from "../JSClasses/NounJSClasses/PeopleClass";
import { NounSubCategory } from "./NounSubCategory";
import "./Styles/styles.css"
import { useAuthHook } from "../Hooks/useAuthHook";
import { useState, useEffect } from "react";
import { useGetTranslationsHook } from "../Hooks/useGetTranslationsHook";
import { useParams } from "react-router-dom";
import { useLogOutHook } from '../Hooks/useLogoutHook'
import { useGetOneCourseHook } from "../Hooks/useGetOneCourseHook";
import { Decider } from "../JSClasses/JSClasses";
import { content } from "../JSClasses/JSClasses";

export function NounCategory() {
    const {user, courses, one_course, translations} = useAuthHook()
    
    const { courseID } = useParams()
    const {logout} = useLogOutHook()
    const {getOneCourse} = useGetOneCourseHook()
    
    
    useEffect( ()=>{
        const one_course = JSON.parse(localStorage.getItem("one_course"))        
    },[])
    return(
        
        <div className="body3">
            
            <div className='titlediv2'>
                
                <strong className='title'>
                    Lang Build
                </strong>
        
                <div className='myCoursesDiv' 
                onClick={()=>{window.location.replace("http://localhost:3000/mycourses")}}
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
            <div className="container2">

                {one_course && 
                    <div> 
                        <div><strong>{one_course.courseName}</strong></div>
                        <div>By:   { user.user.username}</div>
                    </div>
                }
                
                <h3> 
                    {content.category} 
                </h3>
                
                <NounSubCategory 
                    content = { content }
                />
                
            </div>
        </div>
        
    )

}    

/*
<NounSubCategory 
                    content = { content }
                />

*/