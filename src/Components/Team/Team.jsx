import React, { useEffect, useState } from "react";
import Backdrop from "../UI/Backdrop";
import Members from "./Members";
import TeamHeader from "./TeamHeader";

const Team = () => {
    // const [scrollHeight, setScrollHeight] = useState(false);
    const [showBackdrop, setBackdrop] = useState(false);
    // console.log('Team Component');
    const showBackdropHandler = (cond) => {
        console.log('Remember me! I am that backdrop :', cond);
        setBackdrop(cond);
    }

    return (
        <div className={`h-screen overflow-y-scroll bg-gray-700 text-white text-2xl`}>
            {console.log('is backdrop here', showBackdrop)}
            {showBackdrop === true ? <Backdrop showBackdropHandler={showBackdropHandler}/> : ''}
            <TeamHeader />
            <Members showBackdropHandler={showBackdropHandler}/>
        </div>
    );
};

export default Team;
