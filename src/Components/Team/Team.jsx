import React, { useState } from "react";
import TeamContext from "../store/team-context";
import Backdrop from "../UI/Backdrop";
import Members from "./Members";
import TeamHeader from "./TeamHeader";

const Team = () => {
    const [showBackdrop, setBackdrop] = useState(false);
    const [isViewProfile, setViewProfile] = useState(false);

    const viewProfileHandler = () => {
        setViewProfile((prevCond) => !prevCond);
        setBackdrop((prevCond) => !prevCond);
    };

    console.log("Team Comp");

    return (
        <TeamContext.Provider
            value={{
                isBackdrop: showBackdrop,
                isViewProfile: isViewProfile,
                viewProfileHandler: viewProfileHandler,
            }}
        >
            <div
                // className={`h-screen overflow-y-scroll bg-gray-700 text-white text-2xl`}
                className={`h-screen overflow-y-scroll bg-gradient-to-tl from-gray-700 via-gray-900 to-black text-white text-2xl`}
            >
                {console.log("is backdrop here", showBackdrop)}
                {console.log("is viewProfile here", isViewProfile)}
                {showBackdrop === true ? <Backdrop /> : ""}
                <TeamHeader />
                <Members />
            </div>
        </TeamContext.Provider>
    );
};

export default Team;
