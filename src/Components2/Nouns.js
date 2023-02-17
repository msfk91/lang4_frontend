import { useState } from "react";
import { NounInputButtons } from "./NounInputButtons";
import "./Styles/styles.css"

export function Nouns(props) {
    //let j=[]
    const [ LoadAComplete, setLoadAComplete ] = useState([])    

    return( 
        props.sub_category.nouns.map((noun,index)=>{
            return(
                <div>
                    <div className={props.ShowNouns + " border3 inline" }>
                        <div className={"inline nounDiv" }>
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
    
