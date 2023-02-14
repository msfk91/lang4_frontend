import content from "../NounJSClasses/PeopleClass";
import {allnountitles} from "../NounJSClasses/PeopleClass";
import { NounSubCategory } from "./NounSubCategory";
import { useState, useContext } from "react";
import { ACompleteContext } from "../Context/ACompleteProvider";
import "../Styles/styles.css"
import { Fill_Details } from "./Fill_Details"
import { Details } from "./DetailButtonMap";
import { AutoFill } from "./AutoFillButton"

//export function DetailMenu(props) {
export function NounInputButtons(props) {
    //const [ShowDetailButtons, setShowDetailButtons] =useState('hide')
    const [ShowAComplete, setShowAComplete] = useState([])
    let k=[]
    let j=[]
    let u =[]
    let t=[]
    let a=0
    
    
    
    
    const ShowDetailsMenu = () =>{
        setShowDetailButtons("nounDiv2")
        setDisabled("true")
    }
    const HideDetailsMenu = () =>{
        setShowDetailButtons("hide")
        setDisabled(!Disabled)
    }
    const [ShowDetailButtons, setShowDetailButtons] =useState('hide')
    const [NounTrl, setNounTrl] =useState()
    const [Disabled, setDisabled] =useState()
    return( 
            <>
                < >
                    <div >
                        <input type="text" 
                        placeholder={props.noun.nounTitle}
                        size="25"
                        disabled={Disabled}
                        onChange={(e)=>[
                            setNounTrl(e.target.value)
                        ]}
                        />    
                    </div>
                    <div key={props.noun} > {NounTrl}</div>
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
                    
                           
                    <div>
                        <Fill_Details
                        LoadAComplete={props.LoadAComplete}
                        setLoadAComplete={props.setLoadAComplete}
                        noun={props.noun}                        
                        ShowDetailButtons={ShowDetailButtons}
                        NounTrl={NounTrl}
                        />
                    </div>
                    
                </>
            </>
        )

}    