import React from "react";

const Backdrop = (props) => (
    <div
        onClick={() => props.closeBackdrop()}
        className="z-30 bg-black opacity-70 h-screen w-screen absolute top-0 left-0"
    ></div>
);

export default Backdrop;
