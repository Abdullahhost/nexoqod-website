
// "use client"



// const OurSolution = () => {

// 
//     return (
//         <div className='max-width min-h-screen py-12 flex items-center flex-col gap-4 my-24'>


//             <div>

//             </div>
//         </div>
//     )
// }

// export default OurSolution



"use client"


import style from "../../component/banner/banner.module.css"
import { useState } from 'react'
import Image from 'next/image'

import Button from '@/app/component/Button'
import { whatWeProvide } from '@/app/data/whatweprovidedata'

const OurSolution = () => {
    const { animated_BG_Text, gradiant_bg_one, gradiant_bg_two } = style
    const allButton: string[] = ['Business', 'Blockchain', 'Hospitality', 'E-Commerce', 'Healthcare']

    const [currentview, setCurrentView] = useState<string>("Business")


    const openTab = (name: string) => {
        setCurrentView(name)
    }
    return (
        <div className=" bg-[#f9fcff] min-h-screen py-6 md:p-12 lg:px-24">
            <div className="max-width">

                <div className="flex px-0 flex-col items-center justify-center gap-1 ">
                    <div className='flex items-center flex-col my-3 justify-center'>

                        <h2 className={`my-3 text-[36px] font-bold`}>Our <span className={`${animated_BG_Text}`}>Solution</span> </h2>
                        <h4 className='text-[19px] font-[Poppins,_sans-serif] leading-[30px] font-light w-full mx-auto lg:w-[55%] text-center'>We provide a time-worthy business solution to every type of business. Find out your one and level up your success stairs.</h4>
                    </div>
                    <div className='flex p-6 gap-2 items-center justify-center flex-wrap mb-6'>
                        {allButton.map((sBtn) => {
                            return <Button btnName={sBtn} curentView={currentview} openTab={openTab} key={sBtn}>

                            </Button>
                        })}
                    </div>
                    <div className="">
                        {whatWeProvide.filter((singlePackage) => singlePackage.title === currentview).map((packageList) => {
                            const { allPackage, id } = packageList
                            return <div key={id} className='fadeAnimation w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {allPackage.map((packageElement, index: number) => {
                                    const { description, imageLink, packageTitle } = packageElement
                                    return <div key={packageTitle} className={`${index % 2 == 0 ? gradiant_bg_one : gradiant_bg_two} flex items-start justify-start gap-6 py-5 px-6 cursor-pointer hover:shadow-md border border-slate-100`}>
                                        <Image
                                            className='w-8 '
                                            alt='best package'
                                            src={imageLink}
                                            width={5000}
                                            height={5000}

                                        />
                                        <div>

                                            <h2 className='text-[16px] font-[500] mb-2'>{packageTitle}</h2>
                                            <p className='font-light text-[14px] text-[#555] tracking-wide'>{description}</p>
                                        </div>


                                    </div>
                                })}
                            </div>
                        })}
                    </div>

                </div >
            </div>
        </div>
    )
}

export default OurSolution
