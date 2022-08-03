import { Fragment, useEffect } from "react";
import { teamData } from "./TechzTeamInfo/teamInfo";
import OffClickProfile from "./OffClickProfile";
import { fetchImagesFromDmTeam } from "./Team_Images/dMImgStore";
import { fetchImagesFromCoreTeam } from "./Team_Images/coreTeamImgStore";
import { useState } from "react";

const Members = (props) => {
    console.log("Members Comp");
    const coreTeamDetails = teamData.coreTeamMembers;
    const domainManagerDetails = teamData.domainManagers;

    const [imgList, setImgList] = useState([]);
    const [dMimgList, setDmImgList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDmLoading, setIsDmLoading] = useState(true);

    useEffect(() => {
        fetchImagesFromCoreTeam().then((listOfImg) => {
            // console.log(listOfImg);
            setImgList([...listOfImg]);
            setIsLoading(false);
        });

        fetchImagesFromDmTeam().then((listOfImg) => {
            // console.log('Domain Managers');
            // console.log(listOfImg);
            setDmImgList([...listOfImg]);
            setIsDmLoading(false);
        });
    }, []);

    return (
        <Fragment>
            {/* {console.log(coreSerialOrder)} */}
            <div className="sm:px-10 pt-10 mb-20">
                {!isLoading && (
                    <>
                        <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                            Core Team
                        </h1>
                        <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                            {coreTeamDetails.map((member, index) => {
                                return (
                                    <OffClickProfile
                                        key={index}
                                        coreMember={member}
                                        displayModal={props.displayModal}
                                        imgList={imgList}
                                        memberType={true}
                                        index={index}
                                    />
                                );
                            })}
                        </div>
                    </>
                )}

                {isLoading && (
                    <h1 className="text-xl text-white text-center">
                        Loading Content . . .
                    </h1>
                )}
            </div>
            <div className="sm:px-10 mb-20">
                <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                    Domain Managers
                </h1>
                {!isDmLoading && (
                    <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                        {domainManagerDetails.map((member, index) => {
                            return (
                                <OffClickProfile
                                    key={index}
                                    coreMember={member}
                                    displayModal={props.displayModal}
                                    memberType={false}
                                    imgList={dMimgList}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                )}
                {isDmLoading && (
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
                {/* <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                    {founderDetails.map((member) => {
                        return (
                            <OffClickProfile
                                key={member.clubRole}
                                coreMember={member}
                                displayModal={props.displayModal}
                            />
                        );
                    })}
                </div> */}
            </div>
        </Fragment>
    );
};

export default Members;
