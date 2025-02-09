



"use client"
import style from "./banner.module.css"

import VideoPlayer from '../videoPlayer/VideoPlayer'
import { TypeAnimation } from 'react-type-animation';
import { CSSProperties } from "react";
import ClientReview from "./ClientRivew";

const Banner = () => {
    const { _flex, problem_text, animated_BG_Text, banner_gradiant } = style;
    return (
        <div className="w-full relative h-full overflow-hidden">
            <div className={` ${banner_gradiant} hidden lg:block absolute -top-[15vw] right-0 h-[150%] w-[65%] origin-bottom-left rotate-[15deg] border`}>

            </div>
            <div className="min-h-screen flex items-center justify-center h-full relative max-width">
                <div className={`${_flex} w-full py-12 px-0 md:px-6  lg:px-4 `}>

                    <div className="w-full md:w-[90%] lg:w-[50%] relative text-[34px] font-bold">
                        <div className="w-full h-[100px] lg:h-fit text-[#40B9C3]">

                            <TypeAnimation
                                sequence={[
                                    `Your Problem We Will Solved`,
                                    5000,
                                    " ",

                                ]}
                                speed={{ type: 'keyStrokeDelayInMs', value: 250 }}
                                // speed={1}
                                deletionSpeed={90}
                                style={{ whiteSpace: 'pre-line' }}
                                repeat={Infinity}
                            />
                        </div>
                        <div className={`absolute px-1 py-2 top-[-8px] left-[87px] w-fit h-fit bg-white text-[34px] ${problem_text}`}>
                            <span style={{ '--x': 1 } as CSSProperties}>P</span>
                            <span style={{ '--x': 2 } as CSSProperties}>r</span>
                            <span style={{ '--x': 3 } as CSSProperties}>o</span>
                            <span style={{ '--x': 4 } as CSSProperties}>b</span>
                            <span style={{ '--x': 5 } as CSSProperties}>l</span>
                            <span style={{ '--x': 6 } as CSSProperties}>e</span>
                            <span style={{ '--x': 7 } as CSSProperties}>m</span>
                        </div>

                        <h2 className="mt-6 md:mt-4 text-[28px] text-wrap font-normal  leading-[1.2]">Innovative <span className={`${animated_BG_Text}`}> software solutions </span> <br />tailored to your  <span className={`${animated_BG_Text}`}> needs </span></h2>

                        <h4 className="text-[18px]  tracking-wide my-4 w-full lg:w-[85%] font-light text-[#555]">We specialize in crafting exceptional digital experiences, empowering businesses with cutting-edge technology.</h4>


                        <div className="w-full md:w-[70%] lg:w-[70%]">
                            <h4 className="text-xl mt-8 lg:mt-10 text-[teal]">Our Customer's Feedback</h4>
                            <div>
                                <ClientReview />
                            </div>
                        </div>

                    </div>
                    <VideoPlayer videoSrc='/bannervideo.mp4' />
                </div>
            </div>

        </div>
    )
}

export default Banner
