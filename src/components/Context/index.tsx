import React, { createContext, useState } from "react"


export const GlobalContext = createContext({})


export const AppContext = ({children}: any) => {
  const [contextState, setContextState] = useState({})
  const [switchExame, setSwitchExame] = useState(false)

  return (
    <GlobalContext.Provider value={{contextState, setContextState,switchExame,setSwitchExame}}>
      {children}
    </GlobalContext.Provider>
    )
}
