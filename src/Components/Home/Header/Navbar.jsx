import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Fragment>
            <div
                className="h-[50px] w-full bg-black left-0 top-0"
                style={{ borderBottomRightRadius: "10px" }}
            >
                <ul className="h-full text-white font-bold text-lg flex flex-row justify-center items-center text-center">
                    <Link to="/">
                        <li className="mx-6 px-8 cursor-pointer hover:text-black hover:bg-slate-100">
                            Home
                        </li>
                    </Link>
                    <Link to="/team">
                        <li className="mx-6 px-8 cursor-pointer hover:text-black hover:bg-slate-100">
                            Team
                        </li>
                    </Link>
                    <li className="mx-6 px-8 cursor-pointer hover:text-black hover:bg-slate-100">
                        Projects
                    </li>
                    <li className="mx-6 px-8 cursor-pointer hover:text-black hover:bg-slate-100">
                        <Link to="/events">Events</Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Navbar;
