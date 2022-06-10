import React from "react";
import eventData from "./eventData.json";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import classes from "./EventLayout.module.css";

const EventLayout = () => {
    return (
        <div className="py-20">
            <h1 className="text-4xl font-semibold underline underline-offset-8 text-center mb-16">
                Timeline of Events
            </h1>
            <VerticalTimeline
                // className={`${classes["event-content"]}`}
                layout={"2-columns"}
                lineColor={"black"}
            >
                {eventData.map((element, index) => {
                    return (
                        <VerticalTimelineElement
                            key={index}
                            date={element.date}
                            className={"w-[90%] bp_650:w-[80%] md:w-[70%] bp_1170:w-full"}
                        >
                            <h3>{element.title}</h3>
                            <h4>{element.platform}</h4>
                            <p>{element.description}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
};

export default EventLayout;
