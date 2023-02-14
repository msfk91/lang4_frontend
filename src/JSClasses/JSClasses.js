import People from "./NounJSClasses/PeopleClass";
import { useGetOneCourseHook } from "../Hooks/useGetOneCourseHook";
import { useAuthHook } from "../Hooks/useAuthHook";

let content =[]
//const {getOneCourse} = useGetOneCourseHook()

const Decider = async (topic, courseID) =>{
    
    if(topic == "People"){
        return content = People
    }

}

export { Decider }
export { content }