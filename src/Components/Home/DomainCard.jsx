import React from "react";
import ai from "../../SVGs/artificial_intelligence.svg";
import webdev from "../../SVGs/web_development.svg";
import cyberSecurity from "../../SVGs/Cyber_Security.svg";
import cp from "../../SVGs/programming.svg";
import { motion } from "framer-motion";

const DomainCard = (props) => {
    var domain = props.domain;

    const displayContent = () => {
        props.updateList(domain);
    };

    var svg = "";
    if (domain.domainName === "Web Development") svg = webdev;
    if (domain.domainName === "Cyber Security") svg = cyberSecurity;
    if (domain.domainName === "Competitive Programming") svg = cp;
    if (domain.domainName === "Artificial Intelligence & Machine Learning")
        svg = ai;
    // if (domain.domainName === "AI/ML") svg = ai;

    return (
        <motion.div
            onClick={displayContent}
            className={`cursor-pointer pb-0 px-5 pt-3 md:pb-7 flex items-center flex-col ${
                domain.show === false
                    ? "justify-evenly"
                    : " justify-center text-black space-y-9"
            } w-80 h-72 hover:bg-zinc-200 bg-zinc-300 shadow-lg rounded-lg`}
            // w-full sm:w-[57%]  md:w-[60%] lg:w-[55%] xl:w-[50%]
            initial={{ opacity: 0, scale: 0 }}
            animate={
                props.startAnimation && {
                    opacity: 1,
                    scale: 1,
                }
            }
            transition={{ duration: 1, delay: props.i * 0.2 }}
        >
            {domain.show === false ? (
                <>
                    <img className="w-[50%] md:w-40" src={svg} alt="" />
                    <h2 className="font-bold text-right text-black md:text-left text-base lg:text-lg">
                        {domain.domainName}
                    </h2>
                </>
            ) : (
                <>
                    <h1 className="font-bold text-base md:text-lg">
                        Domain Manager
                    </h1>
                    <h1 className="text-base md:text-base font-semibold">
                        {domain.manager}
                    </h1>
                </>
            )}
        </motion.div>
    );
};

export default DomainCard;
