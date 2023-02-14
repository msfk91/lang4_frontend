import content from "../NounJSClasses/PeopleClass";
import { useState, useContext, useEffect } from "react";
import { ACompleteContext } from "../Context/ACompleteProvider";
import "../Styles/styles.css"

export function Details(props) {    
    let a = 0
    let k = []
    let p =[]
    let j =[]
    let u = []
    let t = []
    let nd=[]
    let value=[]
    let val=[]
    
    const [Det,setDet]=useState()
    
    useEffect(()=>{
        console.log("This kinda sucks")
        setDet(props.NounTrl)
    },[props.NounTrl] )


    const {AComplete, setAComplete}=useContext(ACompleteContext)
    
        return( 
                    <div className={props.ShowDetails + " inline " }>
                        
                        <div className="inline">
                            {props.b}
                        </div>
                        <div className="bottom">
                            <input type="text" placeholder={props.b}
                            value={Det}
                            className={props.noun.nounTitle+props.nounDetails.name}
                            word={props.noun.nounTitle}
                            name={props.noun.nounTitle}
                            onChange={(e)=>{
                                setDet(e.target.value)
                                props.nounDetails.trls = e.target.value
                                console.log(props.nounDetails.trls)
                                console.log(props.nounDetails.details.indexOf(props.b))
                                //i[props.nounDetails.details.indexOf(props.b)] = e.target.value
                                console.log("name attribute")
                                console.log(document.getElementsByName(props.noun.nounTitle).length)
                                k=document.getElementsByName(props.noun.nounTitle)
                                for(a=0; a<k.length; a++ ){
                                    u.push(k[a].value.replace(props.NounTrl,''))
                                    //j.push( )
                                    val = 
                                    { 
                                        arr: k[a].value.split(props.NounTrl),
                                        class: k[a].getAttribute("class")
                                    } 
                                    console.log("val 1")
                                    console.log(val)
                                    let count=0
                                    val.arr.map( (c, index3) =>{
                                        if(c==''){
                                            count= count+1
                                            val.empty = count
                                        }
                                    })
                                    if(val.empty==1){
                                        val.arr = val.arr.map((b,index2)=>{
                                            if(props.b==""){
                                                return props.b={v: props.b,  pofspeech: "noun"}
                                            }
                                            else{
                                                return props.b={v: props.b,  pofspeech: "other"}
                                                
                                            }
                                        })
                                    }
                                    
                                    j.push(val)
                                    console.log("are we there yet")
                                    console.log(val)
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
                                
                                //jmap(j)
                                
                                console.log(setAComplete)
                                props.setLoadAComplete({
                                    id: props.noun.nounTitle+props.nounDetails.name,
                                    type: props.noun.nounTitle,
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
                                console.log(props.LoadAComplete)
                                console.log(j)
                                //console.log(k)
                                //console.log(j)
                                //props.setTrl(()=>{ props.Trl[props.nounDetails.details.indexOf(props.b)]=
                                //e.target.value,})
                                //props.setTrl( [ props.Trl[props.nounDetails.details.indexOf(props.b)] = i ])
                                //props.setTrl(p)
                                
                                //jmap(j)
                            }}
                            />
                            
                        </div>
                    </div>
                
            )

}
