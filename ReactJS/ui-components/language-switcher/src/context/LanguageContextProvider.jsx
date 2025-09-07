import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageContextProvider = ({children})=>{
    const [language, setLanguage] = useState("en")
    return(
        <LanguageContext.Provider value={{language,setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
export default LanguageContextProvider