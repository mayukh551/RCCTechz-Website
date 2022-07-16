import React from "react";
// import { motion } from "framer-motion";

// import {
//     VerticalTimeline,
//     VerticalTimelineElement,
// } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
// import { ReactComponent as TechSvg } from "../../SVGs/coding-svgrepo-com.svg";
// import { ReactComponent as WebinarSvg } from "../../SVGs/presentation-svgrepo-com.svg";
import "./EventLayout.css";
import eventData from "./event-info.js";
import EventListItem from "./EventListItem";

const EventLayout = () => {
    // const techIcon = <TechSvg />;
    // const nonTechIcon = "";
    // const webinarIcon = <WebinarSvg />;
    return (
        <div className="overflow-x-hidden py-20 pl-8 sm:px-12 md:px-24">
            <h1 className="text-2xl sm:text-4xl font-semibold underline underline-offset-8 text-left mb-16">
                Timeline of Events
            </h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {eventData.map((event, index) => {
                    return <EventListItem event={event} index={index} />;
                })}
            </ol>

            {/* <VerticalTimeline layout={"2-columns"} lineColor={"#e63946"}>
                {eventData.map((element, index) => {
                    return (
                        <VerticalTimelineElement
                            key={index}
                            date={element.date}
                            dateclassNameName={"date-style"}
                            className={
                                "w-[90%] bp_650:w-[80%] md:w-[70%] bp_1170:w-full"
                            }
                            iconStyle={
                                element.type === "webinar"
                                    ? { background: "rgb(33, 150, 243)" }
                                    : { background: "#e07a5f" }
                            }
                            icon={
                                element.type === "webinar"
                                    ? webinarIcon
                                    : element.type === "tech-event"
                                    ? techIcon
                                    : ""
                            }
                        >
                            <h3 className="text-2xl font-bold mb-3">
                                {element.title}
                            </h3>
                            <h4 className="text-lg font-semibold">
                                Platform: {element.platform}
                            </h4>
                            <p>{element.description}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline> */}
        </div>
    );
};

export default EventLayout;
