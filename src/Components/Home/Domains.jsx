import React, { useEffect, useRef, useState } from "react";
import DomainCard from "./DomainCard";

import { useInView } from "react-intersection-observer";

const Domains = () => {
    const [domainDetails, setNewDomainDetails] = useState([
        {
            show: false,
            manager: "Soham Saha Roy",
            domainName: "Web Development",
            
        },
        {
            show: false,
            manager: "Soham Banerjee",
            domainName: "Cyber Security",
            
        },
        {
            show: false,
            manager: "Nishant Thakur",
            domainName: "Competitive Programming",
            
        },
        {
            show: false,
            manager: "Rishav Mandal",
            domainName: "App Development",
            
        },
        {
            show: false,
            manager: "Triasis Ghosh",
            domainName: "Artificial Intelligence & Machine Learning",
            // domainName: "AI/ML",     
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
        <div className={`py-10 relative bg-slate-800 min-h-screen`}>
            {" "}
            <div
                ref={domainTitle}
                // className="hidden sm:inline-block absolute tracking-widest -left-24 lg:-left-36 top-[40%] bg-black text-4xl lg:text-6xl px-8 py-4 text-white -rotate-90"
                className="text-4xl lg:text-6xl px-8 py-4 text-white text-center"
            >
                Domains
            </div>
            <div
                ref={ref}
                // className={`relative py-11 px-10 justify-items-center grid md:grid-rows-2 md:grid-cols-2 md:grid-flow-col gap-y-7 md:gap-y-16 bg-slate-800 h-screen`}
                className={`relative py-11 px-10 flex justify-center flex-wrap gap-x-16 gap-y-16`}
            >
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
        </div>
    );
};

export default Domains;
