import styles from "../../App.css";
import javaLogo from "../../SVGs/java.svg";
import pythonLogo from "../../SVGs/python.svg";
import angLogo from "../../SVGs/angular.svg";
import reactLogo from "../../SVGs/react.svg";
import jsLogo from "../../SVGs/js.svg";
import classes from "./SvgHomeSec2.module.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const SvgLogoList = (props) => {
    const svgHolderDiv = useRef(null);

    useEffect(() => {
        const sgvs = gsap.utils.toArray(".tech-svg");
        sgvs.forEach((svg) => {
            gsap.from(svg, {
                scrollTrigger: {
                    trigger: svgHolderDiv.current,
                    start: "top 70%",
                },
                // delay: 0.1,
                opacity: 0.4,
                scale: 0,
                duration: 0.5,
            });
        });
    }, []);

    return (
        <div ref={svgHolderDiv} className={classes.animateSvg}>
            {/* React SVG */}
            <img
                className={`tech-svg absolute hidden sm:inline-block sm:top-32 md:top-24 sm:right-7 md:right-12 xl:top-3 xl:left-6 ${styles.App} w-32`}
                src={reactLogo}
                alt="reactLogo"
            />

            {/* Angular SVG */}
            <img
                className={`tech-svg absolute hidden lg:inline-block lg:top-[33%] lg:right-[40%] xl:top-[80%] xl:left-[40%]`}
                src={angLogo}
                alt="reactLogo"
            />

            {/* JS SVG */}
            <img
                className="tech-svg absolute hidden sm:inline-block sm:w-16 top-0 right-[25%] md:w-24"
                src={jsLogo}
                alt="python"
            />

            {/* Python SVG */}
            <img
                className="tech-svg absolute hidden sm:inline-block sm:top-64 sm:right-[30%] md:right-[20%] xl:top-16 xl:left-[30%] sm:w-10 md:w-16"
                src={pythonLogo}
                alt="python"
            />

            {/* Java SVG */}
            <img
                className="tech-svg absolute hidden xl:inline-block bottom-8 right-40 w-36"
                src={javaLogo}
                alt="java"
            />
        </div>
    );
};

export default SvgLogoList;
