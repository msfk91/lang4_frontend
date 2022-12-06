import React from 'react'
import content from "../NounJSClasses/PeopleClass";
import { useState } from "react";
import { NounSubCategory } from "./NounSubCategory";
import { Details } from "./Details"
import "../Styles/styles.css"

export default function DetailButtons(props) {
    const [ShowDetails, setShowDetails] =useState('hide')

    const ShowDetailsMenu = () =>{
        setShowDetails("nounDiv2")
    }
    const HideDetailsMenu = () =>{
        setShowDetails("hide")
    } 
    const [Trl, setTrl] =useState([])
    const [ LoadTrl, setLoadTrl ] = useState([])
  
    return (
        <div>
            <div>
                        <button className={props.ShowDetailButtons} 
                        onClick={ShowDetailsMenu}
                        > 
                            {props.nounDetails.title}
                        </button>
                    </div>
                    
                    <div className={ ShowDetails }
                    onClick={HideDetailsMenu}
                    >
                        <div className="border2 " >Escape</div>
                    </div>
                    
                    <div className={ShowDetails}>
                    <Details
                        LoadAComplete={props.LoadAComplete}
                        setLoadAComplete={props.setLoadAComplete}
                        
                        setLoadTrl={setLoadTrl}
                        noun={props.noun}
                        
                        setTrl={setTrl}
                        Trl={Trl}
                        HideDetailsMenu={HideDetailsMenu}
                        NounTrl={props.NounTrl}
                        nounDetails={props.nounDetails}
                        />
                    </div>
                    
                    <div className={ ShowDetails }
                    onClick={HideDetailsMenu}
                    >
                        <div className="border2 " 
                        onClick={()=>{
                            if(LoadTrl.toString()!==""){
                                setTrl(LoadTrl)
                            }else(
                                setTrl('')
                            )
                            //setTrl(LoadTrl) 
                        }}>
                            Submit
                        </div>
                    </div>
                    <div>
                        {Trl}
                    </div>

        </div>
    )
}
