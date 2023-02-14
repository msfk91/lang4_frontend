import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthHook } from '../Hooks/useAuthHook'
import './Course.css'
import { useGetOneCourseHook } from '../Hooks/useGetOneCourseHook'
import { useGetTranslationsHook } from '../Hooks/useGetTranslationsHook'


export function Course(props) {
    const {courses, one_course} = useAuthHook()
    //const courses = props.courses
    const {getOneCourse} = useGetOneCourseHook()
    const {getTranslations} = useGetTranslationsHook()
    
    const CourseDecider = async (a)=>{ 
        if(a.topic=="People"){
            await redirect(a)
        }
    }
    const redirect = async(a) =>{
        window.location.href = "http://localhost:3000/nouns/"+a._id
    }
    return (
        courses.map((a,index)=>{
            return(
                <div>
                    <div>
                        <div>
                            <strong>{a.courseName}</strong>
                        </div>
                        <div>
                            <div className='courseLabel language'>Language:</div> 
                            <div className='courseValue language'>{a.language}</div>
                        </div>
                        <div>
                            <div className='courseLabel topic'>Topic:</div> 
                            <div className='courseValue language'>{a.topic}</div>
                    </div>
                        <div>
                            <div>Translation</div>
                            <div className='courseLabel'>Sets Made:</div> 
                            <div className='courseValue'>{a.translation_sets}</div>
                        </div>
                        <div>
                            <div className='EditLink'>
                                <Link to={"/nouns/"+a._id}>
                                    <div 
                                    onClick={ async ()=>[
                                        await getOneCourse(a._id),
                                        //await getTranslations(a._id),
                                        
                                        
                                    ]}>
                                        translate 
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            )
        })
    )
}
