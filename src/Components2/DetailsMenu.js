import content from "../JSClasses/NounJSClasses/PeopleClass";
import { useState, useContext } from "react";
import { allnountitles } from "../JSClasses/NounJSClasses/PeopleClass";
import "./Styles/styles.css";
import { DetailButtonMap } from "./DetailButtonMap";
//import { AutoFillButton } from "./AutoFillButton";

export function DetailsMenu(props) {
  const [ShowDetails, setShowDetails] = useState("hide");

  return (
    <div>

      <div className={props.ShowDetailButtons}>
        <DetailButtonMap
          noun={props.noun}
          NounTrl={props.NounTrl}
          ShowDetails={ShowDetails}
          setShowDetails={setShowDetails}
          sub_category={props.sub_category}
          
        />
      </div>
    </div>
  );
}

/*
<div className={props.ShowDetailButtons}>
        <AutoFillButton
          LoadAComplete={props.LoadAComplete}
          NounTrl={props.NounTrl}
          AFill={AFill}
          setAFill={setAFill}
        />
      </div>
*/