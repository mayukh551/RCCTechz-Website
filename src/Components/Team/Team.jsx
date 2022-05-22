import React, { useEffect, useState } from "react";
import Backdrop from "../UI/Backdrop";
import Members from "./Members";
import TeamHeader from "./TeamHeader";

const Team = () => {
    // const [scrollHeight, setScrollHeight] = useState(false);
    const [showBackdrop, setBackdrop] = useState(false);
    // console.log('Team Component');
    const onTeam = (cond) => {
        console.log('Remember me! I am that backdrop :', cond);
        // setBackdrop(cond);
    }

    return (
        <div className={`bg-gray-700 text-white text-2xl relative`}>
            {/* <div className="h-screen overflow-hidden absolute top-0 left-0 w-full" style={{background: 'transparent'}}></div> */}
            {console.log('is backdrop here', showBackdrop)}
            {showBackdrop === true ? <Backdrop/> : ''}
            <TeamHeader />
            <Members sendToTeam={onTeam}/>
        </div>
    );
};

export default Team;
