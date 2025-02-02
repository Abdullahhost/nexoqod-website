



"use client"
import style from "./banner.module.css"

import VideoPlayer from '../videoPlayer/VideoPlayer'
import { TypeAnimation } from 'react-type-animation';
import { CSSProperties } from "react";
import ClientReview from "./ClientRivew";

const Banner = () => {
    const { _flex, problem_text, animated_BG_Text } = style;
    return (
        <div className="max-width min-h-screen flex items-center justify-center h-full">
            <div className={`${_flex} py-12 md:px-12`}>
                <div className="w-full md:w-[90%] lg:w-[45%] relative text-[40px] font-bold">
                    <div className="h-[100px] lg:h-fit text-green-500">

                        <TypeAnimation
                            sequence={[
                                `Your Problem We Solve`,
                                5000,
                                " ",
                            ]}
                            speed={2}
                            deletionSpeed={90}
                            style={{ whiteSpace: 'pre-line' }}
                            repeat={Infinity}
                        />
                    </div>
                    <div className={`absolute px-1 py-2 top-[-8px] left-[94px] w-fit h-fit bg-white text-[40px] ${problem_text}`}>
                        <span style={{ '--x': 1 } as CSSProperties}>P</span>
                        <span style={{ '--x': 2 } as CSSProperties}>r</span>
                        <span style={{ '--x': 3 } as CSSProperties}>o</span>
                        <span style={{ '--x': 4 } as CSSProperties}>b</span>
                        <span style={{ '--x': 5 } as CSSProperties}>l</span>
                        <span style={{ '--x': 6 } as CSSProperties}>e</span>
                        <span style={{ '--x': 7 } as CSSProperties}>m</span>
                    </div>

                    <h2 className="mt-6 md:mt-4 text-[32px] text-wrap font-normal  leading-[1.2]">Innovative <span className={`${animated_BG_Text}`}> software solutions </span> <br />tailored to your  <span className={`${animated_BG_Text}`}> needs </span></h2>

                    <h4 style={{ textDecorationColor: 'blue' }} className="text-[20px] underline underline-offset-2 tracking-wide my-4 w-full lg:w-[85%] font-light text-[#555]">We specialize in crafting exceptional digital experiences, empowering businesses with cutting-edge technology.</h4>


                    <div className="w-full md:w-[70%] lg:w-[70%]">
                        <h4 className="text-xl mt-8 lg:mt-10 text-[teal]">Our Customer's Feedback</h4>
                        {/* <p className="text-sm font-[400]">
                            Our honorable and valuable clients share their values with us. Let’s hear our satisfied clients’ voices.
                        </p> */}
                        <div>
                            <ClientReview />
                        </div>
                    </div>

                </div >
                <VideoPlayer videoSrc='/bannervideo.mp4' />
            </div>
        </div>

    )
}

export default Banner
