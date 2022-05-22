import React from "react";
import ProfileCard from "../UI/ProfileCard";
import classes from './ExpandedProfile.module.css'

const ExpandedProfile = (props) => {

    var member = props.coreMember;
    console.log('On ExpandedProfile Components');
    const closeButtonHandler = () => {
        console.log("On Close button");
        props.displayEventHandler(false);
    }

    return (
        // top-[20%]
        <ProfileCard styleCard={`${classes.profile} z-50 overflow-hidden text-base absolute left-[26.75%] top-[${props.topPx}px] ml-12 mt-12 w-[500px] h-[360px] text-white bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}>
            <div className="p-4 flex flex-col">
                <h1 className="mb-9">
                    <span className="text-orange-400">Name</span> : {member.name}
                    <hr className="mt-2 mr-28" />
                </h1>
                <p className="">
                    <span className="text-orange-400">Skills</span> : React, JS,
                    Python, Git & Github, TailwindCss
                    <hr className="mt-2 mr-28" />
                </p>
                <p className="mt-7">
                    <span className="text-orange-400">Interest</span> :{" "}
                </p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum velit illum eaque temporibus vero, accusamus dolore nisi
                placeat aut quasi veritatis voluptatum impedit ipsam assumenda
                magnam labore corrupti deserunt. Similique.
                <div className="mt-5 shadow-2xl mr-5 text-right">
                    <button onClick={closeButtonHandler} className=" bg-purple-500 hover:bg-purple-600 active:bg-purple-400 px-6 py-1 rounded-md">
                        Close
                    </button>
                </div>
            </div>
        </ProfileCard>
    );
};

export default ExpandedProfile;
