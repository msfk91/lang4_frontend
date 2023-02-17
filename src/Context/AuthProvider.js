import React, { createContext, 
    useReducer, useEffect} from "react"

export const AuthContext = createContext([''])

export const authReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return { user: action.payload, 
                courses: null,
                one_course: null, 
                create_course: null,
                translations: null,
                one_translation: null,
                all_translations: null,
            }
        case "LOGOUT":
            return { user: null, 
                courses: null,
                one_course: null,
                create_course: null,
                translations: null,
                one_translation: null,
                all_translations: null,
            }
        case "SET_ALL_COURSES":
            return {user: state.user, 
                courses: action.payload, 
                one_course: state.one_course,
                create_course: null,
                translations: state.translations,
                one_translation: null,
                all_translations: null,
            }
        case "CREATE_COURSE":
            return {user: state.user, 
                courses: state.courses,
                one_course: state.one_course,
                create_course: action.payload,
                translations: state.translations,
                one_translation: null, 
                all_translations: null,
            }
        case "SET_ONE_COURSE":
            return {  user: state.user,
                courses: state.courses,
                one_course: action.payload,
                create_course: null,
                translations: state.translations,
                one_translation: null,
                all_translations: null,  
            }
        case "TRANSLATION_SAVED":
            return {  user: state.user,
                courses: state.courses,
                one_course: state.one_course,
                create_course: null,
                translations: state.translations,
                one_translation: action.payload,
                all_translations: null, 
        }
        case "SET_TRANSLATIONS":
            return {  user: state.user,
                courses: state.courses,
                one_course: state.one_course,
                create_course: null,
                translations: action.payload,
                one_translation: null,
                all_translations: null, 
        }
        case "SET_ALL_TRANSLATIONS":
            return {  user: state.user,
                courses: state.courses,
                one_course: state.one_course,
                create_course: null,
                translations: null,
                one_translation: null,
                all_translations: action.payload, 
        }
        default:
            return state
    }
}

export function AuthProvider({children}){
     
     const [state, dispatch] = useReducer(authReducer,{
        user: null,
        courses: null,
        create_course: null,
        one_course: null,
        translations: null,
        one_translation: null,
        all_translations: null,
     })

    useEffect(()=>{
        
        const user = JSON.parse(localStorage.getItem("user"))
        const courses = JSON.parse(localStorage.getItem("courses"))
        const one_course = JSON.parse(localStorage.getItem("one_course"))
        const translations = JSON.parse(localStorage.getItem("translations"))
        const one_translation = JSON.parse(localStorage.getItem("one_translation"))
        const all_translations = JSON.parse(localStorage.getItem("all_translations"))
        
        if (user){
            dispatch({type:"LOGIN", payload: user})
        }
        if (courses){
            dispatch({type: "SET_ALL_COURSES", payload: courses})
        }
        if (one_course){
            dispatch({type: "SET_ONE_COURSE", payload: one_course})
        }
        if (translations){
            dispatch({type: "SET_TRANSLATIONS", payload: translations})
        }
        if (one_translation){
            dispatch({type: "TRANSLATION_SAVED", payload: one_translation})
        }
        if (all_translations){
            dispatch({type: "SET_ALL_TRANSLATIONS", payload: all_translations})
        }
    },[])
     
     console.log("AuthContext state: ", state)

     return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
     )
}