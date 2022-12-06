import content from "../NounJSClasses/PeopleClass";
import { useState, useContext } from "react";
import { ACompleteContext } from "../Context/ACompleteProvider";
import "../Styles/styles.css"
import { DetailItem } from "./DetailItem";

export function Details(props) {    
    let a = 0
    let k = []
    let p =[]
    let j =[]
    let u = []
    let t = []
    let nd=[]
    const {AComplete, setAComplete}=useContext(ACompleteContext)
    return( 
        props.nounDetails.details.map((b, index) => {
            return( 
                    <div className={props.ShowDetails + " inline " }>
                        
                        <div className="inline">
                            {b}
                        </div>
                        <div className="bottom">
                            <input type="text" placeholder={props.b}
                            defaultValue={props.NounTrl}
                            className={props.noun.nounTitle+props.nounDetails.name}
                            word={props.noun.nounTitle}
                            name={props.noun.nounTitle}
                            onChange={(e)=>{
                                props.nounDetails.trls = e.target.value
                                //props.SubmitTrl(props.nounDetails.name)
                                console.log(props.nounDetails.trls)
                                console.log(props.nounDetails.details.indexOf(b))
                                //i[props.nounDetails.details.indexOf(props.b)] = e.target.value
                                console.log("name attribute")
                                console.log(document.getElementsByName(props.noun.nounTitle).length)
                                k=document.getElementsByName(props.noun.nounTitle)
                                for(a=0; a<k.length; a++ ){
                                    u.push(k[a].value.replace(props.NounTrl,''))
                                    j.push(k[a].value.split(props.NounTrl))                                   
                                    if(j.length>nd.length){
                                        j = j.filter((c,index3)=>{
                                            return index3>=nd.length
                                        })
                                    }
                                    if(u.length>nd.length){
                                        u = u.filter((c,index3)=>{
                                            return index3>=nd.length
                                        })
                                    }
                                    
                                }
                                
                                
                                console.log(setAComplete)
                                props.setLoadAComplete({
                                    title: u.toString().replaceAll(",",",  "), 
                                    info: j
                                })
                                
                               
                                console.log( "lame")
                                console.log(props.LoadAComplete)

                                console.log("keep working")
                                console.log(props.setLoadAComplete)
                                nd=props.nounDetails.details
                                console.log(props.noun.nounTitle)
                                console.log(document.getElementsByClassName(props.noun.nounTitle+props.nounDetails.name))
                                k=document.getElementsByClassName(props.noun.nounTitle+props.nounDetails.name)
                                t=document.getElementsByTagName("input")
                                
                                console.log("")
                                console.log(u)
                                nd.map((a,index2)=>{
                                    p.push(k[index2].value)
                                    //u.push(k[index2].value.replace(props.NounTrl,''))
                                    //j.push(k[index2].value.split(props.NounTrl))                                   
                                    if(p.length>nd.length){
                                        p = p.filter((c,index3)=>{
                                            return index3>=nd.length
                                        })
                                    }
                                    props.setLoadTrl(p.toString().replaceAll(",",",  "))
                                    
                                    if(j.length==nd.length){
                                        j = j.filter((c,index3)=>{
                                            return index3>=nd.length
                                        })
                                    }
                                    if(u.length == nd.length){
                                        u = u.filter((c,index3)=>{
                                            return index3>=nd.length
                                        })
                                    }
                                })
                                console.log(p)
                                console.log(j)
                                console.log(u)
                                //props.setLoadAComplete(
                                {
                                    //title: u.toString().replaceAll(",",",  "), 
                                    //info: j
                                }
                                //)
                                
                                //t.push(props.LoadAComplete)
                                //props.setAComplete(t)
                                console.log("getting it I think")
                                
                                
                                //console.log(k)
                                //console.log(j)
                                //props.setTrl(()=>{ props.Trl[props.nounDetails.details.indexOf(props.b)]=
                                //e.target.value,})
                                //props.setTrl( [ props.Trl[props.nounDetails.details.indexOf(props.b)] = i ])
                                //props.setTrl(p)
                                
                                
                            }}
                            />
                            
                        </div>
                    </div>
                
            )
        })
    )

}
/*

                        <DetailItem
                        HideDetailsMenu={props.HideDetailsMenu}
                        setTrl={props.setTrl}
                        Trl={props.Trl}
                        j={props.j}
                        setj={props.setj}
                        b={b}
                        ShowDetails={props.ShowDetails}
                        NounTrl={props.NounTrl}
                        nounDetails={props.nounDetails}
                        />
*/
