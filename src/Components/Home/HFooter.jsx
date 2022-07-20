import React from "react";
import clubLogo from "../../Images/RCC Techz (White).png";

const HFooter = () => {
    return (
        <footer className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a
                        href="/"
                        className="flex title-font font-medium items-center md:justify-start justify-center text-white"
                    >
                        <img src={clubLogo} alt="RCCTechz" />
                    </a>
                    <div className="mt-2 text-sm text-gray-500">
                        Created by{" "}
                        <div className="mb-3">
                            <a
                                href="https://www.linkedin.com/in/mayukh-bhowmick-44533a201/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="text-white">
                                    Mayukh Bhowmick
                                </div>
                            </a>
                            {/* <a
                                href="https://www.linkedin.com/in/soham-saha-roy-788115206/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="text-white">Soham Saha Roy</div>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    {[1].map(() => {
                        return (
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                                    Quick Links
                                </h2>
                                <nav className="flex gap-x-7 lg:gap-x-20 flex-col gap-y-9 md:gap-y-0 md:flex-row list-none mb-10">
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-400 hover:text-white"
                                        >
                                            Go to Navbar
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/team"
                                            className="text-gray-400 hover:text-white"
                                        >
                                            Team Page
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/events"
                                            className="text-gray-400 hover:text-white"
                                        >
                                            Event Page
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rcciit.org/"
                                            className="text-gray-400 hover:text-white"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            RCCIIT Website
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/RccTechz"
                                            className="text-gray-400 hover:text-white"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            RCCTechz GitHub Repos
                                        </a>
                                    </li>
                                </nav>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="bg-gray-800 bg-opacity-75">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-400 text-sm text-center sm:text-left">
                        © 2022 RCCTechz
                        {/* <a
                            href="https://twitter.com/knyttneve"
                            rel="noopener noreferrer"
                            className="text-gray-500 ml-1"
                            target="_blank"
                        >
                            @knyttneve
                        </a> */}
                    </p>
                    <span className="inline-flex gap-x-2 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a
                            href="https://www.facebook.com/rcctechz"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-400"
                        >
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://discord.com/channels/837737994650648628/840830875809349642"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-400"
                        >
                            <img
                                src="https://img.icons8.com/fluency/344/discord.png"
                                alt="asd"
                                className="w-5 h-5 text-white"
                            />
                            {/* <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg> */}
                        </a>
                        <a
                            href="https://www.instagram.com/rcctechz/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-400"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/rcctechz/mycompany/"
                            rel="noreferrer"
                            target="_blank"
                            className="ml-3 text-gray-400"
                        >
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle
                                    cx="4"
                                    cy="4"
                                    r="2"
                                    stroke="none"
                                ></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default HFooter;

// eslint-disable-next-line no-lone-blocks
{
    /* <div className="py-24 px-12 bg-black text-white flex flex-row justify-center space-x-48">
    <div>
        <h4 className="font-bold">Title Here</h4>
        <p className="w-44 mt-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Commodi, veritatis.
        </p>
    </div>
    <div>
        <h4 className="font-bold">About</h4>
        <ul className="mt-7 space-y-3">
            <li>History</li>
            <li>Our Team</li>
            <li>Brand Guidelines</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div>
        <h4 className="font-bold">Services</h4>
        <ul className="mt-7 space-y-3">
            <li>How to Order</li>
            <li>Our Product</li>
            <li>Order Status</li>
            <li>Promo</li>
            <li>Payment Method</li>
        </ul>
    </div>
    <div>
    <h4 className="font-bold">Other</h4>
        <ul className="mt-7 space-y-3">
            <li>Contact Us</li>
            <li>Help</li>
            <li>Privacy</li>
            </ul>
    </div>
</div> */
}
