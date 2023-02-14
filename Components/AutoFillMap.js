import content from "../NounJSClasses/PeopleClass";
import { NounSubCategory } from "./NounSubCategory";
import "../Styles/styles.css"
import { useState, useContext, useEffect } from "react";
import {allnountitles} from "../NounJSClasses/PeopleClass";
import { ACompleteContext } from "../Context/ACompleteProvider";


export function AutoFillMap(props) {
    
    const {AComplete, setAComplete}=useContext(ACompleteContext)
    let r=[]
    const Fill = ()=>{
    
        let empty=[]
        AComplete.map((a,index)=>{
            console.log(a)
            if(a){
                a.info.map((b,index2)=>{
                    b.arr.map((c,index3)=>{
                        if(c){
                            if(c.pofspeech=="noun"){
                                c.v=props.NounTrl
                                //console.log("b")
                                //console.log(b)
                                //console.log("a")
                                //console.log(a)
                                
                            }
                        }
                    })
                })
                r.push(a.info)
            }          
        })

        console.log('r')
        console.log(r)
        r.map((a,index)=>{
            let f=[]
            console.log("doing it")
            console.log(a[0].arr)
            console.log(a[0])
            console.log(a[0].class)
            if(a[index].class==a[index+1].class){
                let g=[]
                a.map((b,index2)=>{
                    b.arr.map((c,index3)=>{
                        console.log(c.v)
                        g.push(c.v)

                    })
                    console.log(g)

                })
            }
        })
    }
    
    useEffect(()=>{
        Fill()
    },[props.NounTrl])

    return(
        AComplete.map((a,index)=>{
            if(index!==0){
                {console.log("AC map")}
                {console.log(a)}
                return(            
                    
                    <div key={a.type}
                    className={"border"}
                    > 
                        {a.title} 
                    </div>
                    
                )
            }
        })     
    )
}
    