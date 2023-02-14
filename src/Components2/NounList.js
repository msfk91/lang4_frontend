import { useState } from "react";
import content from "../JSClasses/NounJSClasses/PeopleClass";
import "./Styles/styles.css"
import { Nouns } from "./Nouns";

export function NounList(props) {
    const [ShowNouns, setShowNouns] =useState('hide')
    const ShowNounsMenu = () =>{
        setShowNouns("nounDiv2")
    }
    const HideNounsMenu = () =>{
        setShowNouns("hide")
    } 
    return(
        <div>
            <div className="nounsDiv"
            onClick={ShowNounsMenu}
            >
                Show Words    
            </div> 
            <div className="nounsDiv"
            onClick={HideNounsMenu}
            >
                Hide Words    
            </div> 
            <div className={ShowNouns}>
                <Nouns
                ShowNouns={ShowNouns}
                sub_category= { props.sub_category }
                
                />
            </div> 
        </div>
    )

}