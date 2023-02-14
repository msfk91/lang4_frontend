import content from "../JSClasses/NounJSClasses/PeopleClass";
import { useState } from "react";
import { NounSubCategory } from "./NounSubCategory";
import { Details } from "./Details"
import "./Styles/styles.css"
import DetailButtons from "./DetailButtons";
import { useAuthHook } from "../Hooks/useAuthHook";

export function DetailButtonMap(props) {
    const {translations} = useAuthHook()    

    
    return( 
        props.noun.nounDetails.map((nounDetails, index) => {
            return( 
                <div>          
                    <DetailButtons
                    nounDetails={nounDetails}
                    noun={props.noun}
                    NounTrl={props.NounTrl}
                    LoadAComplete={props.LoadAComplete}
                    setLoadAComplete={props.setLoadAComplete}
                    translations = {translations}
                    setAFill={props.setAFill}
                    sub_category={props.sub_category}
                    />                    
                </div>
                )
        })
    )            
}

/*

*/