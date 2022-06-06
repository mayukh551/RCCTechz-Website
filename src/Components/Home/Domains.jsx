import React, { useEffect, useRef, useState } from "react";
import DomainCard from "./DomainCard";

import { useInView } from "react-intersection-observer";

const Domains = () => {
    const [domainDetails, setNewDomainDetails] = useState([
        {
            show: false,
            manager: "Shirsasish Sarkar",
            domainName: "Web Development",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sapiente rerum cumque excepturi tempore nesciunt!",
        },
        {
            show: false,
            manager: "Soham Banerjee",
            domainName: "Cyber Security",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sapiente rerum cumque excepturi tempore nesciunt!",
        },
        {
            show: false,
            manager: "MD Saood Khan",
            domainName: "Competitive Programming",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sapiente rerum cumque excepturi tempore nesciunt!",
        },
        // {
        //     domainName: "App Development",
        //     description:
        //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sapiente rerum cumque excepturi tempore nesciunt!",
        // },
        {
            show: false,
            manager: "Triasis Ghosh",
            domainName: "Artificial Intelligence & Machine Learning",
            // domainName: "AI/ML",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sapiente rerum cumque excepturi tempore nesciunt!",
        },
    ]);

    const domainTitle = useRef(null);

    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) setStartAnimation(true);
        else setStartAnimation(false);
    }, [inView]);

    var tempdomainDetails = domainDetails;

    const updateList = (domain) => {
        console.log("updateList() templist", tempdomainDetails);
        tempdomainDetails.forEach((element) => {
            // console.log(element.domainName, domain.domainName);
            if (element.domainName === domain.domainName)
                element.show = !element.show;
            else element.show = false;
        });

        setNewDomainDetails([...tempdomainDetails]);
    };

    return (
        <div
            // ref={scrollTriggerDiv}
            ref={ref}
            className={`relative py-11 px-10 justify-items-center grid md:grid-rows-2 md:grid-cols-2 md:grid-flow-col gap-y-7 md:gap-y-16 bg-slate-800 h-screen`}
        >
            <h1
                ref={domainTitle}
                className="hidden sm:inline-block absolute tracking-widest -left-24 lg:-left-36 top-[40%] bg-black text-4xl lg:text-6xl px-8 py-4 text-white -rotate-90"
            >
                Domains
            </h1>

            {domainDetails.map((domain, i) => {
                return (
                    <DomainCard
                        key={domain.domainName}
                        domain={domain}
                        updateList={updateList}
                        startAnimation={startAnimation}
                        i={i}
                    />
                );
            })}
        </div>
    );
};

export default Domains;
