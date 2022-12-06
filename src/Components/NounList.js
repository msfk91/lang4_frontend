import { useState } from "react";
import content from "../NounJSClasses/PeopleClass";
import "../Styles/styles.css"
import { Nouns } from "./Nouns";

export function NounList(props) {
    const [ShowNouns, setShowNouns] =useState('hide')
    const ShowNounsMenu = () =>{
        console.log(props.ShowNouns)
        setShowNouns("nounDiv2")
    }
    const HideNounsMenu = () =>{
        console.log(props.ShowNouns)
        setShowNouns("hide")
    } 
    return(
        <div>
            <div className="nounsDiv"
            onClick={ShowNounsMenu}
            >
                Show Nouns    
            </div> 
            <div className="nounsDiv"
            onClick={HideNounsMenu}
            >
                Hide Nouns    
            </div> 

            <Nouns
            ShowNouns={ShowNouns}
            sub_category= { props.sub_category }
            key={props.sub_category.nouns}
            /> 
        </div>
    )

}