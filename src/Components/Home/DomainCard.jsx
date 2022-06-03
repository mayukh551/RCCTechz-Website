import React from "react";
import ai from "../../SVGs/artificial_intelligence.svg";
import webdev from "../../SVGs/web_development.svg";
import cyberSecurity from "../../SVGs/Cyber_Security.svg";
import cp from "../../SVGs/programming.svg";

const DomainCard = React.forwardRef((props, ref) => {
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
        <div
            ref={ref}
            onClick={displayContent}
            className={`cursor-pointer pb-0 px-5 pt-3 md:pb-7 flex items-center md:flex-col ${
                domain.show === false
                    ? "justify-between"
                    : "justify-between md:justify-center text-white md:text-black space-y-9"
            } w-full sm:w-[57%]  md:w-[60%] lg:w-[55%] xl:w-[50%] md:hover:bg-zinc-200 md:bg-zinc-300 shadow-lg rounded-lg`}
        >
            {/* md:hover:w-[70%] lg:hover:w-[60%] */}
            {/* hover:scale-110 transition-all duration-300 */}
            {domain.show === false ? (
                <>
                    <img className="w-28 md:w-40" src={svg} alt="" />
                    <h2 className="font-bold text-right text-white md:text-black md:text-left text-sm md:text-base lg:text-lg">
                        {domain.domainName}
                    </h2>
                </>
            ) : (
                <>
                    <h1 className="font-bold text-sm md:text-lg">
                        Domain Manager
                    </h1>
                    <h1 className="text-sm md:text-base font-semibold">
                        {domain.manager}
                    </h1>
                </>
            )}
        </div>
    );
});

export default DomainCard;
