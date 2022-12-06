import content from "../NounJSClasses/PeopleClass";
import {allnountitles} from "../NounJSClasses/PeopleClass";
import { NounSubCategory } from "./NounSubCategory";
import { useState, useContext } from "react";
import { ACompleteContext } from "../Context/ACompleteProvider";
import "../Styles/styles.css"
import { NounInput } from "./NounInput"
import { Details } from "./DetailMap";
import { AutoFill } from "./AutoFill"

//export function DetailMenu(props) {
export function NounButtons(props) {
    //const [ShowDetailButtons, setShowDetailButtons] =useState('hide')
    const [ShowAComplete, setShowAComplete] = useState([])
    let k=[]
    let j=[]
    let u =[]
    let t=[]
    let a=0
    
    
    
    
    const ShowDetailsMenu = () =>{
        setShowDetailButtons("nounDiv2")
    }
    const HideDetailsMenu = () =>{
        setShowDetailButtons("hide")
    }
    const [ShowDetailButtons, setShowDetailButtons] =useState('hide')

    return( 
            <>
                < >
                    <div className={"inline" + " border"}
                    onClick={ShowDetailsMenu}
                    >
                        Show2     
                    </div> 
                    <div className={"inline" + " border"}
                    onClick={HideDetailsMenu}    
                    >
                        Hide2    
                    </div>
                    
                           
                    <div className={ShowDetailButtons}>
                        <NounInput
                        LoadAComplete={props.LoadAComplete}
                        setLoadAComplete={props.setLoadAComplete}
                        noun={props.noun}                        
                        />
                    </div>
                    
                </>
            </>
        )

}    