import { NounSubCategory } from "./NounSubCategory";
import "./Styles/styles.css"
import { useAuthHook } from "../Hooks/useAuthHook";
import { useEffect } from "react";
import { useLogOutHook } from '../Hooks/useLogoutHook'
import { content } from "../JSClasses/JSClasses";

export function NounCategory() {
    const {user, one_course,} = useAuthHook()
    
    const {logout} = useLogOutHook()
    
    
    useEffect( ()=>{
        JSON.parse(localStorage.getItem("one_course"))        
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