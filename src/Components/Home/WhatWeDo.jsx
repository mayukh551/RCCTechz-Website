import SvgLogoList from "./SvgHomeSec2";
// import pcSetup from '../../Images/Monitors.jpg'
// import scrollEffects from '../John.module.css';

import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
    const whatWeDo_ContentRef = useRef(null);
    const whatWeDo_SectionRef = useRef(null);

    useEffect(() => {
        gsap.from(".img", {
            scrollTrigger: {
                trigger: whatWeDo_SectionRef.current,
                toggleActions: "play none none none",
            },
            opacity: 0,
            scale: 0.6,
            duration: 1,
        });

        gsap.from(whatWeDo_ContentRef.current, {
            scrollTrigger: {
                trigger: whatWeDo_SectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none",
            },
            delay: 0.3,
            xPercent: -50,
            duration: 0.7,
            opacity: 0,
        });
    });

    return (
        <div
            className={`relative px-4 sm:px-14 flex flex-col-reverse justify-center xl:flex-row h-screen xl:items-center`}
            style={{ backgroundColor: "#f5ebe0" }}
            ref={whatWeDo_SectionRef}
        >
            <div
                className="mt-9 mb-5 xl:mt-0 xl:mb-8"
                ref={whatWeDo_ContentRef}
            >
                <h1 className="text-left text-3xl xl:text-5xl pl-4 border-l-[10px] border-white">
                    What do we do?
                </h1>
                <p className="content mt-8 pr-0 sm:pr-16 text-left 2xl:text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus sunt unde nemo eius, eligendi sapiente omnis
                    asperiores repudiandae ducimus quisquam? Iste esse dolore
                    suscipit, minus corporis tempora consequuntur adipisci
                    voluptas, numquam error facilis at. Temporibus magnam quae
                    nisi perferendis, atque repellat vitae nemo hic suscipit
                    numquam a, earum veniam deleniti!
                </p>
            </div>
            <img
                className="img w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[47%] h-auto rounded-lg shadow-2xl"
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="Desktop Setup"
            />

            {/* All SVGs */}
            <SvgLogoList styleSvg={""} />
        </div>
    );
};

export default WhatWeDo;
