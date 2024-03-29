import React from "react";

const ProfileCard = (props) => {
    return (
        <div
            className={props.styleCard}
            onClick={props.coreTeamProfileHandler}
            onMouseEnter={props.mouseEventHandler}
            onMouseLeave={props.mouseEventHandler}
            style={props.pos}
        >
            {props.children}
        </div>
    );
};

export default ProfileCard;
