import React, { useContext } from "react";
import TeamContext from "../store/team-context";

const Backdrop = () => {
    const teamCtx = useContext(TeamContext);

    const backdropHandler = () => {
        teamCtx.viewProfileHandler();
    };

    return (
        <div
            onClick={backdropHandler}
            className="z-30 bg-black opacity-70 h-screen w-screen absolute top-0 left-0"
        ></div>
    );
};

export default Backdrop;
