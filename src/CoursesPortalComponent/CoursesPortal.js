import React, {useEffect, useState} from 'react'
import { useAuthHook } from '../Hooks/useAuthHook'
import { Link } from 'react-router-dom'
import { useLogOutHook } from '../Hooks/useLogoutHook'
import { useGetCoursesHook } from '../Hooks/useGetCoursesHook'
import {Course} from './Course'
import { useGetAllTranslationsHook } from '../Hooks/useGetAllTranslationsHook'
import "./CoursesPortal.css"

export default function CoursesPortal() {
    const {user, courses, one_course} = useAuthHook()
    const {logout} = useLogOutHook()
    const {getCourses} = useGetCoursesHook()
    const {getAllTranslations} = useGetAllTranslationsHook()
    
    useEffect(()=>{

        if(user){
            const userID = user.user._id            
            getCourses(userID)
        }
    },[user])
    return (
        <div>
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
            
            
            <div className='body4'>
                <div className='container3'>
                    <div className='courseTitle'>
                        {user && <div><strong>{user.user.username}</strong></div>}
                    
                        <div>
                            <strong>My Courses</strong> 
                        </div>
                        <div>
                        <Link to="/create_course">+ Add New Course</Link>
                        </div>
                        
                        <br/>
                    </div>    
                    {courses &&
                        <div>
                            <Course 
                            courses={courses}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
