import React from "react";
import resources from "../../SVGs/human-resources-svgrepo-com.svg";
import website from "../../SVGs/website-svgrepo-com.svg";
import server from "../../SVGs/server-svgrepo-com.svg";
import openSource from "../../Images/open-source.png";
import code from "../../Images/codeFeature.jpg";

const ClubFeatures = () => {
    return (
        <div
            className="bg-white py-24"
            style={{ backgroundColor: "#f5ebe0" }}
        >
            <div className="font-semibold text-4xl rounded-xl lg:text-6xl px-8 py-4 p-4 text-center mb-16 mx-auto max-w-lg">
                Club Features
            </div>
            {/* <div className="flex flex-col justify-center items-center gap-y-11"> */}
            <div className="grid grid-cols-1 bp_1100:grid-cols-2 grid-rows-5 bp_1100:grid-rows-3 place-items-center gap-y-11">
                <div className=" bg-white border-[1px] shadow-xl rounded-xl min-h-[150px] w-[90%] md:w-[500px] py-4 px-8 flex flex-row gap-x-10 items-center font-semibold">
                    <img src={resources} alt="resrources" className="w-20" />
                    <p>Get access to unlimited resources</p>
                </div>
                <div className=" bg-white border-[1px] shadow-xl rounded-xl min-h-[150px] w-[90%] md:w-[500px] py-4 px-8 flex flex-row gap-x-10 items-center font-semibold">
                    <img src={server} alt="server" className="w-20" />
                    <p>Optimize our website, with better performance and UI</p>
                </div>
                <div className=" bg-white border-[1px] shadow-xl rounded-xl min-h-[150px] w-[90%] md:w-[500px] py-4 px-8 flex flex-row gap-x-10 items-center font-semibold">
                    <img src={website} alt="website" className="w-20" />
                    <p>Work on cool projects and showcase your skills on our website</p>
                </div>
                <div className=" bg-white border-[1px] shadow-xl rounded-xl min-h-[150px] w-[90%] md:w-[500px] py-4 px-8 flex flex-row gap-x-10 items-center font-semibold">
                    <img src={openSource} alt="open source" className="w-20" />
                    <p>Grow your Open Source Skills</p>
                </div>
                <div className=" bg-white border-[1px] shadow-xl rounded-xl min-h-[150px] w-[90%] md:w-[500px] py-4 px-8 flex flex-row gap-x-10 items-center font-semibold">
                    <img src={code} alt="code" className="w-20" />
                    <p>
                        Enhance your problem solving skills with our monthly
                        coding challenge
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ClubFeatures;
