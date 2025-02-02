"use client"

import { createContext, useReducer } from "react";

type StateType = {
    toggleMenu: boolean
}

type ToggleAction = {
    type: "TOGGLE_MENU";
}

type ActionType = ToggleAction;

const INITIAL_STATE = {
    toggleMenu: false
}
export const ToggleContext = createContext<{
    state: StateType,
    dispatch: React.Dispatch<ActionType>
}>({
    state: INITIAL_STATE,
    dispatch: () => { }
});

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "TOGGLE_MENU":
            return {
                ...state,
                toggleMenu: state.toggleMenu === false ? true : false
            }

        default:
            return state
    }
}

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <ToggleContext.Provider value={{ state, dispatch }} >
            {children}
        </ToggleContext.Provider>
    )
}