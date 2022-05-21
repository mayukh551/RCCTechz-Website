import React from "react";
import { Link } from "react-router-dom";

const TeamHeader = () => {

    return (
        <div className="border-2 border-white h-[140px] pt-7 flex flex-col justify-between items-center">
            <h1 className="text-center text-4xl">
                Meet the <span className="font-extrabold shadow-xl py-2 px-4 text-orange-500">Team</span>
            </h1>
            <ul className="mb-2 text-sm bp_650:text-lg flex flex-row space-x-16">
                <li className="cursor-pointer"><Link to="/team/coreTeam">Core Team</Link></li>
                <li className="cursor-pointer"><Link to="/team/domainManagers">Domain Managers</Link></li>
                <li className="cursor-pointer">Rest</li>
                <li className="cursor-pointer"><Link to="/team/founders">Founder</Link></li>
            </ul>
            {/* <ul className="mb-2 text-lg flex flex-row space-x-16">
                <li className="cursor-pointer"><Link to="/team/coreTeam">Core Team</Link></li>
                <li className="cursor-pointer"><Link to="/team/domainManagers">Domain Managers</Link></li>
                <li className="cursor-pointer">Rest</li>
                <li className="cursor-pointer"><Link to="/team/founders">Founder</Link></li>
            </ul> */}
        </div>
    );
};

export default TeamHeader;
