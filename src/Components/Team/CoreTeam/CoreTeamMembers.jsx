import React, { useEffect, useReducer, useState } from "react";
import OffClickProfile from "../OffClickProfile";
import ExpandedProfile from "../ExpandedProfile";
import Backdrop from "../../UI/Backdrop";

// Componenet function that displays either the normal card
// or the expanded version of the card
// on clicking the profile

function profileReducer(state, action){
    console.log(action.topPos, action.cond);
    return {pos: action.topPos, cond: action.cond};
}


const CoreTeamMembers = (props) => {
    // True -> Display expanded profile card
    // False -> Display normal profile card

    var coreMember = props.coreMember;

    // const [expandedDisplayCond, setExpandedDisplayCond] = useState(false);
    const [expandedDisplayCond, setExpandedDisplayCond] = useReducer(profileReducer, {
        pos: 0,
        cond: false
    });

    const displayEventHandler = (cond, top) => {
        console.log("Expanded Display Cond Status :", cond);
        setExpandedDisplayCond({topPos: top, cond: cond})
        // setExpandedDisplayCond(cond);
    };

    const {pos: topPx} = expandedDisplayCond;
    const {cond: isProfileClicked} = expandedDisplayCond;

    return (
        <div className="">
            {isProfileClicked === true ? (
                <>
                    {/* <Backdrop /> */}
                    {console.log('Top Position :', topPx - 200)}
                    <ExpandedProfile
                        topPx={topPx - 200}
                        coreMember={coreMember}
                        displayEventHandler={displayEventHandler}
                    />
                </>
            ) : (
                <OffClickProfile
                    coreMember={coreMember}
                    displayEventHandler={displayEventHandler}
                />
            )}
        </div>
    );
};

export default CoreTeamMembers;
