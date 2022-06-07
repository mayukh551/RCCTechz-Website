import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ renderCond }) => {
    return (
        <Fragment>
            <motion.div
                className="h-[50px] w-full bg-black z-50 left-0 top-0"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
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
            </motion.div>
        </Fragment>
    );
};

export default Navbar;
