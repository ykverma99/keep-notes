import { createContext, useState } from "react";


export const GlobalContext = createContext()

export const GlobalContextProvider = ({children})=>{
    const [togglemenu, settogglemenu] = useState(false)
    return <GlobalContext.Provider value={{togglemenu,settogglemenu}}>{children}</GlobalContext.Provider>
}

