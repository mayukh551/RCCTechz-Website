import classes from "./Header.module.css";
import Navbar from "./Navbar";
import clubLogo from "../../../Images/RT Logo.png";

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
                className={`px-9 h-screen flex flex-col lg:flex-row items-center justify-evenly text-4xl lg:text-6xl text-black font-semibold w-full`}
            >
                <motion.img
                    src={clubLogo}
                    alt="RCCTechz"
                    className="pl-12 lg:pl-0 w-80 md:w-96 lg:w-[450px]"
                    initial={{ opacity: 0.2, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
                <div className="md:pl-10 md:pt-10 text-center lg:text-left">
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.7,
                        }}
                        className="mb-6"
                    >
                        Club for
                    </motion.div>
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 1,
                            ease: "easeOut",
                            duration: 0.5,
                        }}
                        className="mb-6"
                    >
                        {/* of <span className={`text-cyan-600`}>RCC</span>IIT */}
                        <span className={`text-cyan-600 font-bold`}>Nerds</span> & <span className={`text-green-600 font-bold`}>Geeks</span>
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
