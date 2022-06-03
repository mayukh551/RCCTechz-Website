// import profile from "../../Images/Laptop.jpg";
import ProfileCard from "../UI/ProfileCard";
import { gsap } from "gsap";
import { useEffect, useRef, useContext, useState, Fragment } from "react";
import ExpandedProfile from "./ExpandedProfile";
import TeamContext from "../store/team-context";

const CardBackdrop = () => {
    // console.log("backdrop");
    return (
        <div className="absolute rounded-lg top-0 h-full w-full opacity-40 bg-black z-30"></div>
    );
};

const OffClickProfile = (props) => {
    var coreMember = props.coreMember;

    const teamCtx = useContext(TeamContext);

    const buttonRef = useRef(null);
    const socialMediaRef = useRef(null);
    const [displayBtn, setDisplayBtn] = useState(false);

    const updateProfileView = (e) => {
        console.log("Profile Clicked!");

        // to bring the backdrop and expanded profile component
        // on display
        teamCtx.showBackdropHandler();
        console.log("between");
        teamCtx.viewProfileHandler();
    };

    const mouseEventHandler = () => {
        setDisplayBtn((prevCond) => !prevCond);
    };

    useEffect(() => {
        if (displayBtn) {
            gsap.fromTo(
                buttonRef.current,
                {
                    y: -50,
                },
                {
                    y: 1,
                    duration: 0.2,
                }
            );

            gsap.fromTo(
                socialMediaRef.current,
                {
                    y: 30,
                },
                {
                    y: 1,
                    duration: 0.2,
                }
            );
        }
    }, [displayBtn]);

    console.log("OffClickProfile Comp");
    return (
        // hover:scale-110 hover:dark:bg-gray-700
        <Fragment>
            <ProfileCard
                mouseEventHandler={mouseEventHandler}
                styleCard="z-10 relative cursor-default transition-all duration-200 w-[320px] h-[360px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
                {/* <div className="flex justify-end px-4 pt-4"></div> */}
                <div
                    className={`flex flex-col items-center justify-evenly`}
                    id="myCard"
                >
                    <img
                        className="mb-6 w-36 rounded-lg shadow-lg mt-8"
                        src={`https://randomuser.me/api/portraits/men/14.jpg`}
                        alt="team profile"
                    />
                    <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        {coreMember.name}
                    </h5>
                    {/* <div className="mb-5 text-base text-gray-500 dark:text-gray-400">
                    {coreMember.profession}
                </div> */}
                    <div className="mb-7 text-base text-gray-500 dark:text-gray-400">
                        {coreMember.clubRole}
                    </div>

                    {displayBtn && (
                        <ul
                            className="absolute bottom-12 space-x-6 flex z-50"
                            ref={socialMediaRef}
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
                        </ul>
                    )}

                    {displayBtn && (
                        <>
                            <button
                                ref={buttonRef}
                                onClick={updateProfileView}
                                className="absolute z-50 opacity-100 px-7 py-3 bg-green-800 hover:bg-green-900 text-white font-bold rounded-[10px] text-base"
                            >
                                View Profile
                            </button>
                            <CardBackdrop />
                        </>
                    )}
                </div>
            </ProfileCard>

            {teamCtx.isViewProfile && (
                <ExpandedProfile
                    coreMember={coreMember}
                    // viewProfileHandler={viewProfileHandler}
                />
            )}
        </Fragment>
    );
};

export default OffClickProfile;
