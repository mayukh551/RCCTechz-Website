import React from "react";
import Navbar from "../Home/Header/Navbar";
import { motion } from "framer-motion";

const TeamHeader = () => {
    return (
        <>
            <Navbar />
            {/* <div className="min-h-[540px] pt-28 flex flex-col items-center"> */}
            <div className="min-h-screen pt-28 flex flex-col items-center">
                <div className="flex flex-col bp_650:flex-row bp_650:gap-x-8 justify-center">
                    <motion.span
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-10 text-center text-5xl bp_650:text-6xl md:text-8xl"
                    >
                        Meet{" "}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-10 text-center text-5xl bp_650:text-6xl md:text-8xl"
                    >
                        the{" "}
                    </motion.span>
                </div>
                <motion.div
                    className="text-center text-7xl bp_650:text-8xl md:text-9xl font-extrabold shadow-xl py-2 px-4 text-orange-500"
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    Team
                </motion.div>
            </div>
        </>
    );
};

export default TeamHeader;
