"use client"


import React, { useRef, useState } from 'react';

import style from "./videoPlayer.module.css"
type VideoType = {
    videoSrc: string;
}


const ClientVideoPlayer: React.FC<VideoType> = ({ videoSrc }) => {

    const { play_btn } = style

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    const toggleFullScreen = () => {
        const video = videoRef?.current;

        if (document?.fullscreenElement) {
            document?.exitFullscreen();

            if (!document?.fullscreenElement) {
                video?.pause();
            }
        } else {
            video?.requestFullscreen();
            video?.play();
        }

    };


    const updateProgress = () => {
        const video = videoRef?.current;
        if (video) {
            const progress = (video.currentTime / video.duration) * 100;
            setProgress(progress);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setProgress(0);
    };
    return (
        <div className="relative w-full lg:w-fit overflow-hidden flex justify-start items-center h-fit">


            <div className="relative ">
                <video

                    ref={videoRef}
                    onTimeUpdate={updateProgress}
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-cover"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>

                <div
                    className={`absolute inset-0 flex justify-center items-center transition-all duration-150 rounded-3xl${isPlaying ? "bg-transparent" : "bg-[#0005]"}`}
                    onClick={toggleFullScreen}
                >
                    <div className="relative w-[7rem] h-[7rem] scale-[.4]">
                        <svg
                            className="absolute scale-125 top-0 left-0 w-full h-full transform rotate-270"
                            viewBox="0 0 36 36"
                        >
                            <circle
                                className="text-[40b9c3]"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                cx="18"
                                cy="18"
                                r="16"
                            />
                            <circle
                                className="text-[#40B9C3]"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                cx="18"
                                cy="18"
                                r="16"
                                strokeDasharray="100"
                                strokeDashoffset={100 - progress}
                                style={{
                                    transition: "stroke-dashoffset 0.1s linear",
                                }}
                            />
                        </svg>
                        {isPlaying ? (
                            <button
                                className="absolute inset-0 flex justify-center text-4xl text-center leading-[80%] items-center bg-[#0004] text-white  rounded-full w-full h-full"
                                aria-label="Play/Pause Button"
                            >
                                ⏸
                            </button>
                        ) : (
                            <button className={play_btn}></button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientVideoPlayer;
