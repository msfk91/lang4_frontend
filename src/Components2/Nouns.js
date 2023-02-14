import content from "../JSClasses/NounJSClasses/PeopleClass";
import { NounSubCategory } from "./NounSubCategory";
import { Details } from "./DetailButtonMap.js"
import { useState } from "react";
import { NounInputButtons } from "./NounInputButtons";
import "./Styles/styles.css"

export function Nouns(props) {
    //let j=[]
    const [ LoadAComplete, setLoadAComplete ] = useState([])    
    const [ AComplete, setAComplete ] = useState([])
    
    const [ShowDetailButtons, setShowDetailButtons] =useState('hide')

    const ShowDetailsMenu = () =>{
        setShowDetailButtons("inline")
    }
    const HideDetailsMenu = () =>{
        setShowDetailButtons("hide")
    }
    const j = []
    props.sub_category.nouns.map((a,index)=>{ 
        j.push("hide")
    })

    return( 
        props.sub_category.nouns.map((noun,index)=>{
            return(
                <div>
                    <div className={props.ShowNouns +" border3"+ " inline" }>
                        <div className={"inline " + "nounDiv" }>
                            {noun.nounTitle}
                        </div>
                        
                        <NounInputButtons
                        noun={noun}
                        sub_category={props.sub_category}
                        ShowNouns={props.ShowNouns}
                        LoadAComplete={LoadAComplete}
                        setLoadAComplete={setLoadAComplete}
                        
                        />
                    </div>
                </div>
            )
        })
    )
}
    
