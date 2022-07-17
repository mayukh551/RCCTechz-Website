import database from "../../SVGs/database.svg";
// import laptop from "../../SVGs/laptop.svg";
// import style from "./DefineClub.module.css";
import linux from "../../SVGs/linux.svg";
import drone from "../../SVGs/undraw_drone_surveillance_kjjg.svg";
import python from "../../SVGs/python.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const DefineClub = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        } else {
            setStartAnimation(false);
        }
    }, [inView]);

    return (
        <div
            className={`relative py-11 h-auto text-black`}
            style={{ backgroundColor: "#f5ebe0" }}
            ref={ref}
        >
            <motion.div
                className=" flex flex-col items-center justify-center gap-y-10"
                initial={{ opacity: 0, y: "-10%" }}
                animate={startAnimation && { opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
                <h1 className="text-3xl font-semibold sm:text-5xl text-center mt-32">
                    var Club
                </h1>
                <p className="w-[60%] md:w-[500px] font-medium text-xl 2xl:text-2xl text-center">
                    The Tech Club of RCCIIT on its mission to spread its dev
                    culture among all the enthusiasts and learners
                </p>
                <Link to="/events">
                    <motion.button
                        initial={{ opacity: 0, y: "80%" }}
                        animate={startAnimation && { opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.8,
                            type: "spring",
                            stiffness: 100,
                        }}
                        className="shadow-xl text-white rounded-lg py-2 px-3 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 text-center"
                    >
                        View our Events
                    </motion.button>
                </Link>
            </motion.div>

            <div>
                <img
                    src={python}
                    alt="python"
                    className="absolute top-16 left-20 w-11 sm:w-16"
                />

                <img
                    src={drone}
                    alt="drone"
                    className="absolute top-8 md:top-40 right-4 w-24 sm:w-44"
                />
                <img
                    className="absolute w-24 sm:w-32 top-96 md:top-80 left-4 md:left-[10%]"
                    src={linux}
                    alt="linux"
                />

                {/* <img
                    className="w-16 absolute bottom-20 right-20"
                    src={cpu}
                    alt="cpu"
                /> */}

                <img
                    className="w-11 sm:w-16 absolute bottom-20 right-20"
                    src={database}
                    alt="database"
                />
                {/* <img
                    className="w-16 absolute top-14 right-6 lg:right-[10%] xl:right-[17%]"
                    src={laptop}
                    alt="laptop"
                /> */}
            </div>
        </div>
    );
};

export default DefineClub;
