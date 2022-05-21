import React from "react";

const ProfileCard = (props) => {
    return (
        <div className={props.styleCard}>
            {props.children}
        </div>
    );
};

export default ProfileCard;
