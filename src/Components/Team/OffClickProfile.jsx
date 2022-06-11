import ProfileCard from "../UI/ProfileCard";
import { useContext, useState, Fragment } from "react";
import ExpandedProfile from "./ExpandedProfile";
import TeamContext from "../store/team-context";

import { motion, AnimatePresence } from "framer-motion";

const CardBackdrop = () => {
    return (
        <div className="absolute rounded-lg top-0 h-full w-full opacity-40 bg-black z-30"></div>
    );
};

const OffClickProfile = (props) => {
    var coreMember = props.coreMember;

    const teamCtx = useContext(TeamContext);
    const [displayBtn, setDisplayBtn] = useState(false);

    const updateProfileView = () => {
        console.log("Profile Clicked!");

        // to bring the backdrop and expanded profile component
        // on display

        teamCtx.viewProfileHandler();
    };

    const mouseEventHandler = () => {
        setDisplayBtn((prevCond) => !prevCond);
    };

    console.log("OffClickProfile Comp");
    return (
        // hover:scale-110 hover:dark:bg-gray-700
        <Fragment>
            <ProfileCard
                Card
                mouseEventHandler={mouseEventHandler}
                hoverAnim={displayBtn}
                styleCard="z-10 relative cursor-default transition-all duration-200 w-[90%] sm:w-[320px] h-[360px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
                {/* <div className="flex justify-end px-4 pt-4"></div> */}
                <div
                    className={`flex flex-col items-center h-full justify-center`}
                    id="myCard"
                >
                    <div>
                        <img
                            className="mb-6 min-w-full sm:w-44 rounded-full shadow-lg mt-8"
                            src={`https://randomuser.me/api/portraits/men/14.jpg`}
                            alt="team profile"
                        />
                    </div>
                    <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        {coreMember.name}
                    </h5>
                    {/* <div className="mb-5 text-base text-gray-500 dark:text-gray-400">
                    {coreMember.profession}
                </div> */}
                    <div className="mb-7 text-base text-gray-500 dark:text-gray-400">
                        {coreMember.clubRole}
                    </div>
                    {displayBtn && <CardBackdrop />}
                    <AnimatePresence>
                        {displayBtn && (
                            <motion.ul
                                key="socialMedia"
                                className="absolute bottom-12 space-x-6 flex z-50"
                                initial={{ y: 30 }}
                                animate={{ y: 1 }}
                                transition={{ duration: 0.2 }}
                                exit={{ y: 30, opacity: 0 }}
                            >
                                <li className="active:animate-ping cursor-pointer">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://twitter.com/"
                                    >
                                        <i className="mx-2 bi bi-twitter text-white hover:text-sky-300"></i>
                                    </a>
                                </li>
                                <li className="active:animate-ping cursor-pointer">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://github.com/"
                                    >
                                        <i className="mx-2 bi bi-reddit text-white hover:text-orange-600"></i>
                                    </a>
                                </li>
                                <li className="active:animate-ping cursor-pointer">
                                    <i className="mx-2 bi bi-linkedin text-white hover:text-sky-500"></i>
                                </li>
                            </motion.ul>
                        )}
                        {displayBtn && (
                            <>
                                <motion.button
                                    onClick={updateProfileView}
                                    className="absolute z-50 opacity-100 px-7 py-3 bg-green-800 hover:bg-green-900 text-white font-bold rounded-[10px] text-base"
                                    initial={{ y: -50 }}
                                    animate={{ y: 1 }}
                                    transition={{ duration: 0.2 }}
                                    exit={{ y: -50, opacity: 0 }}
                                >
                                    View Profile
                                </motion.button>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </ProfileCard>

            {teamCtx.isViewProfile && (
                <ExpandedProfile coreMember={coreMember} />
            )}
        </Fragment>
    );
};

export default OffClickProfile;
