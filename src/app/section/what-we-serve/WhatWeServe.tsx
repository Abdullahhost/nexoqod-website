import Image from "next/image"
import style from "./what-weserve.module.css"

import style2 from "../../component/banner/banner.module.css"

import { industryWeServeData } from "@/app/data/industryServeData"



const WhatWeServe = () => {

    const { bg_what_we_serve_section } = style
    return (
        <div className={`${bg_what_we_serve_section} max-width px-0 md:px-12 lg:px-12 py-12 flex items-center justify-center min-w-full min-h-screen`}>

            <div className="max-width">
                <div className='flex items-center flex-col mb-12 justify-center'>

                    <h2 className={`text-[36px] font-bold`}>Industry <span className={`${style2.animated_BG_Text}`}>We Serve</span> </h2>
                    <h4 className='text-[14px] leading-[30px] font-light w-full mx-auto lg:w-[55%] text-center'>Bridge Your Business with the Virtual World</h4>
                </div>

                <div className={`w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4`}>
                    {industryWeServeData.map((sData) => {
                        return <div className="border flex flex-col items-center py-6 px-6 bg-white" key={sData.title}>
                            <Image
                                className="w-[75px]"
                                alt="Servises Logo"
                                src={sData.image}
                                width={5000}
                                height={5000} />

                            <h2 className="my-4">{sData.title}</h2>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default WhatWeServe
