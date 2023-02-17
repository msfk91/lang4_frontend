import People from "./NounJSClasses/PeopleClass";

let content =[]
//const {getOneCourse} = useGetOneCourseHook()

const Decider = async (topic) =>{
    
    if(topic === "People"){
        return content = People
    }

}

export { Decider }
export { content }