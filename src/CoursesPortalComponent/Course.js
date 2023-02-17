import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthHook } from '../Hooks/useAuthHook'
import './Course.css'
import { useGetOneCourseHook } from '../Hooks/useGetOneCourseHook'

export function Course() {
    const {courses} = useAuthHook()
    //const courses = props.courses
    const {getOneCourse} = useGetOneCourseHook()

    const urlPicker = (a) =>{
        if(a.topic=== "People"){
            return ("/nouns/"+a._id)
        }
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
                                <Link to={urlPicker(a)}>
                                    <div 
                                    onClick={ async ()=>[
                                        await getOneCourse(a._id)
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
