import { useState } from "react";
import { useAuthHook } from "./useAuthHook";

export const useCreateAccountHook = () =>{
//export const useSignInHook = () =>{
    //const [error, seterror] = useState(null)
    const [result, setresult] = useState(null)
    const [status, setstatus] = useState(null)
    const [isLoading, setisLoading] = useState(null)

    const { dispatch } = useAuthHook()

    const createAccount = async (name, username, email, password) =>{
    //const signin = async (name, username, email, password) =>{
        setisLoading(true)
        setresult(null)
        setstatus(null)

        
        const response = await fetch("/accounts/create",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, username, email, password})
        })
        
        const json = await response.json()

        if (!response.ok){
            setisLoading(false)
            setresult(json.error)
            setstatus("error")
        }

        if (response.ok){
            
            setresult(json.message)
            setstatus(json.status)
            
            setisLoading(false)
        }
    } 

    //return{signin, isLoading, error}
    return{createAccount, isLoading, result, status}
}