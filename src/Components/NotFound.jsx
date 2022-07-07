import React from "react";

const NotFound = () => {
    return (
        <div className="h-screen bg-orange-500 flex flex-col items-center justify-center space-y-8">
            <div className="text-9xl font-extrabold">404 Error</div>
            <div className="space-y-5 text-center">
                <h1 className="font-bold text-5xl">Brother!</h1>
                <h3 className="font-bold text-4xl pl-9">Brother Idhar . . .</h3>
                <div className="font-semibold text-2xl">
                    Aap yaha par kis lie?
                </div>
            </div>
        </div>
    );
};

export default NotFound;
