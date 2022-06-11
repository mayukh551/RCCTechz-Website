import { Fragment, useEffect, useState } from "react";
import teamData from "../Team/TechzTeamInfo/teamInfo.json";
import OffClickProfile from "./OffClickProfile";

// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

const Members = () => {
    // const { ref, inView } = useInView({
    //     threshold: 0.2,
    // });

    // const [startAnimation, setAnim] = useState(false);

    // useEffect(() => {
    //     if (inView) setAnim(true);
    //     else setAnim(false);
    // }, [inView]);

    console.log("Members Comp");
    const coreTeamDetails = teamData.coreTeamMembers;
    const domainManagerDetails = teamData.domainManagers;
    const founderDetails = teamData.founders;

    return (
        <Fragment>
            <div className="sm:px-10 pt-10 mb-20">
                <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                    Core Team
                </h1>
                {/* <div className="py-10 grid grid-rows-5 grid-cols-1 md:grid-cols-2 bp_1100:grid-rows-2 bp_1100:grid-cols-3 gap-y-16 place-items-center"> */}
                <div className="py-10 flex flex-wrap justify-evenly gap-y-16 place-items-center">
                    {coreTeamDetails.map((member) => {
                        return (
                            <OffClickProfile
                                key={member.clubRole}
                                coreMember={member}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="sm:px-10 mb-20">
                <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                    Domain Managers
                </h1>
                <div className="py-10 flex flex-wrap justify-evenly gap-y-16 place-items-center">
                    {domainManagerDetails.map((member) => {
                        return (
                            <OffClickProfile
                                key={member.clubRole}
                                coreMember={member}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="sm:px-10 mb-20">
                <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                    Founders
                </h1>
                <div className="py-10 flex flex-wrap justify-evenly gap-y-16 place-items-center">
                    {founderDetails.map((member) => {
                        return (
                            <OffClickProfile
                                key={member.clubRole}
                                coreMember={member}
                            />
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default Members;
