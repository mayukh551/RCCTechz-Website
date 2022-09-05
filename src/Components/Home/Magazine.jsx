import React from "react";
import coverPhoto from "../../Images/RCC Techz Magazine.jpg";

const Magazine = () => {
    return (
        <div className="py-16 px-10" style={{ backgroundColor: "#f5ebe0" }}>
            <h1 className="text-center font-semibold text-6xl">
                {/* Techz<span style={{ color: "#ED2024" }}>Verse</span> */}
                Techz<span style={{ color: "#cf191f" }}>Verse</span>
            </h1>
            <div className="flex flex-row justify-evenly mt-16 items-center">
                <a
                    href="https://www.canva.com/design/DAFJxwGWzLE/2Gt0a8NbQZaoEhe41sxL3Q/view?utm_content=DAFJxwGWzLE&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img
                        src={coverPhoto}
                        alt="Magazine Cover"
                        className="w-80 rounded-md shadow-2xl hover:scale-110 transition-transform duration-300"
                    />
                </a>
                <div className="font-semibold text-2xl space-y-4">
                    <div>Webinars</div>
                    <div>Tech and Non-Tech</div>
                    <div>Upcoming Events</div>
                </div>
            </div>
        </div>
    );
};

export default Magazine;
