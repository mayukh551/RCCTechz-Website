import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ renderCond }) => {
    const [showMenubar, setNewDisplay] = useState(false);

    const menuHandler = () => {
        console.log(!showMenubar);
        setNewDisplay((prevCond) => !prevCond);
    };

    return (
        <Fragment>
            <div className="relative h-[50px] w-full z-50 left-0 top-0">
                <button
                    onClick={menuHandler}
                    className={`inline-block md:hidden text-3xl text-white mt-2 ml-2 hover:text-cyan-500`}
                >
                    <i className="bi bi-list"></i>
                </button>
                <motion.ul
                    className={
                        showMenubar
                            ? `z-20 top-[50px] absolute text-white font-bold text-base text-center bg-black w-full`
                            : `hidden h-full text-white font-bold text-lg md:flex md:flex-row md:justify-center md:text-center`
                    }
                >
                    <Link to="/">
                        <li
                            className={`h-full pt-3 ${
                                showMenubar ? "py-4" : "mx-6"
                            } px-8 cursor-pointer hover:text-black hover:bg-slate-100`}
                        >
                            Home
                        </li>
                    </Link>
                    <Link to="/team">
                        <li
                            className={`h-full pt-3 ${
                                showMenubar ? "py-4" : "mx-6"
                            } px-8 cursor-pointer hover:text-black hover:bg-slate-100`}
                        >
                            Team
                        </li>
                    </Link>
                    <li
                        className={`h-full pt-3 ${
                            showMenubar ? "py-4 text" : "mx-6"
                        } px-8 cursor-pointer hover:text-black hover:bg-slate-100`}
                    >
                        Projects
                    </li>
                    <Link to="/events">
                        <li
                            className={`h-full pt-3 ${
                                showMenubar ? "py-4 text" : "mx-6"
                            } px-8 cursor-pointer hover:text-black hover:bg-slate-100`}
                        >
                            Events
                        </li>
                    </Link>
                </motion.ul>
            </div>
        </Fragment>
    );
};

export default Navbar;
