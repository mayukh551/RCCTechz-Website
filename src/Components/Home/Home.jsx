import React from "react";
import Header from "./Header/Header";
import DefineClub from "./DefineClub";
import WhatWeDo from "./WhatWeDo";
import HFooter from "./HFooter";
import Domains from "./Domains";
import Stats from "./Stats";
import ClubFeatures from "./ClubFeatures";

const Home = () => {
    return (
        <div className="h-screen">
            <Header />
            <DefineClub />
            <WhatWeDo />
            <Stats />
            <ClubFeatures />
            <Domains />
            <HFooter />
        </div>
    );
};

export default Home;
