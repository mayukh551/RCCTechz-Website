import React, { useState } from "react";

const Founder = () => {
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

    return <div className="bg-red">Founder</div>;
};

export default Founder;
