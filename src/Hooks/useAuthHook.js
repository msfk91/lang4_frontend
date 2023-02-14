import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";

export const useAuthHook = () => {
    const context = useContext(AuthContext)

    if (!context){
        throw Error("useAuthHook must be used inside the AuthProvider")
    }

    return context
}