import React, { useEffect } from "react";
import { gsap } from "gsap";

const ProfileCard = React.forwardRef((props, ref) => {
    useEffect(() => {
        gsap.fromTo(
            ".member-card",
            {
                opacity: 0,
                scale: 0.4,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
            }
        );
    }, []);

    return (
        <div
            className={props.styleCard}
            onClick={props.coreTeamProfileHandler}
            onMouseEnter={props.mouseEventHandler}
            onMouseLeave={props.mouseEventHandler}
            ref={ref}
        >
            {props.children}
        </div>
    );
});

export default ProfileCard;
