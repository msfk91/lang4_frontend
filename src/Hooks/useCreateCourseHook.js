import { useState } from "react";
import { useAuthHook } from "./useAuthHook";

export const useCreateCourseHook = () =>{
    
    const [isLoading, setisLoading] = useState(null)

    const { dispatch } = useAuthHook()

    const createCourse = async (courseName, userID, language, topic) =>{
    //const signin = async (name, username, email, password) =>{
        setisLoading(true)
        
        const response = await fetch("/courses/create",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                courseName, userID, 
                language, topic
            })
        })
        console.log({
            courseName: courseName, userID: userID, 
            language: language, topic: topic
        })
        const json = await response.json()

        if (!response.ok){
            setisLoading(false)
        }

        if (response.ok){
            // save the user to local storage
            localStorage.setItem("create_course", JSON.stringify(json))
            
            // update auth context
            dispatch({type: "CREATE_COURSE", payload: json})

            setisLoading(false)
        }
    } 

    //return{signin, isLoading, error}
    return{createCourse, isLoading}
}