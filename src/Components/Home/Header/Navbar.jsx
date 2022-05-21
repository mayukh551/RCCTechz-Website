import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Fragment>
            <div className="absolute pb-7 h-3/5 bg-black left-0 top-0"
            style={{borderBottomRightRadius: "10px"}}
            >
                <ul className="h-full text-white font-bold text-lg flex flex-col justify-around text-center">
                    <li className="my-6 py-1 px-8 cursor-pointer hover:text-black hover:bg-slate-100"><Link to="/">Home</Link></li>
                    <li className="my-6 py-1 px-8 cursor-pointer hover:text-black hover:bg-slate-100"><Link to="/team">Team</Link></li>
                    <li className="my-6 py-1 px-8 cursor-pointer hover:text-black hover:bg-slate-100">Projects</li>
                    <li className="my-6 py-1 px-8 cursor-pointer hover:text-black hover:bg-slate-100"><Link to="/events">Events</Link></li>
                </ul>
            </div>
            
        </Fragment>
    );
};

export default Navbar;
