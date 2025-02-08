"use client"


import Image from "next/image"

import style from "./navbar.module.css";
import ToggleBtn from "../ToggleBtn";
import { useEffect, useState } from "react";

const Navbar = () => {


    const [stickyNav, setStickyNav] = useState<boolean>(false)


    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 150) {
                setStickyNav(true)
            } else {
                setStickyNav(false)
            }

        })

    }, [stickyNav, setStickyNav])

    const { logo_image, navbar, sticky_Nav, sticky_nav_max_width } = style
    return (
        <nav className={`${stickyNav ? sticky_Nav : "static"} max-width`}>
            <div className={`${navbar} md:px-6 lg:p-0`}>
                <div className={`${sticky_nav_max_width}`}>


                    <div >
                        <Image
                            className={`${logo_image} -ml-4 md:ml-0 lg:ml-6`}
                            alt="Logo-Image"
                            src={"/nexoqod_logo_remove_bg.png"}
                            width={5000}
                            height={5000}
                        />
                    </div>

                    <menu className="relative">
                        <ToggleBtn />
                    </menu>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
