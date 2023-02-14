import { useState } from "react";
import { useAuthHook } from "./useAuthHook";

export const useGetTranslationsHook = () =>{
//export const useSignInHook = () =>{
    //const [error, seterror] = useState(null)
    
    //const {one_course} = useAuthHook()
    
    const [isLoading, setisLoading] = useState(true)

    const { dispatch } = useAuthHook()

    const getTranslations = async (courseID) =>{
        if(isLoading){
            setisLoading(false)
            const response = await fetch("/translations/"+courseID)
            const json = await response.json()
    
            if (!response.ok){
                setisLoading(true)
            }
    
            if (response.ok){
                
                // save the user to local storage
                localStorage.setItem("translations", JSON.stringify(json))
                
                // update auth context
                dispatch({type: "SET_TRANSLATIONS", payload: json})
                
                console.log(json)
                setisLoading(true)
            }
        }
    
    }
    return{getTranslations, isLoading}
}