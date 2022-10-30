import classes from "./Header.module.css";
import Navbar from "./Navbar";
import clubLogo from "../../../Images/RT Logo.png";
import startupLogo from '../Header/socialMediaSVG/startup-rocket-svgrepo-com.svg'

import { motion } from "framer-motion";

const Header = () => {
    return (
        // <div className={`relative min-h-screen ${classes.header__image}`}>
        <div className={`relative min-h-screen`}
            style={{ backgroundColor: "#f5ebe0" }}
        >
            <Navbar />
            <div
                // className={`h-full flex flex-col lg:flex-row items-center lg:justify-evenly text-4xl lg:text-6xl text-white font-semibold`}
                className={`px-9 h-screen flex flex-col lg:flex-row items-center justify-evenly text-black font-semibold w-full`}
            >
                <motion.img
                    src={clubLogo}
                    alt="RCCTechz"
                    className="pl-12 lg:pl-0 w-80 md:w-96 lg:w-[450px]"
                    initial={{ opacity: 0.2, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
                <div className="lg:pl-10 lg:pt-10 flex flex-col items-center lg:items-start text-center lg:text-left text-4xl lg:text-6xl">
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.7,
                        }}
                        className="mb-6 flex gap-x-4"
                    >
                        <span>RCCTechz</span><span><img src={startupLogo} className='w-11 md:w-12 lg:w-16' alt="startup" /></span>
                    </motion.div>
                    <motion.div
                        initial={{ y: "40%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 1,
                            ease: "easeOut",
                            duration: 0.5,
                        }}
                        className="mb-6 text-base md:text-lg"
                    >
                        {/* <span className={`text-cyan-600 font-bold`}>Nerds</span> & <span className={`text-green-600 font-bold`}>Geeks</span> */}
                        <div>Your<span className={`text-cyan-600 font-bold`}> Mentor.</span> Your<span className={`text-green-600 font-bold`}> Guide.</span></div>
                        <div className="mt-2 w-[100%] md:w-[500px]">To help you get started with software development and guide you in your growth and achievements in Tech</div>
                    </motion.div>
                    <div>
                        <a rel="noreferrer" href="https://discord.gg/BQeShbsXQB" target="_blank">
                            <button className={`bi bi-discord rounded-full shadow-lg px-8 py-4 text-base font-semibold hover:shadow-2xl hover:-translate-y-1 duration-300 ${classes['btn-discord']}`}
                            // style={{ backgroundColor: "#8D9FFF" }}
                            > Discord</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
