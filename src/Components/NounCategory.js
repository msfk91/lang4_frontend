import content from "../NounJSClasses/PeopleClass";
import { NounSubCategory } from "./NounSubCategory";
import "../Styles/styles.css"

export function NounCategory() {

    return(
        <div style={{textAlign: "center"}}>
                <h2> 
                    {content.category} 
                </h2>
                <NounSubCategory 
                />
            
        </div>
    )

}    