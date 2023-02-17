import { useState } from "react";
import { useAuthHook } from "./useAuthHook";

export const useGetCoursesHook = () =>{
    
    const [isLoading, setisLoading] = useState(null)

    const { dispatch } = useAuthHook()

    const getCourses = async ( userID ) =>{

        setisLoading(true)
        
        const response = await fetch("/courses/" + userID)
        const json = await response.json()

        if (!response.ok){
            setisLoading(false)
        }

        if (response.ok){
            // save the user to local storage
            localStorage.setItem("courses", JSON.stringify(json))
            
            // update auth context
            dispatch({type: "SET_ALL_COURSES", payload: json})

            setisLoading(false)
        }
    } 

    return{getCourses, isLoading}
}