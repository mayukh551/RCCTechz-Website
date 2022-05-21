import styles from "../../App.css";
import javaLogo from "../../SVGs/java.svg";
import pythonLogo from "../../SVGs/python.svg";
import angLogo from "../../SVGs/angular.svg";
import reactLogo from "../../SVGs/react.svg";
import jsLogo from "../../SVGs/js.svg";
import classes from './SvgHomeSec2.module.css'

const SvgLogoList = (props) => {
    return (
        <div className={classes.animateSvg}>
            {/* React SVG */}
            <img
                className={`absolute hidden sm:inline-block sm:top-32 md:top-24 sm:right-7 md:right-12 xl:top-3 xl:left-6 ${styles.App} w-32`}
                src={reactLogo}
                alt="reactLogo"
            />

            {/* Angular SVG */}
            <img
                className={`absolute hidden lg:inline-block lg:top-[33%] lg:right-[40%] xl:top-[80%] xl:left-[40%]`}
                src={angLogo}
                alt="reactLogo"
            />

            {/* JS SVG */}
            <img
                className="absolute hidden sm:inline-block sm:w-16 top-0 right-[25%] md:w-24"
                src={jsLogo}
                alt="python"
            />

            {/* Python SVG */}
            <img
                className="absolute hidden sm:inline-block sm:top-64 sm:right-[30%] md:right-[20%] xl:top-16 xl:left-[30%] sm:w-10 md:w-16"
                src={pythonLogo}
                alt="python"
            />

            {/* Java SVG */}
            <img
                className="absolute hidden xl:inline-block bottom-8 right-40 w-36"
                src={javaLogo}
                alt="java"
            />
        </div>
    );
};

export default SvgLogoList;
