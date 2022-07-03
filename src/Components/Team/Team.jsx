import React, { useState } from "react";
import Backdrop from "../UI/Backdrop";
import Members from "./Members";
import TeamHeader from "./TeamHeader";
import ExpandedProfile from "./ExpandedProfile";

const Team = () => {
    const [showModal, setShowModal] = useState(false);
    const [itemForExpProfile, setItemForExpProfile] = useState();

    const backdropAndProfileHandler = () =>
        setShowModal((prevCond) => !prevCond);

    const viewProfileHandler = (item) => {
        backdropAndProfileHandler();
        setItemForExpProfile({ ...item });
    };

    console.log("Team Comp");

    return (
        <div
            className={`h-screen overflow-y-scroll bg-gradient-to-tl from-gray-700 via-gray-900 to-black text-white text-2xl`}
        >
            <TeamHeader />
            <Members displayModal={viewProfileHandler} />
            {showModal && (
                <>
                    <Backdrop closeBackdrop={backdropAndProfileHandler} />
                    <ExpandedProfile
                        coreMember={itemForExpProfile}
                        closeExpProfile={backdropAndProfileHandler}
                    />
                </>
            )}
        </div>
    );
};

export default Team;
