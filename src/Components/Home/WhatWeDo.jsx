import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import angular from '../../SVGs/angular.svg'
import jsLogo from "../../SVGs/js.svg";
import javaLogo from "../../SVGs/java.svg";
import gitLogo from  '../../SVGs/git-svgrepo-com.svg'
import class1 from '../../SVGs/feat.svg'
import class2 from '../../SVGs/doubt.svg'
import class3 from '../../SVGs/coding-svgrepo-com.svg'
import contestLogo1 from '../../SVGs/competition-svgrepo-com.svg'
import contestLogo2 from '../../SVGs/hackerrank-svgrepo-com.svg'

const WhatWeDo = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    const content = [
        "Organize Tech and Non-Tech Events",
        "Introductory classes on most in-demand tools & tech stacks",
        "Share Tons of Resources on every tech domain",
    ];

    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        } else {
            setStartAnimation(false);
        }
    }, [inView]);

    return (
        <div
            className={`relative py-6 px-4 min-h-screen`}
            style={{ backgroundColor: "#f5ebe0" }}
            ref={ref}
        >
            <h1 className="text-center w-full text-2xl sm:text-5xl border-white mb-16">
                What we do?
            </h1>
            <motion.div
                initial={{ opacity: 0, y: "50%" }}
                animate={startAnimation && { opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-8 flex flex-row justify-evenly items-center"
            >
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-11">
                    {content.map((c, i) => {
                        return (
                            <div class="p-4 shadow-xl rounded-xl w-[90%] sm:w-[70%] md:w-[300px] flex flex-col gap-y-6 justify-center text-left bg-white py-6 px-4">
                                <p class="leading-relaxed text-lg">{c}</p>
                                {i === 0 && (
                                    // <button class="mt-3 rounded-lg py-2 px-4 text-white bg-indigo-500"></button>
                                    <div className="flex gap-x-3">
                                        <img src={contestLogo1} alt="logo" className="w-11"/>
                                        <img src={contestLogo2} alt="logo" className="w-11"/>
                                    </div>
                                )}
                                {i === 1 && (
                                    // <button class="mt-3 rounded-lg py-2 px-4 text-white bg-indigo-500"></button>
                                    <div className="flex gap-x-3">
                                        <img src={class1} alt="logo" className="w-11"/>
                                        <img src={class2} alt="logo" className="w-11"/>
                                        <img src={class3} alt="logo" className="w-11"/>
                                    </div>
                                )}
                                {i === 2 && (
                                    // <button class="mt-3 rounded-lg py-2 px-4 text-white bg-indigo-500"></button>
                                    <div className="flex gap-x-3">
                                        <img src={angular} alt="logo" className="w-11"/>
                                        <img src={jsLogo} alt="logo" className="w-14"/>
                                        <img src={gitLogo} alt="logo" className="w-11"/>
                                        <img src={javaLogo} alt="logo" className="w-11"/>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* All SVGs */}
            {/* <SvgLogoList styleSvg={""} /> */}
            <div className="my-28">
                <motion.img
                    className="img mx-auto w-[80%] md:w-[70%] h-auto rounded-lg shadow-2xl"
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    alt="Desktop Setup"
                    initial={{ scale: "0.4" }}
                    animate={startAnimation && { scale: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
        </div>
    );
};

export default WhatWeDo;
