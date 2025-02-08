

import { ourFeaturesData } from "@/app/data/ourFeaturesData"
import style from "../../component/banner/banner.module.css"
import Image from "next/image"

const OurFeatures = () => {

    const { animated_BG_Text, gradiant_bg_one, gradiant_bg_two } = style
    return (
        <div className="">
            <div className="max-width py-12 lg:py-16 px-0 md:px-12 lg:px-12 min-h-screen flex flex-col items-center justify-center">
                <div className="flex items-center w-full md:w-[75%] lg:w-[60%] flex-col text-center justify-center">

                    <h3 className="text-[36px] font-bold mb-2 leading-[1.1]">Share Your Demand to <br /> <span className={`${animated_BG_Text}`}>Design Any Customized</span> Software</h3>
                    <p className='text-[16px] my-2 lg:w-[85%] leading-[25px] font-light w-full'>Bdtask, Inc. focuses on the exact requirements of the clients. We design and develop the best and most advanced software for all types of businesses
                    </p>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-4">
                    {ourFeaturesData.map((singleFeatures, index: number) => {
                        const { description, image, title } = singleFeatures
                        return <div key={title} className={`${index % 2 == 0 ? gradiant_bg_two : gradiant_bg_one} py-8 px-12 shadow-sm border hover:shadow-xl origin-bottom hover:-translate-y-2 cursor-pointer transition-all`}>
                            <Image
                                className="w-20 my-6"
                                alt="features image"
                                src={image}
                                width={5000}
                                height={5000}
                            />

                            <h3 className="mb-2 text-lg font-[600]">{title}</h3>

                            <p className='text-[14px] mt-2 font-[Poppins,_sans-serif] leading-[23px] font-light w-full'>{description}
                            </p>
                        </div>
                    })}
                </div>


            </div>
        </div>
    )
}

export default OurFeatures
