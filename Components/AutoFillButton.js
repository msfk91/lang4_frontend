import content from "../NounJSClasses/PeopleClass";
import { NounSubCategory } from "./NounSubCategory";
import "../Styles/styles.css"
import { useState, useContext } from "react";
import {allnountitles} from "../NounJSClasses/PeopleClass";
import { ACompleteContext } from "../Context/ACompleteProvider";
import { AutoFillMap } from "./AutoFillMap";

export function AutoFillButton(props) {
    let k=[]
    
    const {AComplete, setAComplete}=useContext(ACompleteContext)
    const ACompleteFunct = (k)=>{
        let m=true
        let r=[]
        console.log("k")
        console.log(k)
        console.log(AComplete)
        AComplete.map((a,index)=> {
                if(k.type == a.type){
                    m=false
                    console.log("Rashad")
                    a = k
                }
                r.push(a)                
        })
        console.log(r)
        if(m){    
            setAComplete((prev)=>[...prev, k])  
        }else{
            setAComplete(r)
        } 
        console.log("fill")
        console.log(AComplete)
    }
    const getAComplete = () => {
        console.log(props.LoadAComplete)
        k = props.LoadAComplete
        ACompleteFunct(k)
    }

    return(
            <div >
                <div> 
                        <div>
                            <button  
                            onClick={()=>[
                                getAComplete()
                            ]}
                            > 
                                Fill
                            </button>
                        </div>     
                        
                        <AutoFillMap
                        NounTrl={props.NounTrl}
                        />                                                                                
                    
                    </div>
                </div>
        
    )

}    //<AutoFillMap
        //NounTrl={props.NounTrl}
        // />