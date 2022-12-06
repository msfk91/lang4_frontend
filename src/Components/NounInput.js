import content from "../NounJSClasses/PeopleClass";
import { NounSubCategory } from "./NounSubCategory";
import { useState, useContext } from "react";
import {allnountitles} from "../NounJSClasses/PeopleClass";
import { ACompleteContext } from "../Context/ACompleteProvider";
import "../Styles/styles.css"
import { DetailMap } from "./DetailMap";

export function NounInput(props) {
    const [ShowDetails, setShowDetails] =useState('hide')
    //const [Trl, setTrl] =useState([])
    const [NounTrl, setNounTrl] =useState()
    const {AComplete, setAComplete}=useContext(ACompleteContext)
    let k=[]
    const getAComplete = () => {
        //k=document.getElementsByTagName("input").length
        //t=document.getElementsByTagName("input")
        //k=document.getElementsByClassName(props.noun.nounTitle+props.noun.nounDetails.name)
        console.log(props.LoadAComplete)
        k = props.LoadAComplete
        setAComplete((prev)=>[...prev, AComplete.push(k) ])
        console.log("AComplete")
        console.log(AComplete)
        console.log(AComplete.length)
        //console.log(AComplete.map( (a, index)=>{
            //return a.title
        //}))
        if(k.length>allnountitles.length){
            k = k.filter((c,index3)=>{
                return index3>=allnountitles.length
            })
        }
        //setAComplete( [...AComplete, k] )
        //props.setAComplete(j)
        console.log("k")
        console.log(k)
        console.log("trillville")
    }
    
        return ( 
                <div className={props.ShowDetailButtons}>
                    <div>
                        <div>
                            <input type="text" 
                            placeholder={props.noun.nounTitle}
                            onChange={(e)=>[
                                setNounTrl(e.target.value)
                            ]}
                            />    
                        </div>
                        <div> {NounTrl}</div>
                        <div>
                            <button className={props.ShowDetailButtons} 
                            onClick={()=>[
                                getAComplete()
                            ]}
                            > 
                                Fill
                            </button>
                        </div>
                            {AComplete.title}     
                            
                            { AComplete ? (
                                    AComplete.map((a,index)=>{
                                        <div> {a.title} </div>
                                    })
                                ):(
                                    <div>  </div>
                                )

                            }
                        
                    </div>
                    <div className={props.ShowDetailButtons}>
                        <DetailMap
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
