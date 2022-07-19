import { Fragment } from "react";
import { teamData } from "./TechzTeamInfo/teamInfo";
import OffClickProfile from "./OffClickProfile";

const Members = (props) => {
    console.log("Members Comp");
    const coreTeamDetails = teamData.coreTeamMembers;
    const domainManagerDetails = teamData.domainManagers;
    // const founderDetails = teamData.founders;

    return (
        <Fragment>
            <div className="sm:px-10 pt-10 mb-20">
                <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                    Core Team
                </h1>
                {/* <div className="py-10 grid grid-rows-5 grid-cols-1 md:grid-cols-2 bp_1100:grid-rows-2 bp_1100:grid-cols-3 gap-y-16 place-items-center"> */}
                <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                    {coreTeamDetails.map((member) => {
                        return (
                            <OffClickProfile
                                key={member.clubRole}
                                coreMember={member}
                                displayModal={props.displayModal}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="sm:px-10 mb-20">
                <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                    Domain Managers
                </h1>
                <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                    {domainManagerDetails.map((member) => {
                        return (
                            <OffClickProfile
                                key={member.clubRole}
                                coreMember={member}
                                displayModal={props.displayModal}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="sm:px-10 mb-20">
                <h1 className="cursor-pointer hover:text-emerald-400 hover:decoration-white duration-200 mb-9 text-3xl sm:text-5xl text-left underline underline-offset-8 decoration-emerald-400">
                    Other Members
                </h1>
                {/* <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                    {founderDetails.map((member) => {
                        return (
                            <OffClickProfile
                                key={member.clubRole}
                                coreMember={member}
                                displayModal={props.displayModal}
                            />
                        );
                    })}
                </div> */}
            </div>
        </Fragment>
    );
};

export default Members;
