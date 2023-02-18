import { useState } from "react";

import { useAuthHook } from "./useAuthHook";

export const useGetOneCourseHook = () =>{

    //const {courses} = useAuthHook()
    
    const [isLoading, setisLoading] = useState(null)

    const { dispatch } = useAuthHook()

    const getOneCourse = async ( courseID ) =>{
        setisLoading(true)
        
        const response = await fetch("https://lang4-backend.onrender.com/courses/one/" + courseID)
        const json = await response.json()

        if (!response.ok){
            setisLoading(false)
        }

        if (response.ok){
            // save the user to local storage
            localStorage.setItem("one_course", JSON.stringify(json))
            
            // update auth context
            dispatch({type: "SET_ONE_COURSE", payload: json})

            setisLoading(false)
        }
    } 
    return{getOneCourse, isLoading}
}