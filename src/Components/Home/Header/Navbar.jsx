import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap/all";

const Navbar = ({ renderCond }) => {
    const navbar = useRef(null);
    useEffect(() => {
        if (renderCond) {
            gsap.from(navbar.current, {
                yPercent: -300,
                duration: 2,
                ease: "power3.out",
            });
        }
    }, [renderCond]);

    return (
        <Fragment>
            <div
                className="h-[50px] w-full bg-black z-50 left-0 top-0"
                ref={navbar}
                // style={{ borderBottomRightRadius: "10px" }}
            >
                <ul className="h-full text-white font-bold text-lg flex flex-row justify-center text-center">
                    <Link to="/">
                        <li className="h-full pt-3 mx-6 px-8 cursor-pointer hover:text-black hover:bg-slate-100">
                            Home
                        </li>
                    </Link>
                    <Link to="/team">
                        <li className="h-full pt-3 mx-6 px-8 cursor-pointer hover:text-black hover:bg-slate-100">
                            Team
                        </li>
                    </Link>
                    <li className="h-full pt-3 mx-6 px-8 cursor-pointer hover:text-black hover:bg-slate-100">
                        Projects
                    </li>
                    <li className="h-full pt-3 mx-6 px-8 cursor-pointer hover:text-black hover:bg-slate-100">
                        <Link to="/events">Events</Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Navbar;
