import cpu from "../../SVGs/cpu.svg";
import database from "../../SVGs/database.svg";
import laptop from "../../SVGs/laptop.svg";
import style from "./DefineClub.module.css";
import linux from "../../SVGs/linux.svg";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DefineClub = () => {
    const imgPC = useRef(null);
    const contentDefine = useRef(null);
    const headingDefine = useRef(null);
    const btn = useRef(null);
    const scrollTriggerDiv = useRef(null);

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
            className={`relative flex flex-row items-center h-screen text-white`}
            style={{ color: "#f1faee", backgroundColor: "#e63946" }}
            ref={ref}
        >
            <motion.img
                initial={{ x: "-100%" }}
                animate={startAnimation && { x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-auto h-full hidden lg:inline-block "
                src="https://images.unsplash.com/photo-1523289619259-44358ba02ba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60"
                alt=""
            />
            <motion.div
                initial={{ opacity: 0, y: "-10%" }}
                animate={startAnimation && { opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className={`px-4 sm:pl-14 sm:pr-20 text-justify ${style.content}`}
            >
                <h1
                    className="defineClub-headingDefine text-2xl sm:text-5xl pl-4 border-l-[10px] text-left"
                    style={{ borderColor: "#a8dadc" }}
                >
                    What are we?
                </h1>
                <p className="mt-8 w-full md:w-[70%] font-medium text-left 2xl:text-2xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nihil voluptates quae nostrum mollitia quod exercitationem
                    obcaecati. Maxime consequuntur quas laboriosam? Impedit
                    delectus corrupti pariatur minima rem tempore dolorum
                    doloribus expedita molestiae repudiandae dolor eius atque
                    officiis quisquam voluptatum, voluptatem voluptates
                    repellendus. Et necessitatibus dolores similique ab
                    doloremque pariatur repellendus labore?
                </p>
                <motion.button
                    initial={{ opacity: 0, y: "80%" }}
                    animate={startAnimation && { opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                    ref={btn}
                    className="rounded-lg mt-11 py-2 px-3 bg-slate-700 hover:bg-slate-600 active:bg-slate-500"
                >
                    Know More
                </motion.button>
            </motion.div>

            <div className={`${style.svg}`}>
                <img
                    className="absolute hidden sm:inline-block w-16 left-[37%] md:left-[50%] bottom-[5%] lg:hidden "
                    src={linux}
                    alt=""
                />

                <img
                    className="w-16 absolute bottom-20 right-20"
                    src={cpu}
                    alt="cpu"
                />
                <img
                    className={`hidden xl:block w-16 absolute bottom-14 left-1/2 ${style.database}`}
                    src={database}
                    alt="database"
                />
                <img
                    className="w-16 absolute top-14 right-6 lg:right-[10%] xl:right-[17%]"
                    src={laptop}
                    alt="laptop"
                />
            </div>
        </div>
    );
};

export default DefineClub;
