"use client"



import "swiper/css"


import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, } from "swiper/modules"

import ClientVideoPlayer from "../videoPlayer/ClientVideoPlayer";

const ClientReview = () => {
    return (
        <div className="my-4 max-w-[640px]">
            <Swiper


                slidesPerView={2}
                spaceBetween={20}

                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}

                modules={[Autoplay]}

                className="mySwiper !justify-start"
            >
                <SwiperSlide>
                    <ClientVideoPlayer videoSrc='/bannervideo.mp4' />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientVideoPlayer videoSrc='/bannervideo.mp4' />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientVideoPlayer videoSrc='/bannervideo.mp4' />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default ClientReview
