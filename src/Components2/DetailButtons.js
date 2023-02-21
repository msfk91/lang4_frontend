import React from "react";
import { useState, useEffect } from "react";
import { DetailMap } from "./DetailMap";
import "./Styles/styles.css";
import { useAuthHook } from "../Hooks/useAuthHook";
import { usePostTranslationHook } from "../Hooks/usePostTranslationHook";



export default function DetailButtons(props) {
  
  const {user, one_course} = useAuthHook()
   
  const {postTranslation} = usePostTranslationHook()
  
  const [ShowDetails, setShowDetails] = useState("hide");

  const ShowDetailsMenu = () => {
    setShowDetails("nounDiv2");
  };
  const HideDetailsMenu = () => {
    setShowDetails("hide");
  };
  const [Trl, setTrl] = useState([]);
  const [LoadTrl, setLoadTrl] = useState([]);
  const [Det, setDet] = useState();
  const[TrlData, setTrlData] = useState([]);
  const[LoadTrlData, setLoadTrlData] = useState([]);
  const [Notes, setNotes] = useState('');
  const [AutoFill, setAutoFill] = useState(false);
  const [DeleteFill, setDeleteFill] = useState(false);
  
  useEffect(()=>{
    const translations = JSON.parse(localStorage.getItem("translations"))
    
    translations.map((translation,index)=>{
      if(
        (props.noun.nounTitle === translation.NounEnglish)
        &&
        (props.nounDetails.name === translation.TranslationType)
      ){
        setTrl(translation.TranslationArr.toString())
        setNotes(translation.TranslationNotes)
        const EnglishArr = translation.EnglishArr
        const TranslationArr = translation.TranslationArr
        const NounEnglish = translation.NounEnglish
        const NounTranslation = translation.NounTranslation
        const TranslationCategory = translation.TranslationCategory
        const TranslationType = translation.TranslationType
        const TranslationNotes = translation.TranslationNotes
        const t ={
          EnglishArr, TranslationArr,            
          NounEnglish, NounTranslation, 
          Sub_Category: TranslationCategory, 
          Type: TranslationType, 
          TranslationNotes  
        }
        setLoadTrlData(t)
      }
      const y = []
      return y
    })
    
  },[props.noun.nounTitle, props.nounDetails.name])

  const handleSubmit = () =>{
    const courseID = one_course._id
    const userID = user.user._id
    const EnglishArr = LoadTrlData.EnglishArr
    const TranslationArr = LoadTrlData.TranslationArr
    const NounEnglish = LoadTrlData.NounEnglish
    const NounTranslation = LoadTrlData.NounTranslation
    const TranslationCategory = LoadTrlData.Sub_Category
    const TranslationType = LoadTrlData.Type
    const TranslationNotes = Notes
    postTranslation(
      courseID, userID, 
      EnglishArr, TranslationArr,
      NounEnglish, NounTranslation,
      TranslationCategory, TranslationType,
      TranslationNotes
    )
  }
  
  return (
    <div>
      <div>
        <button className={props.ShowDetailButtons} onClick={ShowDetailsMenu}>
          {props.nounDetails.title}
        </button>
      </div>

      <div className={ShowDetails} >
        
        <div className="border2 btn"
        onClick={HideDetailsMenu}
        >
          Escape
        </div>
        
        <div className="border2 btn" 
        onClick={()=>{setAutoFill(true)} }
        >
          Auto Fill
        </div>
      
        <div className="border2 btn"
        onClick={()=>{setDeleteFill(true)} }
        >
          Delete Fill
        </div>
      
      </div>
      
      
        

      <div className={ShowDetails}>
        <DetailMap
          AutoFill = {AutoFill}
          setAutoFill = {setAutoFill}
          DeleteFill = {DeleteFill}
          setDeleteFill = {setDeleteFill}

          LoadAComplete={props.LoadAComplete}
          setLoadAComplete={props.setLoadAComplete}
          Det={Det}
          setDet={setDet}
          setLoadTrl={setLoadTrl}
          noun={props.noun}
          setTrl={setTrl}
          Trl={Trl}
          HideDetailsMenu={HideDetailsMenu}
          NounTrl={props.NounTrl}
          nounDetails={props.nounDetails}
          TrlData={TrlData} 
          setTrlData={setTrlData}
          LoadTrlData={LoadTrlData} 
          setLoadTrlData={setLoadTrlData}
          sub_category={props.sub_category}
        />
        <div>
          Translation Set Notes (optional)
        </div>
        <textarea 
        rows="4" cols="50"
        onChange={(e)=>[
          setNotes(e.target.value),
          
        ]}
        value={Notes}
        >
        </textarea>
      </div>

      <div className={ShowDetails} onClick={HideDetailsMenu}>
        <div
          className="border2 btn"
          onClick={() => {
              handleSubmit()
              if (LoadTrl.toString() !== "") {
                setTrl(LoadTrl);
              } 
          }}
        >
          Submit
        </div>        
      </div>
      <div 
      className={
        props.noun.nounTitle
        + props.nounDetails.name
        + "Trl"
      }
      >
        {Trl}
      </div>
    </div>
  );
}



/*
<div>{LoadTrlData.Eng[0]}</div>
      <div>{LoadTrlData.Trl[1]}</div>
      <div>{LoadTrlData.Eng[1]}</div>
      <div>{LoadTrlData.Trl[2]}</div>
      <div>{LoadTrlData.Eng[2]}</div>
*/