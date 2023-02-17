import { useState, useEffect } from "react";
import "./Styles/styles.css"
import { DetailsMenu } from "./DetailsMenu"

//export function DetailMenu(props) {
export function NounInputButtons(props) {
    
    
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
            (props.noun.nounTitle === translation.NounEnglish)
          ){
            setNounTrl(translation.NounTranslation.toString())
          }
          return index    
        })
        
      },[props.noun.nounTitle])
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
                    <div className={"inline border"}
                    onClick={ShowDetailsMenu}
                    >
                        Show     
                    </div> 
                    <div className={"inline border"}
                    onClick={HideDetailsMenu}    
                    >
                        Hide    
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