import Image from "next/image"
import { BsFacebook, BsLinkedin, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs"


const Footer = () => {
    return (
        <div className="bg-black text-[#6C757D] min-h-screen py-12 px-0 md:12 lg:px-12">
            <div className="max-width text-[16px] font-[Poppins,_sans-serif] leading-[25px] font-light">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                    <div className="">
                        <Image
                            className="w-[7rem] -ml-4 mb-4"
                            alt="Logo Image"
                            width={5000}
                            height={5000}
                            src={'/nexoqod_logo.png'}
                        />
                        <p className="text-[#6C757D] w-[80%] my-2">Best Software Development Company To Architect The Dream For Next Generation.</p>




                        <div className="flex items-center gap-6 my-4">
                            <div>
                                <strong className="text-white text-[20px]">
                                    11,000+
                                </strong><br />
                                <p>Items sold</p>
                            </div>
                            <div>
                                <strong className="text-white text-[20px]">
                                    40+
                                </strong><br />
                                <p>Products</p>
                            </div>
                        </div>

                        <div className="flex my-8 items-center gap-6">
                            <BsFacebook title="Facebook" size={25} color="white" />
                            <BsPinterest title="Pinterest" size={25} color="white" />
                            <BsLinkedin title="Linkdin" size={25} color="white" />
                            <BsTwitter title="Twiter" size={25} color="white" />
                            <BsYoutube title="Youtube" size={25} color="white" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-white  my-4 mb-6 text-[18px]">Address</h2>
                        <h3 className="font-semibold my-2">Bangladesh Office</h3>
                        <p className="w-[80%]">
                            B-25, Mannan Plaza, 4th Floor Khilkhet,
                            Dhaka-1229, Bangladesh
                        </p>

                        <h3 className="font-semibold  mt-4 mb-1">Email</h3>
                        <h5>business@bdtask.com</h5>
                        <h5>info@bdtask.com</h5>
                    </div>
                    <div>
                        <h2 className="text-white  my-4 mb-6 text-[18px]">Phone</h2>

                        <h3 className="font-semibold my-2">Services:</h3>

                        <h5>+880-183-070-1422</h5>
                        <h5>+880-185-767-5727</h5>
                        <h5>+880-181-758-4639</h5>

                        <h3 className="font-semibold mt-4 mb-1">Office Reception:</h3>
                        <h5>+880-258970255</h5>

                    </div>
                </div>

                <div className="hidden md:grid md:grid-cols-2 gap-4 lg:grid-cols-4 ">
                    <div>
                        <h2 className="text-white  my-4 mb-6 text-[18px]">Phone</h2>


                        <h2 className="my-3">{new Date().getFullYear()} Nexoqod All Rights Reserved</h2>

                        <p>
                            Here all software, apps, themes, plugins, are our own property. Therefore copying or reselling is strictly prohibited.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-white  my-4 mb-6 text-[18px]">Useful Links</h2>
                        → <span> &nbsp; About Us</span><br />
                        → <span> &nbsp; Blog</span><br />
                        → <span> &nbsp; Career We are Hiring</span><br />
                        → <span> &nbsp; Terms of Use</span><br />
                        → <span> &nbsp; Privacy Policy</span><br />
                        → <span> &nbsp; Copyright</span><br />
                        → <span> &nbsp; Client List</span><br />

                    </div>
                    <div>
                        <h2 className="text-white  my-4 mb-6 text-[18px]"> Services</h2>
                        → <span> &nbsp; Graphic Design</span><br />
                        → <span> &nbsp; Cliping Path</span><br />
                        → <span> &nbsp; NexoQod Academy</span><br />
                        → <span> &nbsp; Cyber Sequrity</span><br />
                        → <span> &nbsp; Digital Marketing</span>
                    </div>
                    <div>
                        <h2 className="text-white  my-4 mb-6 text-[18px]">Support</h2>
                        → <span> &nbsp; Contact Us</span><br />
                        → <span> &nbsp; Item Support</span>
                    </div>
                </div>

                <div className="w-full mt-12 flex gap-4 flex-wrap items-center justify-between">
                    <div className="flex gap-4">
                        <Image
                            className="w-20"
                            alt="Image"
                            src={'/footer-brand/iso.png'}
                            width={5000}
                            height={5000}
                        />
                        <Image
                            className="w-20"
                            alt="Image"
                            src={'/footer-brand/basis.png'}
                            width={5000}
                            height={5000}
                        />
                        <Image
                            className="w-20"
                            alt="Image"
                            src={'/footer-brand/bacco-white.png'}
                            width={5000}
                            height={5000}
                        />
                        <Image
                            className="w-20"
                            alt="Image"
                            src={'/footer-brand/envato-white.png'}
                            width={5000}
                            height={5000}
                        />
                    </div>
                    <div>
                        <div className="flex gap-4">
                            <h2>We accept</h2>
                            <Image
                                className="w-10 h-6"
                                alt="Image"
                                src={'/footer-brand/master-card/1.webp'}
                                width={5000}
                                height={5000}
                            />
                            <Image
                                className="w-10 h-6"
                                alt="Image"
                                src={'/footer-brand/master-card/2.webp'}
                                width={5000}
                                height={5000}
                            />
                            <Image
                                className="w-10 h-6"
                                alt="Image"
                                src={'/footer-brand/master-card/3.webp'}
                                width={5000}
                                height={5000}
                            />
                            <Image
                                className="w-10 h-6"
                                alt="Image"
                                src={'/footer-brand/master-card/4.webp'}
                                width={5000}
                                height={5000}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
