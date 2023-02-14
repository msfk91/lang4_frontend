import { useAuthHook } from "./useAuthHook"


export const useLogOutHook = () => {
    
    const { dispatch } = useAuthHook()
    
    const logout = () => {
        //remove user from storage
        localStorage.removeItem("user")
        localStorage.removeItem("courses")
        localStorage.removeItem("one_course")
        localStorage.removeItem("translations")
        localStorage.removeItem("one_translation")

        //dispatch logout action
        dispatch({type: "LOGOUT" })

        window.location.replace("http://localhost:3000")
    }

    return {logout}
}