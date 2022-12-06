import content from "../NounJSClasses/PeopleClass";
import { useState } from "react";
import { NounSubCategory } from "./NounSubCategory";
import "../Styles/styles.css"

export function DetailItem(props) {    
    const [ShowDetails, setShowDetails]=useState()
    
    
    const [i, seti ] =useState()
    return( 
                    <div className={props.ShowDetails + " inline " }>
                        <div className="inline">
                            {props.b}
                        </div>
                        <div className="bottom">
                            <input type="text" placeholder={props.b}
                            defaultValue={props.NounTrl}
                            onChange={(e)=>{
                                console.log(props.nounDetails)
                                console.log(props.nounDetails.details.indexOf(props.b))
                                //i[props.nounDetails.details.indexOf(props.b)] = e.target.value
                                seti( (e.target.value) )
                                //props.setTrl(()=>{ props.Trl[props.nounDetails.details.indexOf(props.b)]=
                                //e.target.value,})
                                props.setTrl( [ props.Trl[props.nounDetails.details.indexOf(props.b)] = i ])
                                console.log(i)
                                
                            }}
                            />
                        </div>
                        
                    </div>
                
            
        
    )

}