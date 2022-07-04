import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Stats = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) setStartAnimation(true);
        else setStartAnimation(false);
    }, [inView]);

    return (
        <div className="py-20 min-h-48 bg-black" ref={ref}>
            <div className="mb-20 text-5xl text-white text-center">
                Statistics
            </div>
            <div className="text-lg flex flex-col gap-y-6 md:flex-row justify-evenly items-center text-white">
                <motion.div
                    className="font-semibold cursor-default space-y-2 md:space-y-5 text-center"
                    initial={{ opacity: 0, y: "50%" }}
                    animate={startAnimation && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div>Projects</div>
                    <div className="text-cyan-500">10+</div>
                </motion.div>
                <motion.div
                    className="font-semibold cursor-default space-y-2 md:space-y-5 text-center"
                    initial={{ opacity: 0, y: "50%" }}
                    animate={startAnimation && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <div>Events</div>
                    <div className="text-cyan-500">20+</div>
                </motion.div>
                <motion.div
                    className="font-semibold cursor-default space-y-2 md:space-y-5 text-center"
                    initial={{ opacity: 0, y: "50%" }}
                    animate={startAnimation && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                >
                    <div>Funds Raised</div>
                    <div className="text-cyan-500">Rs 88674</div>
                </motion.div>
            </div>
        </div>
    );
};

export default Stats;
