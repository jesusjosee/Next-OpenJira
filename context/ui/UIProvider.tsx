import React, { useReducer } from 'react'
import { UIContext, uiReducer } from '.'

export interface UIState {
    sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen : false
}

export const UIProvider = ({children}:{children: React.ReactNode}) => {
    
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  return (
    <UIContext.Provider value={{
        sidemenuOpen: false
    }}>
        { children }
    </UIContext.Provider>
  )
}