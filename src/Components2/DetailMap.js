import content from "../JSClasses/NounJSClasses/PeopleClass";
import { useState } from "react";
import { NounSubCategory } from "./NounSubCategory";
import "./Styles/styles.css";
import { Details } from "./Details";

export function DetailMap(props) {
  const [ShowDetails, setShowDetails] = useState();

  return props.nounDetails.details.map((b, index) => {
    return (
      <Details
        AutoFill= {props.AutoFill}
        setAutoFill = {props.setAutoFill}
        DeleteFill = {props.DeleteFill}
        setDeleteFill = {props.setDeleteFill}
        
        LoadAComplete={props.LoadAComplete}
        setLoadAComplete={props.setLoadAComplete}
        setLoadTrl={props.setLoadTrl}
        noun={props.noun}
        b={b}
        bindex={index}
        setTrl={props.setTrl}
        Trl={props.Trl}
        HideDetailsMenu={props.HideDetailsMenu}
        NounTrl={props.NounTrl}
        nounDetails={props.nounDetails}
        TrlData={props.TrlData} 
        setTrlData={props.setTrlData}
        LoadTrlData={props.LoadTrlData} 
        setLoadTrlData={props.setLoadTrlData}
        sub_category={props.sub_category}
      />
    );
  });
}
