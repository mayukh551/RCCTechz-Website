import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EventListItem = (props) => {
    const event = props.event;
    const { ref, inView } = useInView();
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) setStartAnimation(true);
        else setStartAnimation(false);
    }, [inView]);

    return (
        <li className="w-[100%] md:w-[90%] lg:w-[45rem] mb-10 ml-10" ref={ref}>
            <motion.span
                className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                initial={{ scale: 0.6 }}
                animate={startAnimation && { scale: [0.6, 1.3, 1] }}
                transition={{
                    duration: 0.4,
                    type: "spring",
                    // delay: props.index * 0.1,
                }}
            >
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
            </motion.span>
            <motion.div
                // className="cursor-default hover:shadow-xl hover:scale-105 transition-all duration-200 ml-2 rounded-lg bg-white py-4 px-4"
                className="cursor-default hover:shadow-xl transition-shadow ml-2 rounded-lg bg-white py-4 px-4"
                initial={{ opacity: 0, x: "20%" }}
                animate={startAnimation && { opacity: 1, x: 0 }}
                transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100,
                    // delay: props.index * 0.2,
                }}
            >
                <h3 className="flex items-center mb-1 text-lg sm:text-2xl font-semibold text-gray-900 ">
                    {event.title}{" "}
                    {props.index === 0 && (
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            Latest
                        </span>
                    )}
                </h3>
                <time className="font-semibold block mb-4 text-sm leading-none text-gray-400 dark:text-gray-500">
                    {event.date}
                </time>
                <div className="mb-2 text-md sm:text-lg font-semibold text-black">
                    Platform : {event.platform}
                </div>
                {event.speaker !== "" && (
                    <div className="mb-2 text-base sm:text-md font-semibold text-black">
                        Speaker : {event.speaker}
                    </div>
                )}
                <p className="text-sm sm:text-base font-medium text-black">
                    {event.description}
                </p>
            </motion.div>
        </li>
    );
};

export default EventListItem;
