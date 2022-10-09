import { Fragment, useEffect } from "react";
import { teamData } from "./TechzTeamInfo/teamInfo";
import OffClickProfile from "./OffClickProfile";
import { fetchImagesFromFirebase } from "./Team_Images/teamImagesFirebaseStore";
import { useState } from "react";

const Members = (props) => {
    console.log("Members Comp");
    const coreTeamDetails = teamData.coreTeamMembers;
    const domainManagerDetails = teamData.domainManagers;
    const graphicsDesignersDetails = teamData.graphicsDesigners;
    const techTeamDetails = teamData.techTeam;

    const [imgList, setImgList] = useState({ list: [], isLoading: true });
    const [dMimgList, setDmImgList] = useState({ list: [], isLoading: true });
    const [gDimgList, setgDImgList] = useState({ list: [], isLoading: true });
    const [techImgList, setTechImgList] = useState({ list: [], isLoading: true });

    useEffect(() => {
        fetchImagesFromFirebase("BoardTeam/").then((listOfImg) => {
            setImgList({ list: [...listOfImg], isLoading: false });
        });

        fetchImagesFromFirebase("DomainManagers/").then((listOfImg) => {
            setDmImgList({ list: [...listOfImg], isLoading: false });
        });

        fetchImagesFromFirebase("GraphicsDesigners/").then((listOfImg) => {
            setgDImgList({ list: [...listOfImg], isLoading: false });
        });

        fetchImagesFromFirebase("TechTeam/").then((listOfImg) => {
            setTechImgList({ list: [...listOfImg], isLoading: false });
        });
    }, []);

    return (
        <Fragment>
            <div className="sm:px-10 pt-10 mb-20">
                {!imgList.isLoading && (
                    <>
                        <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                            Board Members
                        </h1>
                        <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                            {coreTeamDetails.map((member, index) => {
                                return (
                                    <OffClickProfile
                                        key={index}
                                        coreMember={member}
                                        displayModal={props.displayModal}
                                        imgList={imgList.list}
                                        memberType={true}
                                        index={index}
                                    />
                                );
                            })}
                        </div>
                    </>
                )}

                {imgList.isLoading && (
                    <h1 className="text-xl text-white text-center">
                        Loading Content . . .
                    </h1>
                )}
            </div>
            <div className="sm:px-10 mb-20">
                <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                    Domain Managers
                </h1>
                {!dMimgList.isLoading && (
                    <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                        {domainManagerDetails.map((member, index) => {
                            return (
                                <OffClickProfile
                                    key={index}
                                    coreMember={member}
                                    displayModal={props.displayModal}
                                    memberType={false}
                                    imgList={dMimgList.list}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                )}
                {dMimgList.isLoading && (
                    <h1 className="text-xl text-white text-center">
                        Loading Content . . .
                    </h1>
                )}
            </div>

            {/* Graphics Designers */}
            <div className="sm:px-10 mb-20">
                <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                    Graphics & Content Team
                </h1>
                {!gDimgList.isLoading && (
                    <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                        {graphicsDesignersDetails.map((member, index) => {
                            return (
                                <OffClickProfile
                                    key={index}
                                    coreMember={member}
                                    displayModal={props.displayModal}
                                    memberType={false}
                                    imgList={gDimgList.list}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                )}
                {gDimgList.isLoading && (
                    <h1 className="text-xl text-white text-center">
                        Loading Content . . .
                    </h1>
                )}
            </div>

            {/* Tech Team */}
            <div className="sm:px-10 mb-20">
                <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                    Tech Team
                </h1>
                {!techImgList.isLoading && (
                    <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                        {techTeamDetails.map((member, index) => {
                            return (
                                <OffClickProfile
                                    key={index}
                                    coreMember={member}
                                    displayModal={props.displayModal}
                                    memberType={false}
                                    imgList={techImgList.list}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                )}
                {gDimgList.isLoading && (
                    <h1 className="text-xl text-white text-center">
                        Loading Content . . .
                    </h1>
                )}
            </div>

            <div className="sm:px-10 mb-20">
                <h1 className="text-center cursor-pointer hover:text-emerald-400 hover:decoration-white duration-200 mb-9 text-3xl sm:text-5xl underline underline-offset-8 decoration-emerald-400">
                    <a
                        href="https://drive.google.com/file/d/1uzCzVDaAVNfvvJhLr6QJCJOZzYPyaHCF/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Click to view Other Members
                    </a>
                </h1>
            </div>
        </Fragment>
    );
};

export default Members;
