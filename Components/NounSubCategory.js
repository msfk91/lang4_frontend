import { useState } from "react";
import content from "../NounJSClasses/PeopleClass";
import { Nouns } from "./Nouns";
import { NounList } from "./NounList";
import "../Styles/styles.css"


export function NounSubCategory() {
    
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