import React, { useEffect, useState } from "react";
import CoreTeamMembers from "./CoreTeamMembers";

const CoreTeam = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [collegeYear, setNewCollegeYear] = useState(2);

    const coreTeamDetails = [
        {
            name: "Mayukh Bhowmick",
            profession: "React Developer",
            clubRole: "Coordinator",
            Dept: "CSE",
            year: collegeYear,
        },
        {
            name: "Shagnik Mukherjee",
            profession: "UX Designer",
            clubRole: "Convenor",
            Dept: "CSE",
            year: collegeYear,
        },
        {
            name: "Honu",
            profession: "Gaachhe chora",
            clubRole: "Event Manager",
            Dept: "CSE",
            year: collegeYear,
        },
        {
            name: "MD Saood Khan",
            profession: "Back-End Developer",
            clubRole: "Non-Tech Head",
            Dept: "CSE",
            year: collegeYear,
        },
        {
            name: "Shirsasish Sarkar",
            profession: "ML Engineer",
            clubRole: "Tech Head",
            Dept: "CSE",
            year: collegeYear,
        },
    ];
    // console.log('CoreTeam Component');
    const onCoreTeam = (cond) => {
        console.log('From CoreTeamMembers about backdrop', cond);
        props.sendToMember(cond);
    }

    useEffect(() => {
        console.log('Testing College Year');
    }, [])

    return (
        <div className="py-10 grid grid-rows-5 grid-cols-1 md:grid-cols-2 bp_1100:grid-rows-2 bp_1100:grid-cols-3 gap-y-16 place-items-center">
            {coreTeamDetails.map((member) => {
                return (
                    <CoreTeamMembers
                        sendToCoreTeam={onCoreTeam}
                        key={member.clubRole}
                        coreMember={member}
                    />
                );
            })}
        </div>
    );
};

export default CoreTeam;
