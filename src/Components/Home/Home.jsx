import React, { Fragment } from "react";
import Header from "./Header/Header";
import DefineClub from "./DefineClub";
import WhatWeDo from "./WhatWeDo";
import HFooter from "./HFooter";
import Domains from "./Domains";

const Home = () => {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
            <Header />
            <DefineClub />
            <WhatWeDo />
            <Domains />
            <HFooter />
        </div>
    );
};

export default Home;
