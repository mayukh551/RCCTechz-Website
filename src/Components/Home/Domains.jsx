import React, { useEffect, useRef, useState } from "react";
import DomainCard from "./DomainCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    const scrollTriggerDiv = useRef(null);
    // const domainCard = useRef(null);
    const domainCardRefs = useRef([]);

    useEffect(() => {
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: scrollTriggerDiv.current,
                start: "top 70%",
            },
        });
        t1.from(domainTitle.current, {
            opacity: 0,
            xPercent: -100,
            duration: 0.6,
        }).fromTo(
            domainCardRefs.current,
            {
                opacity: 0,
                scale: 0.3,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.1,
                // repeat: -1,
                repeatDelay: 1,
                yoyo: true,
            }
        );
    }, []);

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

    // useEffect(() => {
    //     // console.log("useEffect -> Domains.jsx ->", domainDetails);
    // }, [domainDetails]);

    return (
        <div
            ref={scrollTriggerDiv}
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
                        // ref={domainCard}
                        key={domain.domainName}
                        domain={domain}
                        updateList={updateList}
                        ref={(e) => (domainCardRefs.current[i] = e)}
                    />
                );
            })}
        </div>
    );
};

export default Domains;
