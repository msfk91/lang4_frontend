import { useState } from "react";
import { useAuthHook } from "./useAuthHook";

export const useGetAllTranslationsHook = () =>{
    
    const [isLoading, setisLoading] = useState(true)

    const { dispatch } = useAuthHook()

    const getAllTranslations = async (userID) =>{
        if(isLoading){
            setisLoading(false)
            const response = await fetch("/translations/all/"+userID)
            const json = await response.json()
    
            if (!response.ok){
                setisLoading(true)
            }
    
            if (response.ok){
                
                // save the user to local storage
                localStorage.setItem("all_translations", JSON.stringify(json))
                
                // update auth context
                dispatch({type: "SET_ALL_TRANSLATIONS", payload: json})
                
                console.log(json)
                setisLoading(true)
            }
        }
    
    }
    return{getAllTranslations, isLoading}
}