import Image from "next/image"


const WhoWeAre = () => {
    return (
        <div className="max-width border-t py-12 md:py-0 lg:py-0 px-0 md:px-12 lg:px-12 min-h-screen flex items-center justify-center">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="w-full md:w-[50%] text-light">
                    <h5 className="text-[teal] my-1"><strong className="font-[550]"> Who We Are</strong></h5>
                    <h3 className="text-[36px] mb-2 leading-[1.1]">We are From <strong>Another <br /> Space to Automate</strong> the World</h3>
                    <p className='text-[16px] mt-2 lg:w-[85%] font-[Poppins,_sans-serif] leading-[25px] font-light w-full'>Nexoqod works in multiple areas including software development, website development, customized software solution, mobile app development, theme design, and development. Our dream is to continue your journey with success.
                    </p>
                    <button className="py-3 my-4 hover:shadow-md hover:ring-2 ring-black px-4 text-white bg-teal-500 rounded-md">More About Us</button>

                </div>
                <Image
                    className="w-full md:w-[50%]"
                    alt="Company image"
                    src={"/who-we-are.webp"}
                    width={5000}
                    height={5000}
                />
            </div>
        </div>
    )
}

export default WhoWeAre
