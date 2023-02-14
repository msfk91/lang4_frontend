import { useState } from "react";
import { useAuthHook } from "./useAuthHook";

export const useGetCoursesHook = () =>{
//export const useSignInHook = () =>{
    //const [error, seterror] = useState(null)
    
    const {courses} = useAuthHook()
    
    const [isLoading, setisLoading] = useState(null)

    const { dispatch } = useAuthHook()

    const getCourses = async ( userID ) =>{
    //const signin = async (name, username, email, password) =>{
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

    //return{signin, isLoading, error}
    return{getCourses, isLoading}
}