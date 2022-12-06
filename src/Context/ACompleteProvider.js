import React, { useState, useContext} from "react"

export const ACompleteContext = React.createContext([])

export function ACompleteProvider({children}){
     const [AComplete, setAComplete] = useState([])

     return(
        <ACompleteContext.Provider value={{AComplete, setAComplete}}>
            {children}
        </ACompleteContext.Provider>
     )
} 