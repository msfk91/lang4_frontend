import content from "../NounJSClasses/PeopleClass";
import { useState } from "react";
import { NounSubCategory } from "./NounSubCategory";
import { Details } from "./Details"
import "../Styles/styles.css"
import DetailButtons from "./DetailButtons";

export function DetailMap(props) {
    

    
    return( 
        props.noun.nounDetails.map((nounDetails, index) => {
            return( 
                <div>          
                    <DetailButtons
                    nounDetails={nounDetails}
                    noun={props.noun}
                    />                    
                </div>
                )
        })
    )            
}

/*

*/