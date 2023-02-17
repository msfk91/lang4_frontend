import { NounList } from "./NounList";
import "./Styles/styles.css"
import { useParams } from "react-router-dom";

import { Decider } from "../JSClasses/JSClasses";
import { content } from "../JSClasses/JSClasses";

export function NounSubCategory() {
    //const [content, setcontent] = useState([])
    
    const { courseID } = useParams()
    
    const one_course = JSON.parse(localStorage.getItem("one_course"))
    Decider(one_course.topic, courseID) 
    
    return(    
        content.info.map((sub_category, index)=>{
            return(
                
                    <div style={{textAlign: "center"}}> 
                        <div>
                            <h4>
                                <div style={{textAlign: "left"}}>
                                    {sub_category.sub_title}
                                </div>                                
                            </h4>
                                <div style={{textAlign: "left"}}>
                                    <NounList 
                                    sub_category= { sub_category }
                                    
                                    />
                                </div>
                        </div>
                    </div>   
                
            )
        })
    )

}