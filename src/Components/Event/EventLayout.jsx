import React from "react";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as TechSvg } from "../../SVGs/coding-svgrepo-com.svg";
import { ReactComponent as WebinarSvg } from "../../SVGs/presentation-svgrepo-com.svg";
import "./EventLayout.css";
import eventData from "./event-info.js";

const EventLayout = () => {
    // const techIcon = <TechSvg />;
    // const nonTechIcon = "";
    // const webinarIcon = <WebinarSvg />;

    return (
        <div className="py-20 px-12 md:px-24">
            <h1 className="text-4xl font-semibold underline underline-offset-8 text-left mb-16">
                Timeline of Events
            </h1>

            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {eventData.map((event, index) => {
                    return (
                        <li
                            className="w-[100%] md:w-[90%] lg:w-[45rem] mb-10 ml-6"
                            key={index}
                        >
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg
                                    className="w-3 h-3 text-blue-600 dark:text-blue-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                            <div className="cursor-default hover:shadow-xl hover:scale-105 transition-all duration-200 ml-2 rounded-lg bg-white py-4 px-4">
                                <h3 className="flex items-center mb-1 text-2xl font-semibold text-gray-900 ">
                                    {event.title}{" "}
                                    {index === 0 && (
                                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                            Latest
                                        </span>
                                    )}
                                </h3>
                                <time className="font-semibold block mb-4 text-sm leading-none text-gray-400 dark:text-gray-500">
                                    {event.date}
                                </time>
                                <div className="mb-2 text-lg font-semibold text-black">
                                    Platform : {event.platform}
                                </div>
                                <p className="text-base font-medium text-black">
                                    {event.description}
                                </p>
                            </div>
                        </li>
                    );
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
