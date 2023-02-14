import content from "../NounJSClasses/PeopleClass";
import { useState, useContext } from "react";
import {allnountitles} from "../NounJSClasses/PeopleClass";
import { ACompleteContext } from "../Context/ACompleteProvider";
import "../Styles/styles.css"
import { DetailButtonMap } from "./DetailButtonMap";
import { AutoFillButton } from "./AutoFillButton";

export function Fill_Details(props) {
    const [ShowDetails, setShowDetails] =useState('hide')
    
        return ( 
                <div>
                    
                        
                    
                    <div className={props.ShowDetailButtons}>
                        <AutoFillButton
                        LoadAComplete={props.LoadAComplete}
                        NounTrl={props.NounTrl}
                        />
                    </div>

                    <div className={props.ShowDetailButtons}>
                        <DetailButtonMap
                        LoadAComplete={props.LoadAComplete}
                        setLoadAComplete={props.setLoadAComplete}
                        noun={props.noun}
                        NounTrl={props.NounTrl}
                        ShowDetails={ShowDetails}
                        setShowDetails={setShowDetails}
                        />
                    </div>
                    

                </div>
            )

}    
