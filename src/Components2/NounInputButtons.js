import content from "../JSClasses/NounJSClasses/PeopleClass";
import {allnountitles} from "../JSClasses/NounJSClasses/PeopleClass";
import { NounSubCategory } from "./NounSubCategory";
import { useState, useEffect } from "react";
import "./Styles/styles.css"
import { DetailsMenu } from "./DetailsMenu"
import { Details } from "./DetailButtonMap";

//export function DetailMenu(props) {
export function NounInputButtons(props) {
    //const [ShowDetailButtons, setShowDetailButtons] =useState('hide')
    let k=[]
    let j=[]
    let u =[]
    let t=[]
    let a=0
    
    
    const ShowDetailsMenu = () =>{
        setShowDetailButtons("nounDiv2")
        setDisabled(true)
    }
    const HideDetailsMenu = () =>{
        setShowDetailButtons("hide")
        setDisabled(!Disabled)
    }
    const [ShowDetailButtons, setShowDetailButtons] =useState('hide')
    const [NounTrl, setNounTrl] =useState()
    const [Disabled, setDisabled] =useState(false)
    useEffect(()=>{
        const translations = JSON.parse(localStorage.getItem("translations"))
        
        translations.map((translation,index)=>{
          if(
            (props.noun.nounTitle == translation.NounEnglish)
          ){
            setNounTrl(translation.NounTranslation.toString())
          }    
        })
        
      },[])
    return( 
            <>
                < >
                    <div >
                        <input type="text" 
                        placeholder={props.noun.nounTitle}
                        size="25"
                        disabled={Disabled}
                        value= { NounTrl }
                        onChange={(e)=>[
                            setNounTrl(e.target.value)
                        ]}
                        />    
                    </div>
                    <div> {NounTrl}</div>
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
                        <DetailsMenu
                        LoadAComplete={props.LoadAComplete}
                        setLoadAComplete={props.setLoadAComplete}
                        noun={props.noun}                        
                        ShowDetailButtons={ShowDetailButtons}
                        NounTrl={NounTrl}
                        sub_category={props.sub_category}
                
                        />
                    </div>
                    
                </>
            </>
        )

}    