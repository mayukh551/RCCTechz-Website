import React, { useEffect, useState } from "react";
import TeamContext from "../store/team-context";
import Backdrop from "../UI/Backdrop";
import Members from "./Members";
import TeamHeader from "./TeamHeader";

const Team = () => {
    const [showBackdrop, setBackdrop] = useState(false);
    const [isViewProfile, setViewProfile] = useState(false);

    const showBackdropHandler = () => setBackdrop((prevCond) => !prevCond);

    const viewProfileHandler = () => setViewProfile((prevCond) => !prevCond);

    console.log("Team Comp");

    return (
        <TeamContext.Provider
            value={{
                isBackdrop: showBackdrop,
                showBackdropHandler: showBackdropHandler,
                isViewProfile: isViewProfile,
                viewProfileHandler: viewProfileHandler,
            }}
        >
            <div
                className={`h-screen overflow-y-scroll bg-gray-700 text-white text-2xl`}
            >
                {console.log("is backdrop here", showBackdrop)}
                {console.log("is viewProfile here", isViewProfile)}
                {showBackdrop === true ? (
                    <Backdrop showBackdropHandler={showBackdropHandler} />
                ) : (
                    ""
                )}
                <TeamHeader />
                <Members showBackdropHandler={showBackdropHandler} />
            </div>
        </TeamContext.Provider>
    );
};

export default Team;
