import styles from "../../App.css";
import javaLogo from "../../SVGs/java.svg";
import pythonLogo from "../../SVGs/python.svg";
import angLogo from "../../SVGs/angular.svg";
import reactLogo from "../../SVGs/react.svg";
import jsLogo from "../../SVGs/js.svg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const SvgLogoList = (props) => {
    const { ref, inView } = useInView();

    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        } else {
            setStartAnimation(false);
        }
    }, [inView]);

    return (
        <motion.div ref={ref}>
            {/* React SVG */}
            {/* <motion.img
                className={`tech-svg absolute hidden sm:inline-block sm:top-32 md:top-24 sm:right-7 md:right-12 xl:top-3 xl:left-6 ${styles.App} w-32`}
                src={reactLogo}
                alt="reactLogo"
                initial={{ opacity: 0.4, scale: 0 }}
                animate={startAnimation && { opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
            /> */}
            {/* <ReactSvg startAnimation={startAnimation} /> */}

            {/* Angular SVG */}
            <motion.img
                className={`tech-svg absolute hidden lg:inline-block lg:top-[33%] lg:right-[40%] xl:top-[80%] xl:left-[40%]`}
                src={angLogo}
                alt="angLogo"
                initial={{ opacity: 0.4, scale: 0 }}
                animate={startAnimation && { opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
            />

            {/* JS SVG */}
            {/* <motion.img
                className="tech-svg absolute hidden sm:inline-block sm:w-16 top-0 right-[25%] md:w-24"
                src={jsLogo}
                alt="JS"
                initial={{ opacity: 0.4, scale: 0 }}
                animate={startAnimation && { opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
            /> */}

            {/* Python SVG */}
            {/* <motion.img
                className="tech-svg absolute hidden sm:inline-block sm:top-64 sm:right-[30%] md:right-[20%] xl:top-16 xl:left-[30%] sm:w-10 md:w-16"
                src={pythonLogo}
                alt="python"
                initial={{ opacity: 0.4, scale: 0 }}
                animate={startAnimation && { opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
            /> */}

            {/* Java SVG */}
            <motion.img
                className="tech-svg absolute hidden xl:inline-block bottom-8 right-40 w-36"
                src={javaLogo}
                alt="java"
                initial={{ opacity: 0.4, scale: 0 }}
                animate={startAnimation && { opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
            />
        </motion.div>
    );
};

export default SvgLogoList;
