import React from "react";
import classes from "./Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className={`relative h-screen ${classes.header__image}`}>
            <Navbar />
            <h1
                className={`font-bold border-l-[20px] border-cyan-500 pl-7 sm:pl-12 text-4xl sm:text-7xl lg:text-9xl text-white absolute left-4 sm:left-9 md:left-16 bottom-10`}
            >
                <div className={`${classes["club-animation"]}`}>
                    RCC<span className="text-orange-600">Techz</span>
                </div>
            </h1>
        </div>
    );
};

export default Header;
