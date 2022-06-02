import React, { useEffect, useState } from "react";
import OffClickProfile from "./OffClickProfile";
import ExpandedProfile from "./ExpandedProfile";
import Backdrop from "../UI/Backdrop";

// Componenet function that displays either the normal card
// or the expanded version of the card
// on clicking the profile

const CoreTeamMembers = (props) => {
    // True -> Display expanded profile card
    // False -> Display normal profile card

    var coreMember = props.coreMember;
    const [expandedDisplayCond, setExpandedDisplayCond] = useState(false);

    const displayEventHandler = (cond, top) => {
        console.log("Expanded Display Cond Status :", cond);
        setExpandedDisplayCond(cond);
    };

    return (
        <OffClickProfile
            coreMember={coreMember}
            displayEventHandler={displayEventHandler}
            index={props.index}
        />
    );
};

export default CoreTeamMembers;
