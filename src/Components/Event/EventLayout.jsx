import React from "react";
import eventData from "./eventData.json";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const EventLayout = () => {
    return (
        <div className="py-20">
            <h1 className="text-4xl font-semibold underline underline-offset-8 text-center mb-16">
                Timeline of Events
            </h1>
            <VerticalTimeline layout={"2-columns"} lineColor={"#e63946"}>
                {eventData.map((element, index) => {
                    return (
                        <VerticalTimelineElement
                            key={index}
                            date={element.date}
                            className={
                                "w-[90%] bp_650:w-[80%] md:w-[70%] bp_1170:w-full"
                            }
                        >
                            <h3 className="text-2xl font-bold mb-3">
                                {element.title}
                            </h3>
                            <h4 className="text-lg font-semibold">
                                Platform: {element.platform}
                            </h4>
                            <p>{element.description}</p>
                            {/* <button className="mt-6 bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600">Know More</button> */}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
};

export default EventLayout;
