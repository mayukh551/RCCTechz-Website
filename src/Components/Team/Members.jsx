import { useEffect, useRef, useState } from "react";
// import CoreTeam from "./CoreTeam";
import CoreTeamMembers from "./CoreTeamMembers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Members = (props) => {
    const [collegeYear, setNewCollegeYear] = useState(2);
    const sectionCoreTeam = useRef(null);

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

    // useEffect(() => {
    //     let q = gsap.utils.selector(sectionCoreTeam);

    //     gsap.from(q(".member-card"), {
    //         opacity: 0,
    //         scale: 0.6,
    //         duration: 1,
    //         stagger: 0.1,
    //         // repeat: -1,
    //         repeatDelay: 1,
    //         yoyo: true,
    //     });
    // }, []);

    return (
        <div className="px-10">
            <div
                ref={sectionCoreTeam}
                className="py-10 grid grid-rows-5 grid-cols-1 md:grid-cols-2 bp_1100:grid-rows-2 bp_1100:grid-cols-3 gap-y-16 place-items-center"
            >
                {coreTeamDetails.map((member, index) => {
                    return (
                        <CoreTeamMembers
                            key={member.clubRole}
                            coreMember={member}
                            index={index}
                            ref={sectionCoreTeam}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Members;
