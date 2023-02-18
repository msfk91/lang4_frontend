import { useState } from "react";
import { useAuthHook } from "./useAuthHook";
import { useGetTranslationsHook } from "./useGetTranslationsHook";

export const usePostTranslationHook = () =>{
    
    const [isLoading, setisLoading] = useState(null)

    const { dispatch } = useAuthHook()

    const {getTranslations} = useGetTranslationsHook()
    
    const postTranslation = async (
        courseID, userID, 
        EnglishArr, TranslationArr,
        NounEnglish, NounTranslation,
        TranslationCategory, TranslationType,
        TranslationNotes
    ) =>{
    
        setisLoading(true)
        
        
            const response = await fetch("https://lang4-backend.onrender.com/translations",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    courseID, userID, 
                    EnglishArr, TranslationArr,
                    NounEnglish, NounTranslation,
                    TranslationCategory, TranslationType,
                    TranslationNotes
                })
            })
            const json = await response.json()
    
            if (!response.ok){
                setisLoading(false)
            }
    
            if (response.ok){
                
                // save the user to local storage
                localStorage.setItem("one_translation", JSON.stringify(json))
                
                // update auth context
                dispatch({type: "TRANSLATION_SAVED", payload: json})
                
                getTranslations(courseID)

                setisLoading(false)
            }
        
    
    }
    return{postTranslation, isLoading}
}