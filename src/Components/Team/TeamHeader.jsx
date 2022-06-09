import React from "react";
import Navbar from "../Home/Header/Navbar";

const TeamHeader = () => {
    return (
        <>
            <Navbar />
            <div className="h-[140px] pt-7 flex flex-col justify-between items-center">
                <h1 className="text-center text-3xl sm:text-4xl md:text-6xl">
                    Meet the{" "}
                    <span className="font-extrabold shadow-xl py-2 px-4 text-orange-500">
                        Team
                    </span>
                </h1>
            </div>
        </>
    );
};

export default TeamHeader;
