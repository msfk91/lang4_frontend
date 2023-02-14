import { useState } from "react";
import { useAuthHook } from "./useAuthHook";

export const useSignInHook = () =>{

    const [isLoading, setisLoading] = useState(null)

    const { user, dispatch } = useAuthHook()

    const signin = async (email, password) =>{
        setisLoading(true)
    
        const response = await fetch("/accounts/",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password})
        })

        const json = await response.json()

        if (!response.ok){
            setisLoading(false)
        }

        if (response.ok){
            // save the user to local storage
            localStorage.setItem("user", JSON.stringify(json))
            
            // update auth context
            dispatch({type: "LOGIN", payload: json})

            setisLoading(false)

            console.log("Please")
            console.log(json)
            if(user.status =="success"){
                
            }
            
        }
    } 

    return{signin, isLoading}
}

//window.location.replace("http://localhost:3000/portal")