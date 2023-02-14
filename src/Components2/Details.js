import content from "../JSClasses/NounJSClasses/PeopleClass";
import { useState, useEffect } from "react";
//import { ACompleteContext } from "../Context/ACompleteProvider";
import "./Styles/styles.css";

export function Details(props) {
  let k = [];
  let p = [];
  let nd = [];

  let TrlArr=[];
  let EngArr= [];  
  let t = [];
  let y=[];  
  const [Det, setDet] = useState([]);

  
  useEffect(() => {
    if (props.AutoFill){
      setDet(props.NounTrl);
      props.setAutoFill(false)    
    }
    if (props.DeleteFill){
      setDet('');
      props.setDeleteFill(false)    
    }
    
  }, [props.AutoFill, props.DeleteFill]);
  

  return (
    <div className={props.ShowDetails + " inline "}>
      <div className="inline">{props.b}</div>
      <div className="bottom">
        <input
          type="text"
          placeholder={props.b}
          value={Det}
          name={props.noun.nounTitle}
          detailtype={props.nounDetails.name}
          className={props.noun.nounTitle + props.nounDetails.name}
          onChange={(e) => {
            setDet(e.target.value);
            
            k = document.getElementsByClassName(
              props.noun.nounTitle + props.nounDetails.name
            );

            nd = props.nounDetails.details;
            nd.map((a, index2) => {
              p.push(k[index2].value);
              
              if (p.length > nd.length) {
                p = p.filter((c, index3) => {
                  return index3 >= nd.length;
                });
              }
              props.setLoadTrl(p.toString().replaceAll(",", ",  "));
            });  
            
              t =
                {
                  TranslationArr: p,
                  EnglishArr: props.nounDetails.details,
                  TranslationString: p.toString(),
                  EnglishString: props.nounDetails.details.toString(),
                  NounEnglish: props.noun.nounTitle,
                  NounTranslation: props.NounTrl,
                  Title: props.nounDetails.title,
                  Type: props.nounDetails.name,
                  Sub_Category: props.sub_category.sub_title
                  
                }
              
              props.setLoadTrlData( t )
                          
          }}
        />
      </div>
    </div>
  );
}

