import classes from "./Header.module.css";
import Navbar from "./Navbar";
import clubLogo from "../../../Images/RCC Techz (White).png";

import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className={`relative min-h-screen ${classes.header__image}`}>
            <Navbar />
            <div
                className={`h-full flex flex-col lg:flex-row items-center lg:justify-evenly text-4xl lg:text-6xl text-white font-semibold `}
            >
                <motion.img
                    src={clubLogo}
                    alt="RCCTechz"
                    className="w-96 lg:w-[480px]"
                    initial={{ opacity: 0.2, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
                <div>
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
                        The Tech Club
                    </motion.div>
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 1,
                            ease: "easeOut",
                            duration: 0.5,
                        }}
                    >
                        of <span className={`text-cyan-600`}>RCC</span>IIT
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Header;
