import profile from "../../Images/Laptop.jpg";
import ProfileCard from "../UI/ProfileCard";

const OffClickProfile = (props) => {
    var coreMember = props.coreMember;
    const coreTeamProfileHandler = (e) => {
        // goToTop();
        if (e.target.localName !== "i") {
            // console.log("element chosen : ", e.target.localName);
            // console.log(window.innerHeight, e.clientY);
            // console.log(window.innerHeight / e.clientY);
            props.displayEventHandler(true, e.clientY / window.innerHeight);
        }
    };

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        // <div

        //     className="cursor-default hover:scale-110 hover:dark:bg-gray-700 transition-all duration-200 w-[320px] h-[360px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        // >
        <ProfileCard styleCard="cursor-default hover:scale-110 hover:dark:bg-gray-700 transition-all duration-200 w-[320px] h-[360px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            {/* <div className="flex justify-end px-4 pt-4"></div> */}
            <div
                onClick={coreTeamProfileHandler}
                className="flex flex-col items-center justify-evenly pt-10"
                id="myCard"
            >
                <img
                    className="mb-6 w-24 h-24 rounded-full shadow-lg"
                    src={profile}
                    alt=""
                />
                <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    {coreMember.name}
                </h5>
                <div className="mb-5 text-base text-gray-500 dark:text-gray-400">
                    {coreMember.profession}
                </div>
                <div className="mb-7 text-base text-gray-500 dark:text-gray-400">
                    {coreMember.clubRole}
                </div>
                <div className="">
                    <ul className="space-x-6 flex">
                        <li className="active:animate-ping cursor-pointer">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://twitter.com/"
                            >
                                <i className="mx-2 bi bi-twitter text-white"></i>
                            </a>
                        </li>
                        <li className="active:animate-ping cursor-pointer">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://github.com/"
                            >
                                <i className="mx-2 bi bi-github text-white"></i>
                            </a>
                        </li>
                        <li className="active:animate-ping cursor-pointer">
                            <i className="mx-2 bi bi-linkedin text-white"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </ProfileCard>
    );
};

export default OffClickProfile;
