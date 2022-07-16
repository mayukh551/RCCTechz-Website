import React from "react";
import resources from "../../SVGs/human-resources-svgrepo-com.svg";
import website from "../../SVGs/website-svgrepo-com.svg";
import server from "../../SVGs/server-svgrepo-com.svg";

const ClubFeatures = () => {
    return (
        <div
            className="bg-white py-11"
            style={{
                backgroundImage: `url(
                    "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3BsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                )`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="text-4xl lg:text-6xl px-8 py-4 bg-white p-4 text-center mb-6 mx-auto max-w-lg">
                Club Features
            </div>
            <div className="flex flex-col justify-center items-center gap-y-11">
                <div className=" bg-white border-[1px] shadow-xl rounded-xl min-h-[150px] w-[90%] md:w-[500px] py-4 px-8 flex flex-row gap-x-10 justify-center items-center font-semibold">
                    <img src={resources} alt="resrources" className="w-20" />
                    <p>Get access to unlimited resources</p>
                </div>
                <div className=" bg-white border-[1px] shadow-xl rounded-xl min-h-[150px] w-[90%] md:w-[500px] py-4 px-8 flex flex-row gap-x-10 justify-center items-center font-semibold">
                    <img src={server} alt="server" className="w-20" />
                    <p>Optimize our website, with better performance and UI</p>
                </div>
                <div className=" bg-white border-[1px] shadow-xl rounded-xl min-h-[150px] w-[90%] md:w-[500px] py-4 px-8 flex flex-row gap-x-10 justify-center items-center font-semibold">
                    <img src={website} alt="website" className="w-20" />
                    <p>Showcase your projects on our website</p>
                </div>
            </div>
        </div>
    );
};

export default ClubFeatures;
