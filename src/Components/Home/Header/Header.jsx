import classes from "./Header.module.css";
import Navbar from "./Navbar";
// import clubLogo from "../../../Images/RCC Techz (White).png";

import { motion } from "framer-motion";

const Header = () => {
    // const [renderCond, setRenderCond] = useState(true);

    return (
        <div className={`relative h-screen ${classes.header__image}`}>
            <Navbar/>
            {/* <motion.img
                src={clubLogo}
                alt="RCCTechz"
                className="w-96 absolute top-[25%] right-9"
                initial={{ scale: 0.4 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
            /> */}
            <div
                className={`absolute left-4 md:left-[120px] lg:left-[137px] text-5xl sm:text-5xl lg:text-7xl bottom-52 text-white font-semibold `}
            >
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className="mb-6"
                >
                    The Tech Club
                </motion.div>
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeOut", duration: 0.5 }}
                >
                    of <span className={`text-cyan-600`}>RCC</span>IIT
                </motion.div>
            </div>
            <motion.div
                className={`font-bold border-l-[20px] border-cyan-500 pl-7 sm:pl-12 text-6xl sm:text-7xl lg:text-9xl text-white absolute left-4 sm:left-9 md:left-16 bottom-10`}
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.7 }}
            >
                RCC<span className="text-orange-600">Techz</span>
            </motion.div>
        </div>
    );
};

export default Header;
