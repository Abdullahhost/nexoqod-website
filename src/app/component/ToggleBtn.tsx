"use client"

import { useContext, useEffect, useRef } from "react"
import { ToggleContext } from "../context/ToggleContext";
import { handleMouseMove, handleMouseOut } from "../lib/buttonEffect";



const ToggleBtn = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null)
    const { state, dispatch } = useContext(ToggleContext)

    useEffect(() => {
        let handler = (e: any) => {
            if (!toggleRef.current!?.contains(e.target)) {
                if (state.toggleMenu === true) {
                    dispatch({ type: 'TOGGLE_MENU' })
                }
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });


    return (
        <div ref={toggleRef}>
            <div ref={divRef}
                title="Toggle menu"
                onClick={() => dispatch({ type: "TOGGLE_MENU" })}
                style={{ zIndex: "800" }}
                className={`w-[50px] bg-[#40B9C3] overflow-hidden p-3 h-[50px] rounded-full flex flex-col items-center justify-center`}
                onMouseMove={(e) => handleMouseMove(e, divRef, contentRef)}
                onMouseOut={(e) => handleMouseOut(e, divRef, contentRef)}
            >

                <div className={`z-30 pointer-events-none select-none w-full h-full flex flex-col items-center justify-center
                 ${state.toggleMenu === true ? "gap-0" : "gap-[.3rem]"} `} ref={contentRef}>

                    <span className={`w-full h-[.12rem]  bg-black transition-all 
                        ${state.toggleMenu === true ? "w-4/6 rotate-[45deg]" : "rotate-0"}`}>
                    </span>

                    <span className={`w-full h-[.12rem]  bg-black transition-all  
                        ${state.toggleMenu === true ? "w-4/6 -rotate-[45deg]" : "rotate-0"}`}>
                    </span>
                </div>

                <div className="absolute top-0 left-0 w-full h-full">
                    <span className={`test before:rounded-full after:rounded-full w-full h-full`}></span>
                </div>
            </div>
        </div>
    )
}

export default ToggleBtn
