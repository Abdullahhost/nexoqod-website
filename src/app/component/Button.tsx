

"use client"

import React from 'react'

type ButtonType = {
    btnName: string,
    curentView: string,
    openTab: (name: string) => void
}

const Button: React.FC<ButtonType> = ({
    btnName,
    openTab,
    curentView
}) => {
    return (
        <div className={`${curentView === btnName ? "bg-[teal]" : "bg-[#76c0c7]"} transition-all bg-[#40B9C3]  text-white py-2 px-4`} onClick={() => openTab(btnName)}>
            <button>{btnName}</button>
        </div>
    )
}

export default Button