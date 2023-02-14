import content from "../NounJSClasses/PeopleClass";
import { useState } from "react";
import { NounSubCategory } from "./NounSubCategory";
import "../Styles/styles.css"
import { Details } from "./Details"

export function DetailMap(props) {    
    const [ShowDetails, setShowDetails]=useState()
    
    return( 
        props.nounDetails.details.map((b, index) => {
            return(
                <Details
                        LoadAComplete={props.LoadAComplete}
                        setLoadAComplete={props.setLoadAComplete}

                        setLoadTrl={props.setLoadTrl}
                        noun={props.noun}
                        b={props.b}
                        setTrl={props.setTrl}
                        Trl={props.Trl}
                        HideDetailsMenu={props.HideDetailsMenu}
                        NounTrl={props.NounTrl}
                        nounDetails={props.nounDetails}
                        />
                    
            )
        })
    )

}