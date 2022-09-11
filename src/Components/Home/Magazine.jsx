import React from "react";
import coverPhoto from "../../Images/AL-TER.jpg";

const Magazine = () => {
    return (
        <div className="py-16 px-10" style={{ backgroundColor: "#f5ebe0" }}>
            <h1 className="text-center font-semibold text-6xl">
                Techz <span style={{ color: "#cf191f" }}>Magazine</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-evenly mt-16 items-center">
                <a
                    href="https://www.canva.com/design/DAFJxwGWzLE/2Gt0a8NbQZaoEhe41sxL3Q/view?utm_content=DAFJxwGWzLE&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img
                        src={coverPhoto}
                        alt="Magazine Cover"
                        className="w-64 md:w-[360px] rounded-md shadow-2xl hover:scale-110 transition-transform duration-300"
                    />
                </a>
                <div className="mt-10 md:mt-0">
                    <div className="text-center md:text-left font-semibold text-lg md:text-2xl space-y-4">
                        <div>Webinars</div>
                        <div>Tech and Non-Tech</div>
                        <div>Upcoming Events</div>
                    </div>
                    <div className="mt-14 font-semibold text-md md:text-xl">
                        Click on the Magazine to view
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Magazine;
